import { memo } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faGlobe, faClock, faCode } from "@fortawesome/free-solid-svg-icons";
import { contactInfo } from "@/data/contactInfo";
import { personalInfo } from "@/data/personalInfo";
import ContactForm from "./ContactForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer footer-center py-10 bg-base-200 text-base-content">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Seção de Contatos Sociais */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Onde me encontrar</h3>
            <p className="mb-6 opacity-80 max-w-md">
              Conecte-se comigo nas redes sociais ou envie um e-mail. Estou sempre aberto para novas oportunidades e colaborações!
            </p>

            {/* Informações de localização e disponibilidade */}
            <div className="mb-6 space-y-2 text-sm opacity-70">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
                <span>{personalInfo.location.city}, {personalInfo.location.state} - {personalInfo.location.country}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FontAwesomeIcon icon={faClock} className="text-primary" />
                <span>Disponível para trabalho remoto e híbrido</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FontAwesomeIcon icon={faGlobe} className="text-primary" />
                <span>Timezone: GMT-3 (Brasília)</span>
              </div>
            </div>
            
            {/* Email e Redes Sociais */}
            <div className="space-y-3">
              {/* Email em destaque */}
              <Link
                href={`mailto:${contactInfo.email}`}
                className="btn btn-primary btn-block justify-start gap-3 shadow-lg hover:shadow-xl transition-all"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <span className="text-left flex-1">{contactInfo.email}</span>
              </Link>

              {/* Redes Sociais */}
              {contactInfo.social.map(({ name, url, icon }) => (
                <Link
                  key={name}
                  href={url}
                  className="btn btn-outline btn-block justify-start gap-3 hover:btn-primary transition-all shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noreferrer noopener"
                  title={name}
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                  <span className="text-left flex-1">{name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Seção do Formulário */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold mb-2">Fale comigo</h3>
              <p className="mb-4 opacity-80">
                Envie uma mensagem e vamos conversar sobre seu projeto!
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Copyright e info adicional */}
        <div className="divider max-w-6xl mx-auto mt-10"></div>
        <div className="text-center space-y-2 opacity-60">
          <p className="flex items-center justify-center gap-2 text-sm">
            <FontAwesomeIcon icon={faCode} />
            <span>Desenvolvido com Next.js, React, TypeScript & Tailwind CSS</span>
          </p>
          <p className="text-sm">
            © {currentYear} {personalInfo.firstName} {personalInfo.lastName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
