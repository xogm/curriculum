"use client";
import { useState, memo } from "react";
import Section from "./Section";
import ButtonFilter from "./ButtonFilter";
import { formatPeriod } from "@/utils/formatDates";
import { experiences } from "@/data/experiences";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

type Experience = (typeof experiences)[number];

const ExperienceItem = ({ exp, index }: { exp: Experience; index: number }) => (
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
        <FontAwesomeIcon icon={faBriefcase} size="lg" />
      </div>
      
      {/* Conteúdo */}
      <div className="flex-1">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
              {exp.role}
            </h3>
            <p className="text-sm opacity-70">
              {exp.company}
            </p>
            <div className="flex items-center gap-1 text-xs opacity-60 mt-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3" />
              {exp.location}
            </div>
          </div>
          <div className="text-xs opacity-60 flex-shrink-0">
            {formatPeriod({ ...exp.period, currentText: "presente" })}
          </div>
        </div>

        {/* Conquistas */}
        {exp.achievements && exp.achievements.length > 0 && (
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1 mb-3">
            {exp.achievements.map((ach, i) => (
              <li key={i} className="leading-relaxed">{ach}</li>
            ))}
          </ul>
        )}

        {/* Tecnologias */}
        {exp.technologies && exp.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const MemoExperienceItem = memo(ExperienceItem);

const Experience = () => {
  const [filteredExperiences, setFilteredExperiences] = useState(experiences);

  return (
    <Section title="Experiência">
      <ButtonFilter
        name="technologies"
        data={experiences}
        onClick={setFilteredExperiences}
      />
      <div className="divide-y divide-base-300 mt-6">
        <AnimatePresence mode="popLayout">
          {filteredExperiences.map((exp, index) => (
            <MemoExperienceItem key={`${exp.company}-${exp.role}`} exp={exp} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default memo(Experience);
