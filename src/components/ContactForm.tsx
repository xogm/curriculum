"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormData } from "@/app/contact/types";
import { useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
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
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h2 className="card-title">Entre em contato</h2>
        <div className="form-control">
          <label
            htmlFor="name"
            className="label"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`input input-bordered ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div className="form-control">
          <label
            htmlFor="email"
            className="label"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`input input-bordered ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control">
          <label
            htmlFor="subject"
            className="label"
          >
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            className={`input input-bordered ${
              errors.subject ? "border-red-500" : ""
            }`}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label
            htmlFor="message"
            className="label"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            {...register("message")}
            className={`textarea textarea-bordered ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>
        {formResult && (
          <p
            className={`mb-2 text-sm ${
              formResult.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {formResult.message}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-secondary"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}{" "}
          <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default memo(ContactForm);
