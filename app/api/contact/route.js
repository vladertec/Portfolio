import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Message from ${name}`,
      text: `Phone: ${phone}\nMessage: ${message}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    )
  }
}
