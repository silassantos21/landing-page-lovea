"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Star, Heart, Sparkles } from "lucide-react";

const aboutContent = {
  princess: {
    eyebrow: "LUMEA Princess",
    title: "Moda infantil com muito amor.",
    paragraphs: [
      "A linha LUMEA Princess nasceu para celebrar a infância com estilo e delicadeza. Cada peça é pensada para que as meninas se sintam especiais, confortáveis e plenas de personalidade.",
      "Roupinhas com detalhes únicos — tule, laços, bordados e estampas exclusivas — que tornam cada momento da infância ainda mais mágico e inesquecível.",
    ],
    highlights: [
      { icon: Sparkles, label: "Design Exclusivo", desc: "Peças únicas com detalhes artesanais e bordados" },
      { icon: Heart, label: "Conforto & Estilo", desc: "Tecidos macios que permitem liberdade de movimento" },
      { icon: Star, label: "Presente Perfeito", desc: "Embalagem presente especial disponível" },
    ],
  },
  babies: {
    eyebrow: "LUMEA Babies",
    title: "Suavidade desde o primeiro dia.",
    paragraphs: [
      "A LUMEA Babies foi criada para acolher os momentos mais preciosos da vida: os primeiros dias, as primeiras descobertas, os primeiros sorrisos do seu bebê.",
      "Cada roupinha é desenvolvida com tecidos hipoalergênicos e macios, priorizando o conforto e a segurança do seu bebê sem abrir mão da beleza e da delicadeza.",
    ],
    highlights: [
      { icon: Heart, label: "Tecidos Seguros", desc: "100% algodão e materiais hipoalergênicos" },
      { icon: Star, label: "0 a 24 meses", desc: "Coleção completa para todas as fases" },
      { icon: Sparkles, label: "Enxoval Completo", desc: "Conjuntos, macacões, calçados e acessórios" },
    ],
  },
};

export default function About() {
  const { theme } = useTheme();
  const content = aboutContent[theme];

  return (
    <section id="about" className="py-24 theme-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={theme + "-about"}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "var(--accent)" }} />
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "var(--accent)", fontWeight: 400, letterSpacing: "0.2em" }}
                >
                  {content.eyebrow}
                </span>
              </div>

              <h2
                className="mb-8"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  lineHeight: 1.2,
                  color: "var(--text-primary)",
                  fontFamily: theme === "princess" ? "'Playfair Display', serif" : "'Montserrat', sans-serif",
                  fontWeight: theme === "princess" ? 400 : 300,
                  letterSpacing: "0.01em",
                }}
              >
                {content.title}
              </h2>

              {content.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mb-4 leading-relaxed text-sm sm:text-base"
                  style={{ color: "var(--text-secondary)", fontWeight: 300 }}
                >
                  {p}
                </p>
              ))}

              {/* Highlights */}
              <div className="mt-10 space-y-4">
                {content.highlights.map(({ icon: Icon, label, desc }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent)" }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium mb-0.5"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {label}
                      </div>
                      <div
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--text-muted)", fontWeight: 300 }}
                      >
                        {desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Store info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="theme-card rounded-3xl p-8 sm:p-10"
          >
            <h3
              className="text-lg mb-8 pb-6"
              style={{
                color: "var(--text-primary)",
                fontWeight: 300,
                letterSpacing: "0.12em",
                borderBottom: "1px solid var(--border)",
                textTransform: "uppercase",
              }}
            >
              Visite nossa loja
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent)" }}
                >
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>
                    Endereço
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: "var(--text-primary)", fontWeight: 300 }}>
                    Rua Oscar Freire, 987
                    <br />
                    Jardins — São Paulo, SP
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent)" }}
                >
                  <Clock size={16} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                    Horário de funcionamento
                  </div>
                  <div className="space-y-1">
                    {[
                      { days: "Segunda a Sexta", hours: "10h — 19h" },
                      { days: "Sábado", hours: "10h — 17h" },
                      { days: "Domingo", hours: "Fechado" },
                    ].map(({ days, hours }) => (
                      <div key={days} className="flex justify-between text-sm" style={{ fontWeight: 300 }}>
                        <span style={{ color: "var(--text-secondary)" }}>{days}</span>
                        <span style={{ color: "var(--text-primary)" }}>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn mt-8 flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase w-full"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
