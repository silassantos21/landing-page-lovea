"use client";

import { useState, useEffect } from "react";
import { useTheme, THEMES, Theme } from "@/contexts/ThemeContext";
import { Menu, X, ShoppingBag } from "lucide-react";

const WHATSAPP_NUMBER = "5511987654321";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.`;

function LoveaLogo({ theme }: { theme: Theme }) {
  if (theme === "babies") {
    return (
      <div className="flex flex-col items-center leading-none select-none">
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 200,
            fontSize: "1.5rem",
            letterSpacing: "0.35em",
            color: "var(--text-primary)",
            textTransform: "uppercase",
          }}
        >
          LUMEA
        </span>
        <span
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 600,
            fontSize: "1rem",
            color: "var(--accent)",
            letterSpacing: "0.05em",
            marginTop: "-2px",
          }}
        >
          Babies
        </span>
      </div>
    );
  }

  if (theme === "princess") {
    return (
      <div className="flex flex-col items-center leading-none select-none">
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 200,
            fontSize: "1.5rem",
            letterSpacing: "0.35em",
            color: "var(--text-primary)",
            textTransform: "uppercase",
          }}
        >
          LUMEA
        </span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "0.85rem",
            color: "var(--accent)",
            letterSpacing: "0.15em",
            marginTop: "-2px",
          }}
        >
          Princess
        </span>
      </div>
    );
  }

}

export default function Header() {
  const { theme, setTheme, isTransitioning } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Produtos", href: "#products" },
    { label: "Contato", href: "#footer" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "var(--bg-card)",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="transition-opacity hover:opacity-80">
            <LoveaLogo theme={theme} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase transition-colors duration-200"
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: Theme switcher + WhatsApp */}
          <div className="flex items-center gap-3">
            {/* Theme switcher */}
            <div
              className="hidden sm:flex items-center rounded-full p-1 gap-1"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id as Theme)}
                  disabled={isTransitioning}
                  className="relative px-3 py-1.5 rounded-full text-xs font-light transition-all duration-200 disabled:opacity-60"
                  style={{
                    letterSpacing: "0.08em",
                    backgroundColor: theme === t.id ? "var(--accent)" : "transparent",
                    color: theme === t.id ? "#FFFFFF" : "var(--text-secondary)",
                    fontWeight: theme === t.id ? 500 : 300,
                  }}
                >
                  {t.sublabel}
                </button>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
              style={{ letterSpacing: "0.08em" }}
            >
              <ShoppingBag size={14} />
              <span>Comprar</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-full transition-colors"
              style={{ color: "var(--text-primary)", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--border)" }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm uppercase"
                style={{ color: "var(--text-primary)", fontWeight: 500, letterSpacing: "0.1em" }}
              >
                {link.label}
              </a>
            ))}
            {/* Mobile theme switcher */}
            <div className="pt-3 pb-1 flex gap-2">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setTheme(t.id as Theme); setMenuOpen(false); }}
                  disabled={isTransitioning}
                  className="flex-1 py-2 rounded-full text-xs font-light transition-all duration-200"
                  style={{
                    backgroundColor: theme === t.id ? "var(--accent)" : "var(--bg-card)",
                    color: theme === t.id ? "#FFFFFF" : "var(--text-secondary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {t.sublabel}
                </button>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-medium mt-2"
            >
              <ShoppingBag size={14} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
