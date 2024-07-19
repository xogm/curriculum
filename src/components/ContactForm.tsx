"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormData } from "@/app/contact/types";
import { useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMagic } from "@fortawesome/free-solid-svg-icons";
import FloatLabelField from "./FloatLabelField";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

const ContactForm = () => {
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = methods;
  const [formResult, setFormResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormResult({ success: true, message: "Email enviado com sucesso!" });
      } else {
        const errorData = await response.json();
        setFormResult({ success: false, message: errorData.error });
      }
    } catch (error) {
      setFormResult({ success: false, message: "Erro ao enviar email." });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <FloatLabelField
          label="Nome"
          type="text"
          {...register("name")}
          id="name"
        />
        <FloatLabelField
          label="Email"
          type="email"
          {...register("email")}
          id="email"
        />
        <FloatLabelField
          label="Assunto"
          type="text"
          {...register("subject")}
          id="subject"
        />
        <FloatLabelField
          label="Mensagem"
          as="textarea"
          {...register("message")}
          id="message"
        />
        {formResult && (
          <div
            className={`alert ${
              formResult.success ? "alert-success" : "alert-error"
            }`}
          >
            {formResult.message}
          </div>
        )}
        <button
          type="submit"
          className="btn btn-primary btn-lg w-full mt-4"
          disabled={isSubmitting || isSubmitSuccessful}
        >
          <FontAwesomeIcon icon={isSubmitting ? faMagic : faEnvelope} />
          <span>{isSubmitting ? "Enviando..." : "Enviar"}</span>
        </button>
      </form>
    </FormProvider>
  );
};

export default memo(ContactForm);
