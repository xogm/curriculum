import { memo } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { contactInfo } from "@/data/contactInfo";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <FontAwesomeIcon icon={faCode} size="2x" />
        <p>Vamos criar algo incrível juntos! Entre em contato.</p>
      </div>
      <nav>
        <h6 className="footer-title">Contato</h6>
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
      </nav>
    </footer>
  );
};

export default memo(Footer);
