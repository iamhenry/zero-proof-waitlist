import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'
import { NextRequest, NextResponse } from 'next/server'

// Rate limiting map
const ipRequests = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_DURATION = 3600000 // 1 hour in milliseconds
const MAX_REQUESTS = 5

interface GoogleAPIError {
  response?: {
    data?: {
      error?: {
        message?: string;
        status?: string;
      };
    };
    status?: number;
  };
  message?: string;
}

function formatDate(date: Date): string {
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/New_York'  // Using ET, adjust if needed
  })
}

async function addToSheet(email: string) {
  try {
    if (!process.env.GOOGLE_SHEET_ID) {
      throw new Error('Missing GOOGLE_SHEET_ID environment variable')
    }
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      throw new Error('Missing GOOGLE_APPLICATION_CREDENTIALS environment variable')
    }

    // Parse the credentials JSON from environment variable
    let serviceAccountCreds
    try {
      serviceAccountCreds = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
      console.log('Successfully parsed service account credentials')
    } catch (error) {
      console.error('Error parsing service account credentials:', error)
      throw new Error('Invalid service account credentials format')
    }

    console.log('Service Account Email:', serviceAccountCreds.client_email)
    console.log('Sheet ID:', process.env.GOOGLE_SHEET_ID)
    console.log('Private Key starts with:', serviceAccountCreds.private_key.substring(0, 50))

    // First verify the JWT can authenticate
    const auth = new JWT({
      email: serviceAccountCreds.client_email,
      key: serviceAccountCreds.private_key,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file'
      ],
    })

    console.log('Created JWT auth object, attempting to get access token...')
    
    try {
      const token = await auth.getAccessToken()
      console.log('Successfully obtained access token:', token.token?.substring(0, 20) + '...')
    } catch (authError) {
      console.error('Failed to get access token:', authError)
      throw authError
    }

    console.log('Creating GoogleSpreadsheet instance...')
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth)
    
    try {
      await doc.loadInfo()
      console.log('Successfully loaded document info')
      console.log('Document title:', doc.title)
    } catch (error: unknown) {
      const loadError = error as GoogleAPIError
      console.error('Error loading document:', loadError)
      if (loadError.response?.data?.error?.message) {
        console.error('Detailed error message:', loadError.response.data.error.message)
        console.error('Error status:', loadError.response.data.error.status)
      }
      throw loadError
    }
    
    const sheet = doc.sheetsByIndex[0]
    if (!sheet) {
      throw new Error('No sheet found in the document')
    }
    console.log('Got first sheet:', sheet.title)
    
    const now = new Date()
    await sheet.addRow({
      email,
      timestamp: formatDate(now),
    })
    console.log('Successfully added row')

    return true
  } catch (error) {
    const apiError = error as GoogleAPIError
    console.error('Detailed error:', apiError.message || 'Unknown error occurred')
    if (apiError.response) {
      console.error('Response error data:', apiError.response.data)
      console.error('Response error status:', apiError.response.status)
    }
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    const now = Date.now()
    const userRequests = ipRequests.get(ip)
    
    if (userRequests) {
      if (now - userRequests.timestamp < RATE_LIMIT_DURATION) {
        if (userRequests.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { message: 'Too many requests. Please try again later.' },
            { status: 429 }
          )
        }
        userRequests.count++
      } else {
        ipRequests.set(ip, { count: 1, timestamp: now })
      }
    } else {
      ipRequests.set(ip, { count: 1, timestamp: now })
    }

    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const success = await addToSheet(email)
    
    if (!success) {
      return NextResponse.json(
        { message: 'Failed to add email to waitlist.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Successfully joined the waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { message: 'An error occurred while processing your request.' },
      { status: 500 }
    )
  }
} 