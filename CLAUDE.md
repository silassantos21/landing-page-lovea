# Landing Page LOVEA — Moda Feminina & Babies

## Contexto do Projeto

Landing page institucional e promocional para a loja LOVEA, marca de moda feminina e linha infantil LOVEA Babies. A página apresenta a identidade visual dual da marca — elegância premium para mulheres e suavidade maternal para bebês — convertendo visitantes em clientes via WhatsApp, redes sociais e catálogo de produtos. O projeto prioriza design sofisticado, carregamento rápido e alta performance em dispositivos móveis.

**Problema:** A loja LOVEA não possui presença digital estruturada além do Instagram, o que limita o alcance orgânico, dificulta a descoberta por novos clientes e não transmite de forma eficiente a credibilidade e o posicionamento premium da marca. Sem uma landing page dedicada, oportunidades de conversão são perdidas e o tráfego pago não tem destino otimizado.

**Público-alvo:** Público primário: mulheres entre 25 e 45 anos, classes A e B, com interesse em moda, lifestyle e produtos de qualidade. Público secundário: mães e gestantes entre 22 e 40 anos interessadas na linha LOVEA Babies. Stakeholder principal: proprietária da loja LOVEA, que deseja ampliar visibilidade digital e atrair mais clientes.

## Stack Tecnológica

- **Frontend:** Next.js 14 + TypeScript
- **Infraestrutura:** Vercel (deploy frontend)

Detalhes completos em [docs/02_TECH_STACK.md](docs/02_TECH_STACK.md).

## Estrutura do Projeto

```
landing-page-lovea/
├── docs/           # Planejamento e documentação
│   ├── 00_OVERVIEW.md
│   ├── 01_ARCHITECTURE.md
│   ├── 02_TECH_STACK.md
│   ├── 03_AI_AGENTS.md
│   ├── 04_TIMELINE.md
│   └── 05_COST_ANALYSIS.md
├── src/            # Código-fonte (a criar)
└── CLAUDE.md       # Este arquivo
```

## Funcionalidades Principais

- Hero section com identidade visual premium da LOVEA — fundo escuro, tipografia thin com letter-spacing generoso e chamada de ação elegante
- Seção de destaque para as duas linhas da marca: LOVEA (moda feminina) e LOVEA Babies (linha infantil), com transição visual entre paletas dark e mint
- Galeria de produtos com grid responsivo inspirado em editorial de moda, exibindo as principais categorias e bestsellers
- Seção 'Sobre a Loja' com história da marca, valores e diferenciais de atendimento
- Botão flutuante de contato via WhatsApp com CTA de alta conversão
- Integração com feed do Instagram para exibir posts recentes automaticamente

## Agentes de IA Disponíveis

- **CopywriterLOVEA** — Redator de copy persuasivo alinhado à identidade da marca
- **SEOStrategistLOVEA** — Especialista em SEO local e on-page para loja de moda
- **DesignTokensArchitect** — Arquiteto do design system dual-persona da LOVEA

Prompts completos em [docs/03_AI_AGENTS.md](docs/03_AI_AGENTS.md).

## Estimativa

- **Total:** 21 dias (3.0 semanas)
- **Custo Mensal:** USD 1.67 / BRL 9.52

## Arquitetura

A arquitetura é totalmente estática com renderização em tempo de build (SSG) via Next.js 14, hospedada na Vercel com CDN global. O código-fonte é versionado no GitHub e deployado automaticamente a cada push na branch main via integração nativa Vercel+GitHub. As API Routes do Next.js servem como micro-endpoints para o formulário de captura de leads (integração com Resend para disparo de e-mail de boas-vindas) e para o proxy da Instagram Basic Display API (evitando exposição de tokens no cliente). O DNS é gerenciado pelo Cloudflare, que adiciona camada de CDN extra e certificado SSL. Não há banco de dados ou servidor de aplicação — toda a complexidade é eliminada em favor de performance máxima e custo operacional zero.
