import { memo } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { personalInfo } from "@/data/personalInfo";
import { contactInfo } from "@/data/contactInfo";

const Header = () => {
  const {
    firstName,
    lastName,
    nickname,
    title,
    bio,
    backgroundUrl,
    avatarUrl,
    location: { city, state, country },
  } = personalInfo;

  return (
    <header>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content">
          <div className="max-w-md text-center text-neutral-content">
            <div className="avatar mb-6 max-md:mt-6">
              <div className="rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                <Image
                  src={avatarUrl}
                  alt={nickname}
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold">
              {firstName} <span className="italic">{lastName}</span>
            </h1>
            <p className="text-sm sm:mb-2 italic">
              {city}, {state} - {country}{" "}
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
            </p>
            <h2 className="mb-4 text-2xl">{title}</h2>
            <p className="mb-4 text-sm">{bio}</p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="btn btn-primary"
                aria-label="Entre em contato comigo"
              >
                Fale comigo
              </a>
              <a
                href={
                  contactInfo.social.find((s) => s.name === "linkedin")?.url
                }
                className="btn btn-secondary"
                aria-label="Acesse meu LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
