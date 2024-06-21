import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

interface Social {
  name: string;
  url: string;
  icon: IconProp;
}

export interface ContactInfo {
  email: string;
  social: Social[];
}

export const contactInfo: ContactInfo = {
  email: "ronis@rx.dev.br",
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rxpt/",
      icon: faLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/rxpt",
      icon: faGithub,
    },
    {
      name: "Website",
      url: "https://rx.dev.br",
      icon: faCode,
    },
  ],
};
