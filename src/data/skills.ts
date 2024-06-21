enum SkillLevel {
  BEGINNER = 1,
  INTERMEDIATE = 2,
  ADVANCED = 3,
  PROFESSIONAL = 4,
  EXPERT = 5,
}

interface Skill {
  name: string;
  level: SkillLevel;
}

export interface Skills {
  languages: Skill[];
  databases: Skill[];
  frameworks: Skill[];
  softSkills: string[];
}

export const skills: Skills = {
  languages: [
    { name: "PHP", level: SkillLevel.PROFESSIONAL },
    { name: "JavaScript", level: SkillLevel.PROFESSIONAL },
    { name: "TypeScript", level: SkillLevel.PROFESSIONAL },
    { name: "Java", level: SkillLevel.BEGINNER },
    { name: "C#", level: SkillLevel.BEGINNER },
  ],
  databases: [
    { name: "MySQL", level: SkillLevel.PROFESSIONAL },
    { name: "MongoDB", level: SkillLevel.PROFESSIONAL },
    { name: "Firebase", level: SkillLevel.BEGINNER },
    { name: "PostgreSQL", level: SkillLevel.ADVANCED },
  ],
  frameworks: [
    { name: "Node.js", level: SkillLevel.PROFESSIONAL },
    { name: "React.js", level: SkillLevel.ADVANCED },
    { name: "Next.js", level: SkillLevel.INTERMEDIATE },
    { name: "React Native", level: SkillLevel.ADVANCED },
    { name: "Express", level: SkillLevel.PROFESSIONAL },
    { name: "Laravel", level: SkillLevel.PROFESSIONAL },
  ],
  softSkills: [
    "Comunicação",
    "Liderança",
    "Resolução de problemas",
    "Gestão de projetos",
    "Trabalho autônomo",
    "Trabalho colaborativo",
  ],
};
