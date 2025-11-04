"use client";
import { useState, memo } from "react";
import Link from "next/link";
import Section from "./Section";
import ButtonFilter from "./ButtonFilter";
import { formatDate } from "@/utils/formatDates";
import { certifications } from "@/data/certifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

type Certification = (typeof certifications)[number];

const CertificationItem = ({ cert, index }: { cert: Certification; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.2 }}
    layout
    className="group hover:bg-base-200 -mx-4 px-4 py-4 rounded-lg transition-all duration-200"
  >
    <div className="flex gap-4">
      {/* Ícone */}
      <div className="text-primary mt-1 flex-shrink-0">
        <FontAwesomeIcon icon={faCertificate} size="lg" />
      </div>
      
      {/* Conteúdo */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Info principal */}
          <div className="flex-1">
            <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
              {cert.name}
            </h3>
            <p className="text-sm opacity-70">
              {cert.institution} • {formatDate(cert.date)}
            </p>
            
            {/* Skills */}
            {cert.skills && cert.skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Botão */}
          {cert.url && (
            <Link
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-ghost btn-primary gap-2 self-start md:self-center"
            >
              Ver certificado
              <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const MemoCertificationItem = memo(CertificationItem);

const Certifications = () => {
  const [filteredCertifications, setFilteredCertifications] = useState(certifications);

  return (
    <Section title="Certificações">
      <ButtonFilter
        name="skills"
        data={certifications}
        onClick={setFilteredCertifications}
      />
      <div className="divide-y divide-base-300 mt-6">
        <AnimatePresence mode="popLayout">
          {filteredCertifications.map((cert, index) => (
            <MemoCertificationItem key={cert.name} cert={cert} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default memo(Certifications);
