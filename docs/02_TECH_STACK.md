# Stack Tecnológica — Landing Page LOVEA — Moda Feminina & Babies

| Camada | Tecnologia Principal | Complementos |
|--------|---------------------|-------------|
| Frontend | `Next.js 14 + TypeScript` | `Tailwind CSS`, `shadcn/ui`, `Framer Motion`, `next/image` |
| Infraestrutura | `Vercel (deploy frontend)` | `GitHub Actions CI/CD`, `Cloudflare (DNS + CDN gratuito)` |
| Monitoramento | `Vercel Analytics` | `Google Analytics 4`, `Google Search Console` |

---

## Frontend

**Tecnologia Principal:** `Next.js 14 + TypeScript`

**Complementos:**
- `Tailwind CSS`
- `shadcn/ui`
- `Framer Motion`
- `next/image`
- `next-seo`

**Justificativa:** Next.js 14 com App Router oferece SSG (Static Site Generation) nativo, gerando HTML estático com performance máxima — ideal para landing pages. TypeScript garante manutenibilidade. Tailwind permite implementar o design system dual (dark + mint) com tokens customizados de forma eficiente. Framer Motion entrega as animações suaves alinhadas à personalidade premium da marca.

## Infraestrutura & Deploy

**Tecnologia Principal:** `Vercel (deploy frontend)`

**Complementos:**
- `GitHub Actions CI/CD`
- `Cloudflare (DNS + CDN gratuito)`

**Justificativa:** Vercel é a plataforma nativa para Next.js, oferecendo deploy automático por push no GitHub, CDN global, HTTPS gratuito e analytics integrado. Plano Hobby gratuito é suficiente para landing page. Cloudflare adiciona camada de CDN e proteção DNS sem custo.

## Monitoramento & Observabilidade

**Tecnologia Principal:** `Vercel Analytics`

**Complementos:**
- `Google Analytics 4`
- `Google Search Console`

**Justificativa:** Vercel Analytics fornece métricas de Web Vitals em tempo real no plano gratuito. GA4 rastreia conversões (cliques no WhatsApp, visualizações de produtos). Search Console monitora indexação e performance orgânica no Google — essencial para loja local.

## Comandos de Setup Rápido

```bash
npx create-next-app@latest . --typescript --tailwind --app
npx shadcn@latest init
npm install framer-motion react-hook-form zod
```
