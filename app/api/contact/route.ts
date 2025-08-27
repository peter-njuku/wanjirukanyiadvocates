import { NextRequest, NextResponse } from 'next/server';
import { google } from "googleapis";

type SheetForm = {
  firstName: string;
  lastName: string;
  email: string;
  matterType: string;
  description: string;
};

// Handle POST requests
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json() as SheetForm;
    
    // Validate required fields
    const { firstName, lastName, email, matterType, description } = body;
    
    if (!firstName || !lastName || !email || !matterType || !description) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    // Get current timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Africa/Nairobi',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Append data to Google Sheets
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:F1", // Updated to include timestamp column
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          timestamp,
          firstName,
          lastName,
          email,
          matterType,
          description
        ]],
      },
    });

    // Log successful submission
    console.log('Contact form submitted successfully:', {
      timestamp,
      firstName,
      lastName,
      email,
      matterType,
      range: response.data.tableRange
    });

    return NextResponse.json({
      message: "Your inquiry has been submitted successfully. We will get back to you soon.",
      data: {
        tableRange: response.data.tableRange,
        timestamp: timestamp
      }
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Handle specific Google API errors
    if (error instanceof Error) {
      if (error.message.includes('PERMISSION_DENIED')) {
        return NextResponse.json(
          { message: "Server configuration error. Please contact support." },
          { status: 500 }
        );
      }
      
      if (error.message.includes('Quota exceeded')) {
        return NextResponse.json(
          { message: "Service temporarily unavailable. Please try again later." },
          { status: 503 }
        );
      }
    }
    
    return NextResponse.json(
      { message: "An error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing/health check)
export async function GET() {
  return NextResponse.json(
    { 
      message: "Contact API endpoint is working",
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}