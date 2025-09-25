# LandingPro - Landing Page Profissional

Uma landing page moderna e profissional construída com Next.js 15, TypeScript e Tailwind CSS, seguindo as melhores práticas do mercado.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos
- **React 19** - Última versão do React

## ✨ Características

- ⚡ **Performance Otimizada** - Turbopack habilitado
- 🎨 **Design System** - Componentes reutilizáveis com CVA
- 📱 **Responsivo** - Mobile-first design
- ♿ **Acessibilidade** - Seguindo padrões WCAG
- 🔧 **TypeScript Rigoroso** - Configuração estrita
- 🎯 **SEO Otimizado** - Meta tags completas
- 🌙 **Theme System** - Preparado para modo escuro
- ⚙️ **Tooling Profissional** - ESLint + Prettier configurados

## 🛠️ Instalação

```bash
# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Build para produção
npm run build

# Execute em produção
npm start
```

## 📝 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento com Turbopack
npm run build        # Build otimizado
npm run start        # Servidor de produção
npm run lint         # Corrigir problemas de lint
npm run lint:check   # Verificar problemas de lint
npm run format       # Formatar código
npm run typecheck    # Verificar tipos
npm run check        # Verificação completa
```

## 📁 Estrutura do Projeto

```
src/
├── app/                 # App Router (Next.js 15)
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/
│   ├── layout/         # Componentes de layout
│   │   ├── Header.tsx  # Cabeçalho
│   │   └── Footer.tsx  # Rodapé
│   ├── sections/       # Seções da landing page
│   │   ├── HeroSection.tsx     # Seção hero
│   │   └── FeaturesSection.tsx # Seção de recursos
│   └── ui/             # Componentes UI reutilizáveis
│       ├── Button.tsx  # Botão com variantes
│       └── Container.tsx # Container responsivo
├── lib/
│   └── utils.ts        # Utilitários
├── types/
│   └── index.ts        # Definições de tipos
└── hooks/              # Hooks customizados
```

## 🎨 Sistema de Design

O projeto utiliza um design system baseado em:

- **Color Tokens** - Sistema de cores semânticas
- **Typography Scale** - Escala tipográfica consistente
- **Spacing Scale** - Sistema de espaçamento
- **Component Variants** - Variantes usando CVA
- **Responsive Design** - Mobile-first approach

## 📱 Seções da Landing Page

### 1. Hero Section

- Badge de novidade
- Título impactante com gradiente
- Descrição clara do valor
- CTAs primário e secundário
- Social proof
- Vídeo/demo placeholder

### 2. Features Section

- Grid responsivo de recursos
- Ícones consistentes
- Animações ao scroll
- Cards interativos

### 3. Header

- Logo e navegação
- Menu mobile responsivo
- CTAs de conversão

### 4. Footer

- Links organizados
- Redes sociais
- Informações legais
- Branding consistente

## 🔧 Configurações

### TypeScript

- Target ES2022
- Strict mode habilitado
- Path mapping configurado
- Verificações rigorosas

### ESLint

- Next.js rules
- TypeScript integration
- Accessibility rules
- React hooks rules

### Prettier

- Tailwind CSS plugin
- Formatação consistente
- Single quotes
- No semicolons

## 🚀 Deploy

O projeto está otimizado para deploy em:

- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**
- Qualquer servidor Node.js

## 📊 Performance

- **Core Web Vitals** otimizados
- **Bundle size** minimizado
- **Image optimization** automática
- **Static generation** quando possível

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit: `git commit -m 'Add nova feature'`
4. Push: `git push origin feature/nova-feature`
5. Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Desenvolvido por

LandingPro Team - Especialistas em conversão e performance

---

**Feito com ❤️ e as melhores práticas de desenvolvimento**
