// app/api/send/route.ts
import FormalinShare from "@/app/emails/formalinShare";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { senderName, receiverName, receiverEmail, url } = body;

    console.log("Email payload:", { senderName, receiverName, receiverEmail, url });

    const resend = new Resend(process.env.RESEND_API_KEY)
    console.log("Resend API Key:", process.env.WENA_PRO_API as string);

    const emailComponent = FormalinShare({ senderName, receiverName, url });

    const { data, error } = await resend.emails.send({
from: "IDEAISCAPITAL LTD <noreply@ideaiscapital.africa>",
      to: receiverEmail,
      subject: "IDEAISCAPITAL LTD | CHECK OUT THIS POST",
      react: emailComponent,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent!", data }, { status: 200 });
  } catch (err) {
    console.error("Email sending failed:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
