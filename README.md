# P.R. Silva — Pinturas e Remodelações

Landing page premium em **Next.js 15 (App Router) + TypeScript + Tailwind CSS + GSAP**, focada em conversão por WhatsApp.

## Stack

- **Next.js 15** com App Router e Server Components
- **TypeScript** estrito
- **Tailwind CSS 3** com tokens de design dedicados (paleta navy, royal, ink)
- **GSAP 3** + `ScrollTrigger` para parallax, scrub e timelines
- **IntersectionObserver** com fallback automático para os reveals fade-up (resiliente a falhas do JS)
- **next/font/google** para Manrope (display) + Work Sans (corpo)
- **next/image** com formatos AVIF/WebP

## Como correr

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # servir o build
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, viewport
│   ├── page.tsx            # composição da landing
│   └── globals.css         # tokens CSS, reveals, utilitários
├── components/
│   ├── Header.tsx          # sticky glass + mobile menu
│   ├── Hero.tsx            # parallax + timeline animada
│   ├── TrustSection.tsx    # 3 cards de confiança
│   ├── Services.tsx        # 6 serviços com hover premium
│   ├── Portfolio.tsx       # grelha + parallax nas imagens
│   ├── BeforeAfter.tsx     # slider antes/depois acessível (teclado)
│   ├── Process.tsx         # timeline horizontal (desktop) + vertical (mobile)
│   ├── About.tsx           # texto + imagem com parallax
│   ├── CTASection.tsx      # gradiente animado + botão WhatsApp
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx  # botão flutuante com tooltip
│   └── ui/
│       ├── Logo.tsx
│       └── Icons.tsx       # ícones SVG inline (sem dependências)
└── lib/
    ├── constants.ts        # WHATSAPP_URL, NAV_LINKS, COMPANY
    ├── gsap.ts             # registo do plugin ScrollTrigger
    └── scrollReveal.ts     # IntersectionObserver + fallback timer
```

## O que tem de personalizar

### 1. WhatsApp

Em [`src/lib/constants.ts`](src/lib/constants.ts):

```ts
// SUBSTITUIR pelo número de WhatsApp real (formato internacional sem + e sem espaços).
export const WHATSAPP_URL =
  "https://wa.me/351XXXXXXXXX?text=Olá%2C%20gostaria%20de%20pedir%20um%20orçamento...";
```

Substitua `351XXXXXXXXX` pelo número da empresa (ex.: `351912345678`). A constante é
usada em todo o site (header, hero, services, portfolio, about, CTA, footer e botão flutuante).

### 2. Contactos e zonas de atendimento

Ainda em `constants.ts`:

```ts
export const COMPANY = {
  name: "P.R. Silva",
  tagline: "Pinturas e Remodelações",
  fullName: "P.R. Silva — Pinturas e Remodelações",
  region: "Lisboa e arredores",
  email: "geral@prsilva.pt",       // ← substituir
  phone: "+351 XXX XXX XXX",       // ← substituir
};
```

As regiões aparecem no Footer ([`src/components/Footer.tsx`](src/components/Footer.tsx) →
constante `REGIONS`).

### 3. Imagens reais

Atualmente as imagens são placeholders do Unsplash (configurados em
[`next.config.mjs`](next.config.mjs)). Para usar fotos reais do cliente:

**Hero**: [`src/components/Hero.tsx`](src/components/Hero.tsx) → `HERO_IMAGE`
**Sobre**: [`src/components/About.tsx`](src/components/About.tsx) → `ABOUT_IMAGE`
**Portfólio**: [`src/components/Portfolio.tsx`](src/components/Portfolio.tsx) → array `ITEMS`
**Antes/Depois**: mesmo ficheiro → `BEFORE_IMG` e `AFTER_IMG`

Coloque as imagens em `public/portfolio/` e troque a `src` para `/portfolio/nome.jpg`.
Já existe a pasta criada e a `prsilvalogo.png` já está em `public/logo.png`.

### 4. SEO

Edite [`src/app/layout.tsx`](src/app/layout.tsx) → `metadata`:

- `metadataBase` (URL canónica)
- `description`
- `openGraph.images` (idealmente uma OG-image dedicada 1200×630)

## Animações

- **Parallax** no fundo do Hero, blobs de gradiente, fotos do portfólio e imagem do Sobre.
- **Fade-up em stagger** ao entrar em viewport para todas as secções (`data-reveal`).
- **Antes/Depois** interactivo com pointer/teclado (setas).
- **Shimmer** no fundo da CTA (gradientes flutuantes em loop).
- **Hover premium**: cards levantam, ícones invertem, gradientes revelam-se.
- **Respeita `prefers-reduced-motion`**: tudo aparece imediatamente sem transições.
- **Fail-safe**: se o IntersectionObserver não disparar (browsers headless raros, certos
  bloqueadores), um `setTimeout` revela todos os elementos após 3,5s.

## Performance

```
Route (app)                                 Size  First Load JS
┌ ○ /                                    64.2 kB         166 kB
└ ○ /_not-found                            995 B         103 kB
+ First Load JS shared by all             102 kB
```

- Página estática pré-renderizada (`○ Static`).
- Imagens lazy-loaded (excepto a do Hero, marcada `priority`).
- Fontes carregadas via `next/font` (sem FOUT/CLS).
- Sem dependências pesadas: só GSAP (≈ 50 kB gzipped) para as animações.

## Acessibilidade

- HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<ol>`, `<ul>`).
- `aria-label` nos botões/links sem texto visível (logo, menu, scroll indicator).
- Estado expandido do menu mobile com `aria-expanded` e `aria-controls`.
- Foco visível com anel azul royal em todos os elementos interativos.
- Contraste alto (texto navy `#001b3d` sobre branco; branco sobre navy).
- Slider antes/depois operável com Tab + setas.

## Tokens de design

Definidos em [`tailwind.config.ts`](tailwind.config.ts) e refletem a identidade da P.R. Silva:

- **navy**: `950, 900, 800, 700, 600, 500, 400` — primário (`#001b3d` é a base do logo)
- **royal**: `700-100` — secundário (azul mais saturado)
- **ink**: tons de cinza para texto
- **line / surface**: bordas subtis e fundos alternados
- **font-display**: Manrope (títulos)
- **font-sans**: Work Sans (corpo)

Estilos utilitários globais (`globals.css`):

- `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-light`
- `.eyebrow` (rótulo com tracking-wide)
- `.section`, `.container-tight`
- `[data-reveal]` (fade-up animado por IntersectionObserver)

## Deploy

A página é 100 % estática, ideal para Vercel, Netlify ou qualquer host de Next.js:

```bash
npm run build
```

Em Vercel, basta ligar o repositório e o deploy é zero-config.
