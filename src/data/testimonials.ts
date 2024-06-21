import { personalInfo } from "./personalInfo";

export interface Testimonial {
  author: {
    name: string;
    title?: string;
    company?: string;
  };
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    author: {
      name: "Jerry Adriano",
      title: "CEO",
      company: "Hipermercadinho Local",
    },
    quote:
      "O trabalho do Ronis é excelente, ele é muito dedicado e atencioso. Recomendo!",
  },
  {
    author: {
      name: "Aglayrton Julião",
      title: "Professor",
      company: "UNIASSELVI",
    },
    quote:
      "O Ronis é um excelente aluno, muito dedicado e esforçado. Ele tem um futuro brilhante!",
  },
  {
    author: {
      name: "Jovita Maria",
      title: "Mãe",
    },
    quote:
      "Meu filho é muito inteligente e esforçado. Ele é um orgulho para a família!",
  },
  {
    author: {
      name: `${personalInfo.lastName} ${personalInfo.nickname}`,
      title: "Eu mesmo",
    },
    quote: "❤️",
  },
];
