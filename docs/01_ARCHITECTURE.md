# Arquitetura do Sistema — Landing Page LOVEA — Moda Feminina & Babies

## Visão Geral

A arquitetura é totalmente estática com renderização em tempo de build (SSG) via Next.js 14, hospedada na Vercel com CDN global. O código-fonte é versionado no GitHub e deployado automaticamente a cada push na branch main via integração nativa Vercel+GitHub. As API Routes do Next.js servem como micro-endpoints para o formulário de captura de leads (integração com Resend para disparo de e-mail de boas-vindas) e para o proxy da Instagram Basic Display API (evitando exposição de tokens no cliente). O DNS é gerenciado pelo Cloudflare, que adiciona camada de CDN extra e certificado SSL. Não há banco de dados ou servidor de aplicação — toda a complexidade é eliminada em favor de performance máxima e custo operacional zero.

## Diagrama de Arquitetura

```
Fluxo: Usuário (browser/mobile) → Cloudflare CDN → Vercel Edge Network → Next.js App (SSG HTML). Para interações dinâmicas: Formulário de e-mail → Next.js API Route /api/subscribe → Resend API (disparo de e-mail de confirmação). Feed Instagram → Next.js API Route /api/instagram (ISR 1h) → Instagram Basic Display API → retorna posts para o componente. CI/CD: Dev faz push no GitHub → GitHub Actions executa lint/build → Vercel detecta merge na main e faz deploy automático. Analytics: navegação do usuário → Vercel Analytics + GA4 (ambos via script no layout.tsx).
```

## Componentes Principais

| Camada | Tecnologia Principal | Complementos |
|--------|---------------------|-------------|
| Frontend | `Next.js 14 + TypeScript` | `Tailwind CSS`, `shadcn/ui`, `Framer Motion`, `next/image` |
| Infraestrutura | `Vercel (deploy frontend)` | `GitHub Actions CI/CD`, `Cloudflare (DNS + CDN gratuito)` |
| Monitoramento | `Vercel Analytics` | `Google Analytics 4`, `Google Search Console` |

## Decisões Arquiteturais

As decisões foram baseadas no briefing do projeto e nas referências fornecidas.
Consulte [02_TECH_STACK.md](02_TECH_STACK.md) para justificativas detalhadas de cada escolha.

## Padrões de Projeto Recomendados

- **Frontend:** Component-driven development com Server Components (Next.js App Router)
- **Backend:** Clean Architecture (Domain → Application → Infrastructure)
- **API:** REST com versionamento (`/api/v1/`) ou tRPC para type-safety full-stack
- **Estado:** Zustand (client state) + React Query / TanStack Query (server state)
- **Testes:** Vitest (unit) + Playwright (E2E)
