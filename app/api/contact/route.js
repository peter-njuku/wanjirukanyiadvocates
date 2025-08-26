// pages/api/contact.js
import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, matterType, description } = req.body;

    if (!firstName || !lastName || !email || !matterType || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // 🔑 Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Replace with your Google Sheet ID
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Append new row
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G", // Adjust sheet name & range
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            firstName,
            lastName,
            email,
            matterType,
            description,
            new Date().toISOString(),
          ],
        ],
      },
    });

    res.status(200).json({
      message: "Form submitted successfully & saved to Google Sheet",
      reference: `REF-${Date.now()}`,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
