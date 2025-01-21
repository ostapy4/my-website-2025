import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { EmailTemplate } from "components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const { error } = await resend.emails.send({
      from: "Ostap Konashuk <onboarding@resend.dev>",
      // to: ["ostap.konashuk@gmail.com"],
      to: ["stadnyk.andy@gmail.com"],
      subject: "Test Free Lesson",
      react: EmailTemplate({ email: data.email }) as React.ReactElement,
    });
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json({
      message: "Email send successfully",
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
