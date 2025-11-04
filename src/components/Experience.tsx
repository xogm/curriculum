"use client";
import { useState, memo } from "react";
import Section from "./Section";
import ButtonFilter from "./ButtonFilter";
import { formatPeriod } from "@/utils/formatDates";
import { experiences } from "@/data/experiences";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faMapMarkerAlt, faCalendar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

type Experience = (typeof experiences)[number];

const ITEMS_PER_PAGE = 3;

const ExperienceItem = ({ exp, index }: { exp: Experience; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.2 }}
    layout
    className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-300"
  >
    <div className="card-body p-6">
      <div className="flex items-start gap-4">
        {/* Ícone */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <FontAwesomeIcon icon={faBriefcase} className="text-primary text-xl" />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 min-w-0">
          {/* Cabeçalho */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-base-content break-words">
                {exp.role}
              </h3>
              <p className="text-base text-base-content/70 font-medium">
                {exp.company}
              </p>
            </div>
            <div className="badge badge-outline badge-lg whitespace-nowrap gap-2">
              <FontAwesomeIcon icon={faCalendar} className="w-3" />
              {formatPeriod({ ...exp.period, currentText: "Atual" })}
            </div>
          </div>

          {/* Localização */}
          <div className="flex items-center gap-2 text-sm text-base-content/60 mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
            <span>{exp.location}</span>
          </div>

          {/* Conquistas */}
          {exp.achievements && exp.achievements.length > 0 && (
            <ul className="space-y-2 mb-4">
              {exp.achievements.map((ach, i) => (
                <li key={i} className="flex gap-2 text-sm text-base-content/80">
                  <span className="text-primary mt-1">•</span>
                  <span className="flex-1">{ach}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tecnologias */}
          {exp.technologies && exp.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="badge badge-primary badge-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const MemoExperienceItem = memo(ExperienceItem);

const Experience = () => {
  const [filteredExperiences, setFilteredExperiences] = useState(experiences);
  const [currentPage, setCurrentPage] = useState(1);

  // Resetar para página 1 quando filtrar
  const handleFilterChange = (filtered: typeof experiences) => {
    setFilteredExperiences(filtered);
    setCurrentPage(1);
  };

  // Calcular paginação
  const totalPages = Math.ceil(filteredExperiences.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredExperiences.slice(startIndex, endIndex);

  return (
    <Section title="Experiência" color="primary">
      <ButtonFilter
        name="technologies"
        data={experiences}
        onClick={handleFilterChange}
      />
      
      <div className="space-y-4 mt-6">
        <AnimatePresence mode="popLayout">
          {currentItems.map((exp, index) => (
            <MemoExperienceItem key={`${exp.company}-${exp.role}`} exp={exp} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="btn btn-sm btn-circle btn-ghost"
            aria-label="Página anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`btn btn-sm ${
                  currentPage === page ? 'btn-primary' : 'btn-ghost'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="btn btn-sm btn-circle btn-ghost"
            aria-label="Próxima página"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      {/* Informação de itens */}
      <div className="text-center text-sm text-base-content/60 mt-4">
        Mostrando {startIndex + 1}-{Math.min(endIndex, filteredExperiences.length)} de {filteredExperiences.length} experiências
      </div>
    </Section>
  );
};

export default memo(Experience);
