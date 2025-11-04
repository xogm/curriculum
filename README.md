# 📄 Curriculum Vitae Digital

Um currículo profissional interativo e moderno construído com Next.js 15, React 19, TypeScript e Tailwind CSS.

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface responsiva com DaisyUI e Tailwind CSS
- 🌓 **Múltiplos Temas**: Seletor de temas integrado com persistência
- 📧 **Formulário de Contato**: Integração com Mailgun para envio de emails
- 🎯 **SEO Otimizado**: Meta tags, Open Graph e sitemap configurados
- ♿ **Acessível**: ARIA labels e navegação por teclado
- ⚡ **Performance**: Otimização de imagens e lazy loading
- 🔒 **Seguro**: Rate limiting e proteção contra spam
- 📱 **Responsivo**: Design adaptado para todos os dispositivos

## 🚀 Tecnologias

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **Formulários**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Ícones**: [FontAwesome](https://fontawesome.com/)
- **Email**: [Mailgun](https://www.mailgun.com/)
- **Markdown**: [React Markdown](https://github.com/remarkjs/react-markdown)

## 📋 Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun
- Conta no [Mailgun](https://www.mailgun.com/) (para formulário de contato)

## 🛠️ Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/xogm/curriculum.git
cd curriculum
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:

```env
MAILGUN_API_KEY=your_mailgun_api_key_here
MAILGUN_DOMAIN=your_mailgun_domain_here
MY_EMAIL=your_email@example.com
```

4. **Execute o servidor de desenvolvimento**

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```powershell
curriculum/
├── public/              # Arquivos estáticos
├── src/
│   ├── app/            # App Router do Next.js
│   │   ├── contact/    # API route para formulário
│   │   ├── layout.tsx  # Layout principal
│   │   └── page.tsx    # Página inicial
│   ├── components/     # Componentes React
│   │   ├── Header.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Skills.tsx
│   │   └── ...
│   ├── data/          # Dados do currículo
│   │   ├── personalInfo.ts
│   │   ├── experiences.ts
│   │   ├── projects.ts
│   │   └── ...
│   └── utils/         # Funções utilitárias
├── .env.example       # Exemplo de variáveis de ambiente
└── package.json
```

## 🎨 Personalização

### Dados Pessoais

Edite os arquivos em `src/data/` para personalizar com suas informações:

- `personalInfo.ts` - Informações básicas e bio
- `experiences.ts` - Experiências profissionais
- `education.ts` - Formação acadêmica
- `projects.ts` - Projetos realizados
- `skills.ts` - Habilidades técnicas
- `certifications.ts` - Certificações
- `testimonials.ts` - Depoimentos

### Temas

O projeto usa DaisyUI com suporte a múltiplos temas. Configure em `tailwind.config.ts`.

### Imagens

Configure domínios permitidos em `next.config.mjs` para usar imagens externas.

## 🚢 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xogm/curriculum)

1. Faça push para seu repositório GitHub
2. Importe o projeto na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy automático!

### Outros Provedores

```bash
npm run build
npm run start
```

## 📝 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa o linter
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👨‍💻 Autor

Valdir Ronis **(Xogum)**

- GitHub: [@xogm](https://github.com/xogm)
- Website: [ronis.com.br](https://ronis.com.br)

---

Feito com ❤️ usando [Next.js](https://nextjs.org/)
