# Trinca.dev Landing Page

Landing page moderna para um estudio de desenvolvimento, criada com Vite, React,
TypeScript, Tailwind CSS e estrutura compativel com shadcn/ui.

## Estrutura

- Componentes shadcn/ui: `components/ui`
- Estilos globais Tailwind: `src/index.css`
- Demo do componente: `demo.tsx`
- Entry React: `src/main.tsx`
- Landing page completa: `src/App.tsx`

O alias `@` aponta para a raiz do projeto, entao imports como este funcionam:

```tsx
import { CTASection } from "@/components/ui/hero-dithering-card"
```

## Componente integrado

O componente foi adicionado em:

```text
components/ui/hero-dithering-card.tsx
```

Ele usa:

- `react` hooks: `useState`, `Suspense`, `lazy`
- `lucide-react` para o icone `ArrowRight`
- `@paper-design/shaders-react` para o shader `Dithering`
- Tailwind/shadcn tokens como `bg-card`, `text-foreground`, `border-border`, `text-primary`

O componente esta integrado como CTA visual dentro da landing page, usando a
paleta preta com acentos `#12095C` e `#1CE809`.

## Rodar localmente

```bash
npm install
npm run dev
```

Por padrao, o Vite sobe em:

```text
http://127.0.0.1:5173
```

## Build

```bash
npm run build
```

## shadcn

Este projeto ja inclui `components.json` com:

- `tsx: true`
- aliases para `@/components`, `@/components/ui`, `@/lib`
- Tailwind CSS em `src/index.css`

Se voce recriar este projeto do zero via shadcn CLI, mantenha o caminho
`components/ui`, porque esse e o padrao esperado pelos imports
`@/components/ui/...` e evita retrabalho ao copiar componentes prontos.
