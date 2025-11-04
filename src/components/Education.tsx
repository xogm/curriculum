import { memo } from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { education } from "@/data/education";
import { formatPeriod } from "@/utils/formatDates";
import ListSection from "./ListSection";

const Education = () => {
  const items = education.map((edu, index) => ({
    id: `edu-${index}`,
    title: edu.degree,
    subtitle: edu.institution,
    period: formatPeriod(edu.period),
    description: edu.observations,
  }));

  return (
    <ListSection
      title="Educação"
      sectionId="educacao"
      items={items}
      icon={faGraduationCap}
    />
  );
};

export default memo(Education);
