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
    { name: "C#", level: SkillLevel.EXPERT },
    { name: "JavaScript", level: SkillLevel.EXPERT },
    { name: "TypeScript", level: SkillLevel.PROFESSIONAL },
    { name: "PHP", level: SkillLevel.EXPERT },
    { name: "SQL", level: SkillLevel.PROFESSIONAL },
    { name: "HTML/CSS", level: SkillLevel.EXPERT },
  ],
  databases: [
    { name: "PostgreSQL", level: SkillLevel.PROFESSIONAL },
    { name: "MySQL", level: SkillLevel.PROFESSIONAL },
    { name: "MongoDB", level: SkillLevel.ADVANCED },
    { name: "MariaDB", level: SkillLevel.PROFESSIONAL },
    { name: "SQL Server", level: SkillLevel.ADVANCED },
  ],
  frameworks: [
    { name: "ASP.NET Core", level: SkillLevel.EXPERT },
    { name: "Node.js", level: SkillLevel.EXPERT },
    { name: "React Native", level: SkillLevel.EXPERT },
    { name: "Angular", level: SkillLevel.ADVANCED },
    { name: "React.js", level: SkillLevel.ADVANCED },
    { name: "Next.js", level: SkillLevel.ADVANCED },
    { name: "Express.js", level: SkillLevel.PROFESSIONAL },
    { name: "Entity Framework", level: SkillLevel.PROFESSIONAL },
    { name: "Tailwind CSS", level: SkillLevel.ADVANCED },
  ],
  softSkills: [
    "Resolução de problemas complexos",
    "Trabalho em equipe multidisciplinar",
    "Comunicação técnica eficaz",
    "Gestão de tempo e prioridades",
    "Aprendizado contínuo",
    "Adaptabilidade a novas tecnologias",
    "Pensamento analítico",
    "Proatividade e autonomia",
    "Mentalidade de crescimento",
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
