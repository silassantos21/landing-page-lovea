"use client";

import { useTheme, THEMES, Theme } from "@/contexts/ThemeContext";
import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5511987654321";

const instagramLinks: Record<Theme, string> = {
  princess: "https://www.instagram.com/lumea.princess",
  babies: "https://www.instagram.com/lumea.babies",
};

const instagramHandles: Record<Theme, string> = {
  princess: "@lumea.princess",
  babies: "@lumea.babies",
};

export default function Footer() {
  const { theme, setTheme, isTransitioning } = useTheme();

  return (
    <footer id="footer" className="theme-bg" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 100,
                  fontSize: "1.75rem",
                  letterSpacing: "0.4em",
                  color: "var(--text-primary)",
                  display: "block",
                }}
              >
                LUMEA
              </span>
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--text-muted)", fontWeight: 300, letterSpacing: "0.15em" }}
              >
                Moda Infantil & Bebê
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-secondary)", fontWeight: 300 }}
            >
              Moda com elegância, afeto e propósito. Peças que iluminam cada fase da infância.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href={instagramLinks[theme]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Nossas linhas */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: "var(--text-muted)", fontWeight: 400, letterSpacing: "0.2em" }}
            >
              Nossas linhas
            </h4>
            <div className="space-y-3">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id as Theme)}
                  disabled={isTransitioning}
                  className="flex items-center gap-2 text-sm text-left transition-colors duration-200 disabled:opacity-50"
                  style={{
                    color: theme === t.id ? "var(--accent)" : "var(--text-secondary)",
                    fontWeight: theme === t.id ? 500 : 300,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {theme === t.id && (
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                  )}
                  {t.label} {t.sublabel}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h4
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)", fontWeight: 400, letterSpacing: "0.2em" }}
              >
                Instagram
              </h4>
              <a
                href={instagramLinks[theme]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--text-secondary)", fontWeight: 300 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
              >
                {instagramHandles[theme]}
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: "var(--text-muted)", fontWeight: 400, letterSpacing: "0.2em" }}
            >
              Contato & Localização
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                <div className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                  Rua Oscar Freire, 987<br />
                  Jardins — São Paulo, SP<br />
                  CEP 01426-001
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={15} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "var(--text-secondary)", fontWeight: 300 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                >
                  (11) 98765-4321
                </a>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos.`}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium tracking-widest uppercase"
            >
              <MessageCircle size={13} />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)", fontWeight: 300 }}>
            © 2025 LUMEA. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)", fontWeight: 300 }}>
            São Paulo — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
