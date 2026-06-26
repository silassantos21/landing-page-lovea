"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

export type Theme = "princess" | "babies";

export interface ThemeConfig {
  id: Theme;
  label: string;
  sublabel: string;
  curtainColor: string;
}

export const THEMES: ThemeConfig[] = [
  { id: "princess", label: "LUMEA", sublabel: "Princess", curtainColor: "#F2A7C3" },
  { id: "babies",   label: "LUMEA", sublabel: "Babies",   curtainColor: "#B8D8C8" },
];

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "princess",
  setTheme: () => {},
  isTransitioning: false,
});

type CurtainPhase = "idle" | "entering" | "exiting";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("princess");
  const [curtainPhase, setCurtainPhase] = useState<CurtainPhase>("idle");
  const [curtainColor, setCurtainColor] = useState("#F2A7C3");
  const pendingTheme = useRef<Theme | null>(null);
  const isTransitioning = curtainPhase !== "idle";

  const setTheme = useCallback((newTheme: Theme) => {
    if (newTheme === theme || isTransitioning) return;
    const config = THEMES.find((t) => t.id === newTheme)!;
    setCurtainColor(config.curtainColor);
    pendingTheme.current = newTheme;
    setCurtainPhase("entering");
  }, [theme, isTransitioning]);

  const handleEnterComplete = useCallback(() => {
    if (pendingTheme.current) {
      setThemeState(pendingTheme.current);
      document.documentElement.setAttribute("data-theme", pendingTheme.current);
    }
    setCurtainPhase("exiting");
  }, []);

  const handleExitComplete = useCallback(() => {
    pendingTheme.current = null;
    setCurtainPhase("idle");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isTransitioning }}>
      <div data-theme={theme} className="min-h-screen">
        {children}

        {curtainPhase === "entering" && (
          <motion.div
            className="curtain-overlay"
            style={{ backgroundColor: curtainColor, position: "fixed", inset: 0, zIndex: 9999 }}
            initial={{ scaleX: 0, transformOrigin: "left center" }}
            animate={{ scaleX: 1, transformOrigin: "left center" }}
            transition={{ duration: 0.45, ease: [0.77, 0, 0.18, 1] }}
            onAnimationComplete={handleEnterComplete}
          />
        )}

        {curtainPhase === "exiting" && (
          <motion.div
            className="curtain-overlay"
            style={{ backgroundColor: curtainColor, position: "fixed", inset: 0, zIndex: 9999 }}
            initial={{ scaleX: 1, transformOrigin: "right center" }}
            animate={{ scaleX: 0, transformOrigin: "right center" }}
            transition={{ duration: 0.45, ease: [0.77, 0, 0.18, 1] }}
            onAnimationComplete={handleExitComplete}
          />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
