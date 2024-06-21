"use client";
import { useState, ChangeEvent, FormEvent, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface InputFieldProps {
  label: string;
  type: string;
  name: keyof FormData;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  disabled: boolean;
}

const InputField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}: InputFieldProps) => (
  <div className="form-control">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="textarea textarea-bordered"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input input-bordered"
      />
    )}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    disabled: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(
      `mailto:ronis@rx.dev.br?subject=${formData.name} - ${formData.email}&body=${formData.message}`
    );
    setFormData((data) => ({ ...data, disabled: true }));
  };

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <h2 className="card-title">Contato</h2>
        <InputField
          label="Nome"
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="E-mail"
          type="email"
          name="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Mensagem"
          type="textarea"
          name="message"
          placeholder="Digite sua mensagem aqui..."
          value={formData.message}
          onChange={handleChange}
        />
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={formData.disabled}
          >
            <FontAwesomeIcon icon={faEnvelope} size={"lg"} />
            <span>Enviar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(ContactForm);
