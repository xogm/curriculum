"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormData } from "@/app/contact/types";
import { useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import FloatLabel from "./FloatLabel";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres").max(200, "Assunto muito longo"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(5000, "Mensagem muito longa"),
  honeypot: z.string().max(0, "Spam detectado").optional(),
});

const ContactForm = () => {
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = methods;
  const [formResult, setFormResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    // Verificação de honeypot
    if (data.honeypot) {
      setFormResult({ success: false, message: "Spam detectado." });
      return;
    }

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormResult({ success: true, message: "Email enviado com sucesso!" });
        // Limpar formulário após 3 segundos
        setTimeout(() => {
          reset();
          setFormResult(null);
        }, 3000);
      } else {
        setFormResult({ 
          success: false, 
          message: result.error || "Erro ao enviar email." 
        });
      }
    } catch (error) {
      setFormResult({ success: false, message: "Erro ao enviar email. Tente novamente." });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl mx-auto" id="contact">
        {/* Honeypot field - hidden from users */}
        <input
          {...register("honeypot")}
          type="text"
          autoComplete="off"
          tabIndex={-1}
          className="absolute opacity-0 pointer-events-none"
          aria-hidden="true"
        />
        
        <div className="space-y-5">
          <FloatLabel label="Nome Completo" name="name">
            <input 
              {...register("name")} 
              type="text"
              autoComplete="name"
              aria-label="Nome completo"
              aria-required="true"
            />
          </FloatLabel>
          
          <FloatLabel label="E-mail" name="email">
            <input 
              {...register("email")} 
              type="email"
              autoComplete="email"
              aria-label="Endereço de email"
              aria-required="true"
            />
          </FloatLabel>
          
          <FloatLabel label="Assunto" name="subject">
            <input 
              {...register("subject")} 
              type="text"
              aria-label="Assunto da mensagem"
              aria-required="true"
            />
          </FloatLabel>
          
          <FloatLabel label="Mensagem" name="message">
            <textarea 
              {...register("message")}
              aria-label="Mensagem"
              aria-required="true"
              rows={6}
            />
          </FloatLabel>
        </div>
        
        {formResult && (
          <div
            role="alert"
            className={`alert ${
              formResult.success ? "alert-success" : "alert-error"
            } mt-6 shadow-lg`}
          >
            {formResult.success && (
              <FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
            )}
            <span className="font-medium">{formResult.message}</span>
          </div>
        )}
        
        <button
          type="submit"
          className="btn btn-primary btn-lg w-full mt-6 gap-2 shadow-lg hover:shadow-xl transition-all"
          disabled={isSubmitting || isSubmitSuccessful}
          aria-label={isSubmitting ? "Enviando mensagem" : "Enviar mensagem"}
        >
          <FontAwesomeIcon 
            icon={isSubmitting ? faPaperPlane : faEnvelope} 
            className={isSubmitting ? "animate-pulse" : ""}
          />
          <span>{isSubmitting ? "Enviando..." : "Enviar"}</span>
        </button>
      </form>
    </FormProvider>
  );
};

export default memo(ContactForm);
