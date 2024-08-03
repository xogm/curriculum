import { parseDate } from "@/utils/formatDates";

export interface Experience {
  role: string;
  company: string;
  period: {
    start: Date;
    end?: Date;
  };
  location: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    role: "Desenvolvedor Full-Stack",
    company: "PliQ.io",
    period: {
      start: parseDate({ year: 2024, month: 8 }),
    },
    location: "Fortaleza, CE",
    achievements: [],
    technologies: [
      "ASP.NET",
      "Angular",
      "C#",
      "PostgreSQL",
      "HTML",
      "CSS",
    ],
  },
  {
    role: "Desenvolvedor Full-Stack",
    company: "Freelancer",
    period: {
      start: parseDate({ year: 2020, month: 7 }),
      end: parseDate({ year: 2024, month: 7 })
    },
    location: "Hibrido (Fortaleza, CE)",
    achievements: [
      "Projetou e implementou sistemas e bancos de dados de alta complexidade, garantindo desempenho e escalabilidade.",
      "Desenvolveu aplicativos móveis e web de ponta a ponta utilizando PHP, MySQL, React Native, JavaScript (Node.js) e MongoDB.",
      "Gerenciou projetos de forma autônoma, mantendo comunicação eficaz com clientes para entrega de soluções personalizadas.",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "React Native",
      "JavaScript",
      "MongoDB",
      "Hardware",
      "Redes",
      "HTML",
      "CSS",
    ],
  },
  {
    role: "Desenvolvedor Full-Stack",
    company: "Plante Amor/Murau",
    period: {
      start: parseDate({ year: 2020, month: 3 }),
      end: parseDate({ year: 2020, month: 7 }),
    },
    location: "São José do Rio Preto, SP",
    achievements: [
      "Revitalizou a interface de loja virtual utilizando VTEX, melhorando a experiência do usuário e a funcionalidade do site.",
      "Desenvolveu um aplicativo de vendas mobile totalmente integrado com sistemas TOTVS (ERP) e VTEX, utilizando React Native e MongoDB.",
      "Conduziu todas as fases do projeto, desde a concepção até os testes finais, demonstrando liderança técnica e habilidades de gerenciamento.",
    ],
    technologies: [
      "VTEX",
      "React Native",
      "MongoDB",
      "TOTVS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    role: "Desenvolvedor Full-Stack",
    company: "Grupo Biagi/Boxsupreme.com.br",
    period: {
      start: parseDate({ year: 2019, month: 9 }),
      end: parseDate({ year: 2020, month: 2 }),
    },
    location: "São José do Rio Preto, SP",
    achievements: [
      "Liderou a migração do sistema de vendas de ASP para PHP e MariaDB em ambiente AWS EC2, modernizando a infraestrutura tecnológica.",
      "Manteve e aprimorou o sistema de gerenciamento de tempo da loja Boxsupreme, melhorando a eficiência operacional.",
    ],
    technologies: [
      "ASP",
      "PHP",
      "MariaDB",
      "AWS EC2",
      "Hardware",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    role: "Assistente de TI / Desenvolvedor Full-Stack",
    company: "Raízes Soluções",
    period: {
      start: parseDate({ year: 2019, month: 4 }),
      end: parseDate({ year: 2019, month: 8 }),
    },
    location: "São José do Rio Preto, SP",
    achievements: [
      "Assegurou a operação contínua do site de e-commerce e desenvolveu APIs robustas utilizando PHP e MySQL.",
      "Desenvolveu um aplicativo móvel com React Native, expandindo a presença digital da empresa.",
      "Realizou a configuração de Outlook e a manutenção de computadores, otimizando a infraestrutura de TI.",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "React Native",
      "Hardware",
      "Redes",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    role: "Suporte Técnico / Desenvolvedor Full-Stack",
    company: "Freelancer",
    period: {
      start: parseDate({ year: 2008, month: 12 }),
      end: parseDate({ year: 2019, month: 3 }),
    },
    location: "Fortaleza, CE / São José do Rio Preto, SP / Hibrido",
    achievements: [
      "Forneceu suporte técnico especializado para supermercados e lojas, resolvendo questões complexas de hardware e software.",
      "Desenvolveu aplicativos personalizados, ampliando a automação e eficiência dos processos dos clientes.",
    ],
    technologies: [
      "Hardware",
      "Redes",
      "HTML",
      "CSS",
      "JavaScript",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    role: "Analista de Dados / Suporte Técnico / Gerente de TI",
    company: "Hipermercadinho Local",
    period: {
      start: parseDate({ year: 2007, month: 10 }),
      end: parseDate({ year: 2008, month: 11 }),
    },
    location: "Fortaleza, CE",
    achievements: [
      "Gerenciou um banco de dados extenso com mais de 100.000 produtos, garantindo a integridade e atualização das informações.",
      "Executou a entrada de notas fiscais e o cadastro de novos produtos no sistema de vendas, mantendo a precisão dos registros.",
      "Responsável pela manutenção dos pontos de venda e demais computadores, assegurando o bom funcionamento dos equipamentos.",
      "Gerenciou planilhas de pagamentos e funcionários, mantendo a organização e precisão das informações financeiras e administrativas.",
    ],
    technologies: ["SysPDV", "Excel", "PostgreSQL", "Hardware", "Redes"],
  },
];
