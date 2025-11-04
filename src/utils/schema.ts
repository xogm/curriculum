import { personalInfo } from "@/data/personalInfo";
import { contactInfo } from "@/data/contactInfo";

export function generatePersonSchema() {
  const linkedIn = contactInfo.social.find((s) => s.name === "LinkedIn")?.url;
  const github = contactInfo.social.find((s) => s.name === "GitHub")?.url;
  
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${personalInfo.firstName} ${personalInfo.lastName}`,
    alternateName: personalInfo.nickname,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    image: personalInfo.avatarUrl,
    url: "https://ronis.com.br",
    sameAs: [
      linkedIn,
      github,
      ...contactInfo.social.map((s) => s.url),
    ].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location.city,
      addressRegion: personalInfo.location.state,
      addressCountry: personalInfo.location.country,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personalInfo.firstName} ${personalInfo.lastName} - ${personalInfo.title}`,
    description: personalInfo.bio,
    url: "https://ronis.com.br",
    author: {
      "@type": "Person",
      name: `${personalInfo.firstName} ${personalInfo.lastName}`,
    },
    inLanguage: "pt-BR",
  };
}

export function generateProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: generatePersonSchema(),
  };
}
