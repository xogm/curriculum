import { memo } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { personalInfo } from "@/data/personalInfo";

const Header = () => {
  const {
    firstName,
    lastName,
    nickname,
    title,
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
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center text-neutral-content w-96">
            <div className="avatar mb-6 max-md:mt-6">
              <div className="w-24 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                <Image
                  src={avatarUrl}
                  alt={nickname}
                  width={200}
                  height={200}
                />
                </div>
            </div>
            <h1 className="text-5xl font-bold">
              {firstName} <span className="italic text-primary">{lastName}</span>
            </h1>
            <h2 className="mb-4 text-2xl text-primary">{title}</h2>
            <p className="text-sm sm:mb-2 italic text-neutral-content">
              {city}, {state} - {country}{" "}
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
