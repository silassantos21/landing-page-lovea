"use client";

import { useTheme, Theme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, Heart } from "lucide-react";

const WHATSAPP_NUMBER = "5511987654321";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.`;
const IG_PRINCESS = "https://www.instagram.com/lumea.princess";
const IG_BABIES = "https://www.instagram.com/lumea.babies";

const heroContent: Record<Theme, {
  eyebrow: string;
  headline: [string, string];
  sub: string;
  cta: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
  bgImage: string;
  headlineFont: string;
  headlineFontWeight: number;
  headlineLetterSpacing: string;
}> = {
  princess: {
    eyebrow: "Moda Infantil com Amor",
    headline: ["Para as", "pequenas princesas."],
    sub: "Roupinhas encantadas para meninas cheias de personalidade. Cada peça é um conto de fadas.",
    cta: "Explorar coleção",
    ctaSecondary: "@lumea.princess",
    ctaSecondaryHref: IG_PRINCESS,
    bgImage: "/assets/produtos/lovea-princess/anonyig.io_Instagram_lovea.princess_3854316831570566061_6935682506.jpg",
    headlineFont: "'Playfair Display', serif",
    headlineFontWeight: 400,
    headlineLetterSpacing: "0.02em",
  },
  babies: {
    eyebrow: "Enxoval & Bebê",
    headline: ["Suavidade para", "os primeiros momentos."],
    sub: "Roupinhas delicadas e confortáveis para bebês de 0 a 24 meses. Qualidade que os pais confiam.",
    cta: "Ver produtos",
    ctaSecondary: "@lumea.babies",
    ctaSecondaryHref: IG_BABIES,
    bgImage: "/assets/produtos/lovea-babies/anonyig.io_Instagram_lovea.babies_3576061821155119618_45268260388.jpg",
    headlineFont: "'Montserrat', sans-serif",
    headlineFontWeight: 300,
    headlineLetterSpacing: "0.04em",
  },
};

function EyebrowIcon({ theme }: { theme: Theme }) {
  if (theme === "princess") return <Sparkles size={14} />;
  return <Heart size={14} />;
}

export default function Hero() {
  const { theme } = useTheme();
  const content = heroContent[theme];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme + "-bg"}
          className="absolute inset-0"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            backgroundImage: `url('${content.bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--hero-overlay)" }}
      />

      {/* Gradient bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: "linear-gradient(to top, var(--bg-primary), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={theme + "-content"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8" style={{ backgroundColor: "var(--accent)" }} />
              <span
                className="flex items-center gap-1.5 text-xs uppercase"
                style={{ color: "var(--accent)", letterSpacing: "0.2em", fontWeight: 400 }}
              >
                <EyebrowIcon theme={theme} />
                {content.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontFamily: content.headlineFont,
                fontWeight: content.headlineFontWeight,
                letterSpacing: content.headlineLetterSpacing,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
                color: "#FFFFFF",
              }}
            >
              {content.headline[0]}
              <br />
              <span style={{ color: "var(--accent)" }}>{content.headline[1]}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 text-sm sm:text-base leading-relaxed max-w-md"
              style={{ color: "rgba(255,255,255,0.8)", fontWeight: 300 }}
            >
              {content.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn px-8 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase"
              >
                {content.cta}
              </a>
              <a
                href={content.ctaSecondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full text-sm font-light tracking-widest uppercase transition-all duration-200"
                style={{
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.35)",
                  backdropFilter: "blur(4px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                {content.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>
          Rolar
        </span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
