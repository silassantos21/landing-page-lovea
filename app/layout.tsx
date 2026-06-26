import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "LUMEA — Moda Infantil & Bebê | São Paulo",
  description:
    "LUMEA: moda infantil premium e enxoval de bebê. LUMEA Princess para meninas e LUMEA Babies para recém-nascidos. Rua Oscar Freire, 987 — Jardins, São Paulo. Atendimento via WhatsApp.",
  openGraph: {
    title: "LUMEA — Moda Infantil & Bebê",
    description: "Elegância e ternura em cada peça. Moda infantil e enxoval de bebê.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="princess">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Dancing+Script:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
