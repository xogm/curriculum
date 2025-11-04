import { memo } from "react";
import Section from "./Section";
import { formatPeriod } from "@/utils/formatDates";
import { education } from "@/data/education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

type Education = (typeof education)[number];

const EducationItem = ({ edu }: { edu: Education }) => (
  <div className="group hover:bg-base-200 -mx-4 px-4 py-4 rounded-lg transition-all duration-200">
    <div className="flex gap-4">
      {/* Ícone */}
      <div className="text-primary mt-1 flex-shrink-0">
        <FontAwesomeIcon icon={faGraduationCap} size="lg" />
      </div>
      
      {/* Conteúdo */}
      <div className="flex-1">
        <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
          {edu.degree}
        </h3>
        <p className="text-sm opacity-70 mb-1">
          {edu.institution}
        </p>
        <p className="text-xs opacity-60">
          {formatPeriod({
            ...edu.period,
            currentText: edu.observations,
          })}
        </p>
      </div>
    </div>
  </div>
);

const MemoEducationItem = memo(EducationItem);

const Education = () => {
  return (
    <Section title="Educação">
      <div className="divide-y divide-base-300">
        {education.map((edu, index) => (
          <MemoEducationItem key={index} edu={edu} />
        ))}
      </div>
    </Section>
  );
};

export default memo(Education);
