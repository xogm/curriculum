import { ContactFormData } from "./types";
import Mailgun from "mailgun.js";
import FormData from "form-data";
import { NextResponse, NextRequest } from "next/server";

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY as string,
});

export async function POST(request: NextRequest) {
  const data: ContactFormData = await request.json();

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN as string, {
      from: `${data.name} (${data.email}) <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: process.env.MY_EMAIL as string,
      subject: data.subject,
      text: data.message,
      "h:Reply-To": data.email
    });
    return NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao enviar email." },
      { status: 500 }
    );
  }
}
