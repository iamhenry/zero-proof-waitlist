## User Stories

- As a visitor, I want to join the waitlist by submitting my email, so that I can be notified when the product launches
- As a visitor, I want to see confirmation that my submission was successful, so that I know I'm on the list
- As an admin, I want submitted emails to be automatically added to a Google Sheet, so that I can manage and track signups
- As an admin, I want basic spam protection, so that the waitlist remains clean and valid

## Frontend Architecture

### 1. Setup & Configuration

- Next.js 14 project with App Router
- Key dependencies:
  - shadcn/ui for UI components
  - tailwindcss for styling
  - react-hot-toast for notifications
  - zod for form validation
- Components organization:
  - components/ui (shadcn components)
  - components/forms (form-related components)
  - components/layout (layout components)

### 2. Core Features

- Pages/routes:
  - app/page.tsx (main landing page with form)
  - app/api/waitlist/route.ts (API endpoint)
- Key components:
  - WaitlistForm (main email collection form)
  - SuccessMessage (confirmation display)
  - LoadingSpinner
- State management:
  - React Hook Form for form state
  - Loading states using React useState
  - Toast notifications for success/error states

### 3. Data Flow

- Form submission handling with client-side validation
- API call to backend endpoint
- Loading state management during submission
- Toast notifications for success/error feedback

## Backend Architecture

### 1. Setup & Configuration

- Next.js API routes
- Google Sheets API setup
- Environment variables:
  - GOOGLE_SERVICE_ACCOUNT_EMAIL
  - GOOGLE_PRIVATE_KEY
  - GOOGLE_SHEET_ID

### 2. Core Features

- API endpoints:

  - POST /api/waitlist
    - Validates email
    - Checks for duplicates
    - Adds to Google Sheet
    - Returns success/error

- Rate limiting implementation
- Email validation
- Google Sheets integration

### 3. Data Flow

- Request validation
- Rate limit checking
- Google Sheets API interaction
- Error handling for:
  - Invalid emails
  - Rate limit exceeded
  - Duplicate entries
  - Google Sheets API errors

## Integration Points

- API Contract:

  ```typescript
  // Request
  interface WaitlistRequest {
    email: string;
  }

  // Response
  interface WaitlistResponse {
    success: boolean;
    message: string;
  }
  ```

- Environment Variables:

  ```env
  GOOGLE_SERVICE_ACCOUNT_EMAIL=
  GOOGLE_PRIVATE_KEY=
  GOOGLE_SHEET_ID=
  RATE_LIMIT_REQUESTS=
  RATE_LIMIT_DURATION=
  ```

- Shared Types:
  ```typescript
  interface WaitlistEntry {
    email: string;
    timestamp: string;
    source?: string;
  }
  ```
