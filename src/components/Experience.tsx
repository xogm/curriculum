"use client";
import { useState, memo } from "react";
import Section from "./Section";
import ButtonFilter from "./ButtonFilter";
import { formatPeriod } from "@/utils/formatDates";
import { experiences } from "@/data/experiences";
import Timeline from "./Timeline";

const Experience = () => {
  const [filteredExperiences, setFilteredExperiences] = useState(experiences);

  return (
    <Section title="Experiência">
      <ButtonFilter
        name="technologies"
        data={experiences}
        onClick={setFilteredExperiences}
      />
      <Timeline
        timeline={filteredExperiences.map((exp) => {
          return {
            title: exp.role,
            subtitle: `${exp.company} em ${exp.location}`,
            date: formatPeriod({
              ...exp.period,
              currentText: "presente",
            }),
            content: (
              <ul className="list-inside list-disc py-2">
                {exp.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            ),
          };
        })}
      />
    </Section>
  );
};

export default memo(Experience);
