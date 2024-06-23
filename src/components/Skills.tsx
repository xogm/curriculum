import { memo } from "react";
import Section from "./Section";
import Rating from "./Rating";
import { getSkillsOrdered, Skills as ISkills } from "@/data/skills";

const skills = getSkillsOrdered();

type SkillListProps = {
  title: string;
  skills: ISkills["languages"] | string[];
};

const SkillList = ({ title, skills }: SkillListProps) => (
  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2">
          {typeof skill === "object" && <Rating rating={skill.level} />}
          {typeof skill === "string" ? skill : skill.name}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => (
  <Section title="Skills">
    <div className="grid gap-4 md:grid-cols-2">
      <SkillList title="Soft Skills" skills={skills.softSkills} />
      <SkillList title="Linguagens" skills={skills.languages} />
      <SkillList title="Bancos de Dados" skills={skills.databases} />
      <SkillList title="Frameworks" skills={skills.frameworks} />
    </div>
  </Section>
);

export default memo(Skills);
