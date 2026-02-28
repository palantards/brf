import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64 ?? "", "base64").toString("utf8"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Ogiltig e-postadress" }, { status: 400 });
    }

    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A:B",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, email]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sheets error:", error);
    return NextResponse.json({ error: "Något gick fel" }, { status: 500 });
  }
}
