import type { Metadata } from "next";
import { Albert_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero Proof App - Every Sober Day Counts",
  description: "Watch your health improve and savings grow in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="25f94ca0-d8d0-4909-8882-9fbdac847a2b"
        async
      ></script>
      <body className={`${albertSans.variable} ${inter.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
