import { ContactFormData } from "./types";
import Mailgun from "mailgun.js";
import FormData from "form-data";
import { NextResponse, NextRequest } from "next/server";
import { rateLimit } from "@/utils/rateLimiter";

const mailgun = new Mailgun(FormData);
const mg = process.env.MAILGUN_API_KEY
  ? mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    })
  : null;

export async function POST(request: NextRequest) {
  // Verificar se Mailgun está configurado
  if (!mg || !process.env.MAILGUN_DOMAIN || !process.env.MY_EMAIL) {
    return NextResponse.json(
      { error: "Serviço de email não configurado. Entre em contato diretamente." },
      { status: 503 }
    );
  }

  // Get client IP for rate limiting
  const ip = request.headers.get("x-forwarded-for") || 
             request.headers.get("x-real-ip") || 
             "unknown";

  // Apply rate limiting: 5 emails per hour per IP
  const rateLimitResult = rateLimit(ip, { maxRequests: 5, windowMs: 60 * 60 * 1000 });
  
  if (!rateLimitResult.allowed) {
    const resetDate = new Date(rateLimitResult.resetTime);
    return NextResponse.json(
      { 
        error: `Muitas tentativas. Tente novamente após ${resetDate.toLocaleTimeString('pt-BR')}.` 
      },
      { 
        status: 429,
        headers: {
          'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
        }
      }
    );
  }

  const data: ContactFormData = await request.json();

  // Validate honeypot
  if (data.honeypot) {
    return NextResponse.json(
      { error: "Spam detectado." },
      { status: 400 }
    );
  }

  // Basic validation
  if (!data.name || !data.email || !data.subject || !data.message) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios." },
      { status: 400 }
    );
  }

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN as string, {
      from: `${data.name} (${data.email}) <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: process.env.MY_EMAIL as string,
      subject: `[Contato Site] ${data.subject}`,
      text: data.message,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Assunto:</strong> ${data.subject}</p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
      "h:Reply-To": data.email
    });
    
    return NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar email. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
