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
    title: "Harpa Cristã App",
    description:
      "Aplicativo Android nativo para acesso offline aos 640 hinos da Harpa Cristã, desenvolvido com React Native:\n\n" +
      "- **Performance otimizada:** Armazenamento local com MMKV para carregamento instantâneo\n" +
      "- **Busca inteligente:** Pesquisa por número, título ou trecho de letra\n" +
      "- **Favoritos e histórico:** Sistema de marcação e rastreamento de hinos mais acessados\n" +
      "- **Acessibilidade:** Ajuste de fonte, temas (claro/escuro) e interface responsiva",
    technologies: ["React Native", "TypeScript", "MMKV", "Android"],
    link: "https://github.com/xogm/harpa-crista-app",
    featured: true,
  },
  {
    title: "Random Numbers with Exclusions",
    description:
      "Biblioteca NPM para geração de números aleatórios com controle avançado de exclusões:\n\n" +
      "- **Geração customizável:** Intervalos configuráveis com múltiplas opções\n" +
      "- **Exclusões flexíveis:** Números individuais, ranges ou arrays de exclusão\n" +
      "- **Zero dependências:** Biblioteca leve e performática\n" +
      "- **TypeScript ready:** Tipagem completa para melhor DX\n" +
      "- **Casos de uso:** Sorteios, jogos, amostragem estatística",
    technologies: ["JavaScript", "TypeScript", "NPM"],
    link: "https://github.com/xogm/random-numbers",
  },
  {
    title: "str-async-replace",
    description:
      "Utilitário TypeScript para substituição assíncrona de strings com suporte a Promises:\n\n" +
      "- **API assíncrona:** Replace com async/await nativo\n" +
      "- **Integração com APIs:** Substitui placeholders por dados de requisições externas\n" +
      "- **Pattern matching:** Suporte a RegEx e strings literais\n" +
      "- **Type-safe:** Tipagem completa em TypeScript\n" +
      "- **Use cases:** Templates dinâmicos, processamento de markdown, internacionalização",
    technologies: ["TypeScript", "JavaScript", "NPM", "Async/Await"],
    link: "https://github.com/xogm/str-async-replace",
  },
  {
    title: "Este Portfólio (ronis.com.br)",
    description:
      "Currículo digital interativo e responsivo que você está navegando agora, desenvolvido com Next.js 15:\n\n" +
      "- **Stack moderna:** React 19, TypeScript, Tailwind CSS, DaisyUI\n" +
      "- **Performance:** SSG com Next.js, otimização de imagens, lazy loading\n" +
      "- **UX premium:** Animações Framer Motion, temas personalizáveis, filtros dinâmicos\n" +
      "- **Print-friendly:** CSS otimizado para exportação em PDF profissional\n" +
      "- **SEO completo:** Meta tags, Open Graph, sitemap, robots.txt\n" +
      "- **Código aberto:** Disponível no GitHub para referência e portfólio",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "DaisyUI", "Framer Motion", "FontAwesome"],
    link: "https://github.com/xogm/curriculum",
    featured: true,
  },
];
