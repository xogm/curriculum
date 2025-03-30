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
    institution: "Estácio",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    period: {
      start: parseDate({ year: 2024, month: 2 }),
      end: parseDate({ year: 2026, month: 7 }),
    },
  },
  {
    institution: "Autodidata",
    degree: "Desenvolvimento Web",
    period: {
      start: parseDate({ year: 1996, month: 8 }),
    },
    observations: "Estudo contínuo",
  },
];
