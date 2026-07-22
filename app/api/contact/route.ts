import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Save to Database
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    // Gmail Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1️⃣ Mail to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: ` ${subject}`,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr/>

        <h3>Message</h3>

        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    // 2️⃣ Auto Reply to Visitor
    await transporter.sendMail({
      from: `"Diparno Chatterjee" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">

          <h2 style="color:#2563eb;">Thank You, ${name}! 👋</h2>

          <p>Thank you for contacting me through my portfolio website.</p>

          <p>Your message has been received successfully.</p>

          <p>I will review your inquiry and get back to you as soon as possible.</p>

          <hr style="margin:20px 0;">

          <p>Best Regards,</p>

          <h3 style="margin:0;">Diparno Chatterjee</h3>

          <p>Full Stack Developer</p>

          <p>🌐 https://jeltraxd.com</p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}