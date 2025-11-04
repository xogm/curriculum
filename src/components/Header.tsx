import { memo } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { personalInfo } from "@/data/personalInfo";
import { contactInfo } from "@/data/contactInfo";

const Header = () => {
  const {
    firstName,
    lastName,
    title,
    bio,
    backgroundUrl,
    avatarUrl,
    location: { city, state, country },
  } = personalInfo;

  const linkedIn = contactInfo.social.find((s) => s.name === "LinkedIn");
  const github = contactInfo.social.find((s) => s.name === "GitHub");

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header role="banner">
      <div
        className="hero min-h-[70vh] md:min-h-screen relative"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
        role="img"
        aria-label="Imagem de fundo do perfil"
      >
        <div className="hero-overlay bg-opacity-70 bg-gradient-to-b from-black/60 to-black/80" aria-hidden="true"></div>
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            {/* Avatar */}
            <div className="avatar mb-6">
              <div className="w-32 md:w-40 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-base-100 shadow-2xl">
                <Image
                  src={avatarUrl}
                  alt={`Foto de perfil de ${firstName} ${lastName}`}
                  width={160}
                  height={160}
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Nome e Título */}
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">
              {firstName} <span className="text-primary">{lastName}</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white/90">
              {title}
            </h2>

            {/* Localização */}
            <p className="text-sm mb-5 text-white/80 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-primary" aria-hidden="true" />
              <span>{city}, {state} - {country}</span>
            </p>

            {/* Bio */}
            <p className="text-base md:text-lg leading-relaxed mb-8 text-white/90 max-w-xl mx-auto">
              {bio}
            </p>

            {/* Botões de ação */}
            <div className="flex flex-wrap justify-center gap-3 print-hidden">
              <a
                href="#contact"
                onClick={handleContactClick}
                className="btn btn-primary gap-2 shadow-lg"
                aria-label="Entre em contato comigo"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Fale comigo
              </a>
              
              {linkedIn && (
                <a
                  href={linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-neutral gap-2 shadow-lg text-white border-0"
                  aria-label="Acesse meu perfil no LinkedIn (abre em nova aba)"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  LinkedIn
                </a>
              )}

              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-neutral gap-2 shadow-lg text-white border-0"
                  aria-label="Acesse meu perfil no GitHub (abre em nova aba)"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
