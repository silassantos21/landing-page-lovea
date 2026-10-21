# Cronograma do Projeto — Landing Page LOVEA — Moda Feminina & Babies

## Resumo

| # | Fase | Duração |
|---|------|---------|
| 1 | Fase 1 — Descoberta, Design System e Prototipação | 5 dias |
| 2 | Fase 2 — Desenvolvimento das Seções Principais | 7 dias |
| 3 | Fase 3 — Integrações, SEO e Otimizações | 4 dias |
| 4 | Fase 4 — QA, Ajustes Finais e Entrega | 5 dias |
| | **Total** | **21 dias (3.0 semanas)** |

---

## Detalhamento das Fases

### Fase 1: Fase 1 — Descoberta, Design System e Prototipação (5 dias)

#### Tarefas

- [ ] Levantamento completo de conteúdo: fotos dos produtos, textos, endereço, horários, links de redes sociais com a proprietária
- [ ] Definição final da paleta de cores, tipografias (Google Fonts: Montserrat + Dancing Script) e tokens do design system
- [ ] Criação do layout wireframe no Figma para as seções: Hero, Sobre, Categorias, LOVEA Babies, Galeria, Depoimentos, Instagram Feed, Contato/CTA, Footer
- [ ] Aprovação do wireframe pela cliente antes de iniciar o desenvolvimento
- [ ] Configuração do repositório GitHub, projeto Next.js 14 e deploy inicial na Vercel (ambiente de staging)

#### Entregáveis

- Documento de design tokens (cores, fontes, espaçamentos) aprovado pela cliente
- Wireframe navegável no Figma com todas as seções
- Repositório GitHub configurado com Next.js 14 + Tailwind + shadcn/ui rodando na Vercel

---

### Fase 2: Fase 2 — Desenvolvimento das Seções Principais (7 dias)

#### Tarefas

- [ ] Desenvolvimento do Hero Section com vídeo/imagem full-screen, headline animada com Framer Motion e CTA WhatsApp
- [ ] Seção 'Nossa Loja' com apresentação da marca, diferenciais e foto da loja/equipe
- [ ] Grid de categorias LOVEA feminina com hover effects e transições suaves
- [ ] Seção LOVEA Babies com mudança de paleta para mint, badge circular animado e grid de produtos infantis
- [ ] Galeria de produtos em masonry grid responsivo com lightbox
- [ ] Seção de depoimentos em carrossel com auto-play suave
- [ ] Implementação do botão flutuante de WhatsApp com micro-animação de pulso

#### Entregáveis

- Seções Hero, Sobre, Categorias e LOVEA Babies funcionais e responsivas
- Galeria de produtos com lightbox operacional
- Carrossel de depoimentos implementado

---

### Fase 3: Fase 3 — Integrações, SEO e Otimizações (4 dias)

#### Tarefas

- [ ] Integração com Instagram Basic Display API para feed automático (últimos 6-9 posts)
- [ ] Formulário de captura de e-mail VIP com integração Resend (e-mail de confirmação automático)
- [ ] Implementação completa de SEO: meta tags, Open Graph, Schema.org LocalBusiness, sitemap.xml e robots.txt
- [ ] Otimização de imagens com next/image (WebP automático, lazy loading, blur placeholder)
- [ ] Configuração do Google Analytics 4 e Google Search Console
- [ ] Teste de performance no Google PageSpeed Insights — meta: score 90+ mobile e desktop
- [ ] Implementação do Google Maps embed para localização da loja

#### Entregáveis

- Feed do Instagram funcionando com ISR de 1 hora
- Formulário de leads operacional com confirmação por e-mail
- Score PageSpeed 90+ documentado em screenshot
- SEO técnico completo implementado e validado

---

### Fase 4: Fase 4 — QA, Ajustes Finais e Entrega (5 dias)

#### Tarefas

- [ ] Testes cross-browser: Chrome, Firefox, Safari (desktop e mobile)
- [ ] Testes em dispositivos reais: iPhone (Safari), Android (Chrome) — foco total em mobile
- [ ] Revisão de conteúdo final com a cliente (textos, fotos, informações de contato)
- [ ] Configuração do domínio customizado na Vercel + DNS no Cloudflare + HTTPS
- [ ] Configuração do redirecionamento www para não-www e verificação de links quebrados
- [ ] Treinamento básico da cliente: como solicitar atualizações de conteúdo e interpretar o GA4
- [ ] Entrega da documentação técnica simplificada e credenciais de acesso

#### Entregáveis

- Landing page publicada no domínio definitivo com HTTPS
- Relatório de QA com evidências de testes em múltiplos dispositivos
- Documento de credenciais e guia de manutenção básica
- Gravação de vídeo-tutorial curto (5-10 min) explicando como acompanhar o Analytics

---

## Premissas

- A cliente fornece todas as fotos dos produtos e da loja em alta resolução (mínimo 1200px) até o início da Fase 2
- Aprovações de wireframe e design ocorrem em até 1 dia útil após envio
- A cliente já possui ou adquire o domínio customizado antes da Fase 4
- O acesso à conta do Instagram para configurar a Basic Display API é concedido no início do projeto
- Não há necessidade de criação de fotos/conteúdo fotográfico — apenas organização do material existente
- Funcionalidades de e-commerce (carrinho, pagamento) estão fora do escopo desta fase
