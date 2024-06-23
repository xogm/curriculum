export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Harpa Cristã",
    description:
      "Um aplicativo Android intuitivo que permite aos usuários acessarem facilmente todos os 640 hinos da Harpa Cristã, com recursos como:\n\n" +
      "- **Busca:** Encontre hinos por número ou título.\n" +
      "- **Favoritos:** Marque seus hinos preferidos para acesso rápido.\n" +
      "- **Personalização:** Ajuste o tamanho da fonte e o tema do aplicativo.",
    technologies: ["React Native", "JavaScript", "TypeScript", "MMKV"],
    link: "https://github.com/rxpt/harpa-crista-app",
  },
  {
    title: "Random Numbers with Exclusions",
    description:
      "Uma biblioteca JavaScript versátil para gerar números aleatórios, com recursos como:\n\n" +
      "- **Intervalos Personalizados:** Defina o intervalo mínimo e máximo dos números gerados.\n" +
      "- **Exclusões:** Exclua números ou intervalos específicos do resultado.\n" +
      "- **Opções Flexíveis:** Personalize o comportamento da função com um objeto de opções.",
    technologies: ["JavaScript"],
    link: "https://github.com/rxpt/random-numbers",
  },
  {
    title: "str-async-replace",
    description:
      "Uma classe para simplificar a substituição assíncrona de strings em JavaScript/TypeScript, com funcionalidades como:\n\n" +
      "- **Substituição Assíncrona:** Substitua partes de uma string por valores retornados por Promises ou funções assíncronas.\n" +
      "- **Métodos Flexíveis:** Utilize diferentes métodos para personalizar o comportamento da substituição.\n" +
      "- **Ideal para Operações Assíncronas:** Perfeito para lidar com dados de APIs ou outras fontes assíncronas.",
    technologies: ["JavaScript", "TypeScript"],
    link: "https://github.com/rxpt/str-async-replace",
  },
  {
    title: "Curriculum Vitae with Next.js",
    description:
      "Um modelo de currículo moderno e responsivo criado com Next.js, com recursos como:\n\n" +
      "- **Página Inicial:** Apresentação do autor com foto e informações pessoais.\n" +
      "- **Experiência Profissional:** Histórico de empregos e projetos.\n" +
      "- **Formação Acadêmica:** Cursos, certificações e outras qualificações.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "Font Awesome", "date-fns"],
    link: "https://github.com/rxpt/curriculum",
  }
];
