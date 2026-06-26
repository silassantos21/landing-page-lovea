"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { getProducts } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, ExternalLink } from "lucide-react";

const WHATSAPP_NUMBER = "5531985322913";

function whatsappLink(productName: string) {
  const msg = encodeURIComponent(`Olá! Vi no site e gostaria de saber mais sobre: ${productName}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

const sectionTitles = {
  princess: {
    eyebrow: "Moda Infantil",
    title: "Para Pequenas Princesas",
    sub: "Roupinhas encantadas com muito estilo e qualidade.",
  },
  babies: {
    eyebrow: "Enxoval & Bebê",
    title: "Delicadeza para Bebês",
    sub: "Peças macias e confortáveis para os primeiros anos de vida.",
  },
};

export default function Products() {
  const { theme } = useTheme();
  const products = getProducts(theme);
  const { eyebrow, title, sub } = sectionTitles[theme];

  return (
    <section id="products" className="py-24 theme-section-alt">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={theme + "-header"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: "var(--accent)" }} />
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--accent)", fontWeight: 400, letterSpacing: "0.2em" }}
              >
                {eyebrow}
              </span>
              <div className="h-px w-12" style={{ backgroundColor: "var(--accent)" }} />
            </div>
            <h2
              className="text-3xl sm:text-4xl mb-4"
              style={{
                color: "var(--text-primary)",
                fontFamily: theme === "princess" ? "'Playfair Display', serif" : "'Montserrat', sans-serif",
                fontWeight: theme === "princess" ? 400 : 300,
                letterSpacing: "0.02em",
              }}
            >
              {title}
            </h2>
            <p
              className="text-sm max-w-md mx-auto"
              style={{ color: "var(--text-secondary)", fontWeight: 300 }}
            >
              {sub}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={theme + "-grid"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="theme-card rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    unoptimized
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
                  >
                    <a
                      href={whatsappLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-medium text-white transition-all"
                      style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ShoppingBag size={13} />
                      Tenho interesse
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3.5">
                  <span
                    className="text-xs block mb-1"
                    style={{ color: "var(--accent)", letterSpacing: "0.1em", fontWeight: 400 }}
                  >
                    {product.category}
                  </span>
                  <h3
                    className="text-sm font-medium leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {product.name}
                  </h3>
                  <a
                    href={whatsappLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 flex items-center gap-1 text-xs transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <ExternalLink size={11} />
                    Ver no WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20ver%20o%20catálogo%20completo.`}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn inline-flex items-center gap-2 px-10 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase"
          >
            <ShoppingBag size={15} />
            Ver catálogo completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
