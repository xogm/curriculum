import { parseDate } from "@/utils/formatDates";

export interface Education {
  institution: string;
  degree: string;
  period: {
    start: Date;
    end?: Date;
  };
  observations?: string;
}

export const education: Education[] = [
  {
    institution: "Estácio de Sá",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
    period: {
      start: parseDate({ year: 2024, month: 2 }),
      end: parseDate({ year: 2026, month: 7 }),
    },
    observations: "Focado em arquitetura de software, banco de dados, metodologias ágeis e desenvolvimento full-stack",
  },
  {
    institution: "Formação Autodidata",
    degree: "Desenvolvimento de Software e Tecnologias Web",
    period: {
      start: parseDate({ year: 1996, month: 8 }),
    },
    observations: "Aprendizado contínuo através de cursos online, documentação oficial, projetos práticos e comunidades de desenvolvedores",
  },
];
