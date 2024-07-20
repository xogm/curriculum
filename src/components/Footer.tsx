import { memo } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { contactInfo } from "@/data/contactInfo";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="footer footer-center py-4 bg-neutral text-neutral-content">
      <div className="w-md-2">
        <h6 className="footer-title">Onde me encontrar</h6>
        <div className="grid grid-flow-col gap-4">
          <Link
            href={`mailto:${contactInfo.email}`}
            className="btn btn-square btn-ghost btn-sm"
            title="E-mail"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </Link>
          {contactInfo.social.map(({ name, url, icon }) => (
            <Link
              key={name}
              href={url}
              className="btn btn-square btn-ghost btn-sm"
              target="_blank"
              rel="noreferrer noopener"
              title={name}
            >
              <FontAwesomeIcon icon={icon} size="lg" />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-md-2">
        <h6 className="footer-title">Fale comigo</h6>
        <p className="footer-subtitle">
          Envie-me uma mensagem para conversarmos sobre seu projeto.
        </p>
        <ContactForm />
      </div>
    </footer>
  );
};

export default memo(Footer);
