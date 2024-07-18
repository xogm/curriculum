import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

interface Social {
  name: string;
  url: string;
  icon: IconProp;
}

export interface ContactInfo {
  email: string;
  social: Social[];
}

const whatsappNumber = "5585999292118";
const whatsappMessage = "Olá, Ronis! Vi seu site e gostaria de falar com você.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export const contactInfo: ContactInfo = {
  email: "ronis@x1.dev.br",
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/valdirronis/",
      icon: faLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/x1db",
      icon: faGithub,
    },
    {
      name: "WhatsApp",
      url: whatsappLink,
      icon: faWhatsapp,
    },
  ],
};
