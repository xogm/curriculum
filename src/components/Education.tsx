import { memo } from "react";
import Section from "./Section";
import Timeline from "./Timeline";
import { formatPeriod } from "@/utils/formatDates";
import { education } from "@/data/education";

const Education = () => {
  return (
    <Section title="Educação">
      <Timeline
        timeline={education.map((edu) => {
          return {
            title: edu.degree,
            subtitle: edu.institution,
            date: formatPeriod({
              ...edu.period,
              currentText: edu.observations,
            }),
          };
        })}
      />
    </Section>
  );
};

export default memo(Education);
