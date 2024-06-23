import lo from "lodash";

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

const skills: Skills = {
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
    "Empatia",
    "Resolução de problemas",
    "Gestão de tempo",
    "Adaptabilidade",
    "Pensamento crítico",
    "Proatividade",
    "Trabalho em equipe",
  ],
};

export const getSkills = (): Skills => {
  return lo.cloneDeep(skills);
};

export const getSkillsOrdered = (): Skills => {
  const orderedSkills = lo.cloneDeep(skills);
  orderedSkills.languages = lo.orderBy(
    orderedSkills.languages,
    ["level", "name"],
    ["desc", "asc"]
  );
  orderedSkills.databases = lo.orderBy(
    orderedSkills.databases,
    ["level", "name"],
    ["desc", "asc"]
  );
  orderedSkills.frameworks = lo.orderBy(
    orderedSkills.frameworks,
    ["level", "name"],
    ["desc", "asc"]
  );
  orderedSkills.softSkills = lo.orderBy(orderedSkills.softSkills);
  return orderedSkills;
};

export const getSkillLevelName = (level: SkillLevel): string => {
  switch (level) {
    case SkillLevel.BEGINNER:
      return "Iniciante";
    case SkillLevel.INTERMEDIATE:
      return "Intermediário";
    case SkillLevel.ADVANCED:
      return "Avançado";
    case SkillLevel.PROFESSIONAL:
      return "Profissional";
    case SkillLevel.EXPERT:
      return "Especialista";
    default:
      return "Desconhecido";
  }
};

export const getSkillLevelColor = (level: SkillLevel): string => {
  switch (level) {
    case SkillLevel.BEGINNER:
      return "red";
    case SkillLevel.INTERMEDIATE:
      return "orange";
    case SkillLevel.ADVANCED:
      return "yellow";
    case SkillLevel.PROFESSIONAL:
      return "green";
    case SkillLevel.EXPERT:
      return "blue";
    default:
      return "gray";
  }
};
