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
    role: "Desenvolvedor Full-Stack Sênior",
    company: "PliQ Consultoria",
    period: {
      start: parseDate({ year: 2024, month: 8 }),
    },
    location: "Fortaleza, CE",
    achievements: [
      "Modernização de sistemas legados enterprise utilizando ASP.NET Core e Angular, aumentando performance e manutenibilidade",
      "Desenvolvimento de componentes reutilizáveis e otimização de visualizações complexas (charts), reduzindo tempo de desenvolvimento em 40%",
      "Integração com APIs de terceiros (Meta, Blip, Dialog360) para automação de comunicação multicanal e workflows empresariais",
      "Implementação de boas práticas (Clean Code, SOLID, Design Patterns) e code review para garantir qualidade e escalabilidade",
    ],
    technologies: [
      "ASP.NET Core",
      "C#",
      "Quartz.NET",
      "Background Workers",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Entity Framework",
      "RESTful APIs",
      "Git",
      "Azure DevOps",
    ],
  },
  {
    role: "Desenvolvedor Full-Stack & Consultor Técnico",
    company: "Freelancer",
    period: {
      start: parseDate({ year: 2020, month: 7 }),
      end: parseDate({ year: 2024, month: 7 }),
    },
    location: "Híbrido (Fortaleza, CE)",
    achievements: [
      "Arquitetura e desenvolvimento de sistemas web e mobile completos para +15 clientes, desde MVP até produção",
      "Modelagem de bancos de dados relacionais e NoSQL otimizados para alta performance e escalabilidade",
      "Desenvolvimento cross-platform com React Native, Node.js e PHP, entregando soluções em tempo 30% menor que a média",
      "Gestão completa de projetos (requisitos, desenvolvimento, deploy, manutenção) com 95% de satisfação dos clientes",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "PHP",
      "MySQL",
      "MongoDB",
      "RESTful APIs",
      "Git",
      "Docker",
      "Linux",
    ],
  },
  {
    role: "Desenvolvedor Full-Stack & Tech Lead",
    company: "Plante Amor/Murau",
    period: {
      start: parseDate({ year: 2020, month: 3 }),
      end: parseDate({ year: 2020, month: 7 }),
    },
    location: "São José do Rio Preto, SP",
    achievements: [
      "Redesign completo de e-commerce VTEX, melhorando UX/UI e aumentando taxa de conversão em 25%",
      "Desenvolvimento de aplicativo mobile de vendas integrado com ERP TOTVS e plataforma VTEX, unificando canais de venda",
      "Liderança técnica em todas as fases do projeto (arquitetura, desenvolvimento, testes, deploy) com entrega no prazo",
      "Implementação de sincronização em tempo real entre mobile app, ERP e e-commerce usando MongoDB e APIs REST",
    ],
    technologies: [
      "VTEX IO",
      "React Native",
      "MongoDB",
      "TOTVS Protheus",
      "RESTful APIs",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Git",
    ],
  },
  {
    role: "Desenvolvedor Full-Stack & DevOps",
    company: "Grupo Biagi/Boxsupreme.com.br",
    period: {
      start: parseDate({ year: 2019, month: 9 }),
      end: parseDate({ year: 2020, month: 2 }),
    },
    location: "São José do Rio Preto, SP",
    achievements: [
      "Migração crítica de sistema de vendas legado (ASP) para stack moderna (PHP/MariaDB) em AWS EC2 sem downtime",
      "Otimização de performance do banco de dados, reduzindo tempo de consultas em 60% e melhorando experiência do usuário",
      "Manutenção e evolução de sistema de gestão de tempo, automatizando processos e aumentando eficiência operacional",
      "Configuração de infraestrutura cloud AWS, garantindo escalabilidade e disponibilidade 99.9%",
    ],
    technologies: [
      "PHP",
      "MariaDB",
      "MySQL",
      "AWS EC2",
      "Linux",
      "Nginx",
      "Git",
      "Shell Script",
      "SQL",
    ],
  },
  {
    role: "Desenvolvedor Full-Stack & Analista de TI",
    company: "Raízes Soluções",
    period: {
      start: parseDate({ year: 2019, month: 4 }),
      end: parseDate({ year: 2019, month: 8 }),
    },
    location: "São José do Rio Preto, SP",
    achievements: [
      "Desenvolvimento e manutenção de plataforma e-commerce, garantindo uptime de 99% e experiência fluida para clientes",
      "Criação de APIs RESTful em PHP/MySQL para integração com sistemas externos e automação de processos",
      "Desenvolvimento de aplicativo mobile React Native, expandindo canais digitais e aumentando engajamento dos usuários",
      "Suporte técnico especializado e gestão de infraestrutura de TI, otimizando recursos e reduzindo custos operacionais",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "React Native",
      "RESTful APIs",
      "JavaScript",
      "Git",
      "Windows Server",
      "IIS",
      "Networking",
    ],
  },
  {
    role: "Consultor de TI & Desenvolvedor de Soluções",
    company: "Freelancer",
    period: {
      start: parseDate({ year: 2008, month: 12 }),
      end: parseDate({ year: 2019, month: 3 }),
    },
    location: "Fortaleza, CE / São José do Rio Preto, SP / Híbrido",
    achievements: [
      "Suporte técnico especializado para +50 empresas do varejo, resolvendo problemas críticos de infraestrutura e sistemas",
      "Desenvolvimento de soluções customizadas para automação de processos, reduzindo custos operacionais em até 35%",
      "Implementação de sistemas de gestão e integrações com bancos de dados (PostgreSQL/MySQL) para otimização de workflows",
      "Consultoria em infraestrutura de TI, redes e segurança, garantindo estabilidade e proteção de dados sensíveis",
    ],
    technologies: [
      "JavaScript",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "HTML/CSS",
      "Windows Server",
      "Linux",
      "Networking",
      "Hardware",
    ],
  },
  {
    role: "Gerente de TI & Analista de Sistemas",
    company: "Hipermercadinho Local",
    period: {
      start: parseDate({ year: 2007, month: 10 }),
      end: parseDate({ year: 2008, month: 11 }),
    },
    location: "Fortaleza, CE",
    achievements: [
      "Gestão de banco de dados PostgreSQL com +100.000 produtos, implementando rotinas de backup e garantindo integridade de dados",
      "Administração completa de sistema PDV (SysPDV), processando entrada de notas fiscais e cadastro de produtos com precisão",
      "Gerenciamento de infraestrutura de TI, mantendo pontos de venda e estações de trabalho operacionais com mínimo downtime",
      "Controle financeiro e administrativo através de planilhas Excel, organizando folha de pagamento e gestão de funcionários",
    ],
    technologies: [
      "SysPDV",
      "PostgreSQL",
      "SQL",
      "Microsoft Excel",
      "Windows Server",
      "Networking",
      "Hardware",
      "Backup & Recovery",
    ],
  },
];
