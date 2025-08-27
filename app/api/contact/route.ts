import type { NextApiRequest, NextApiResponse } from "next"
import { google } from "googleapis"

type sheetForm = {
  firstName: string
  lastName: string
  email: string
  matterType: string
  description: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Post methods allowed" })
  }
  const body = req.body as sheetForm

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "http://www.googleapis.com/auth/drive",
        "http://www.googleapis.com/auth/drive.file",
        "http://www.googleapis.com/auth/spreadsheets",
      ],
    })

    const sheets = google.sheets({
      auth,
      version: "v4",
    })

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:E1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.firstName, body.lastName, body.email, body.matterType, body.description]],
      },
    })
    return res.status(200).json({
      data: response.data,
    })
  } catch (e) {
    return res.status(500).send({ message: "something is wrong" })
  }
}
