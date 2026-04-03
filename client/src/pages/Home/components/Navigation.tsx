import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navigation() {
  const { theme, toggleTheme, switchable } = useTheme();

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container py-3 md:py-4 flex items-center justify-between flex-wrap gap-2" role="navigation" aria-label="Main navigation">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center shadow-lg" aria-hidden="true">
            <span className="text-accent-foreground font-bold text-xs md:text-sm">AT</span>
          </div>
          <span className="font-bold text-base md:text-lg">Alayham Taha</span>
        </motion.div>
        <div className="flex items-center gap-3 md:gap-6 flex-wrap" role="menubar">
          <a href="#projects" className="text-xs md:text-sm hover:text-accent transition-colors relative group" role="menuitem">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" aria-hidden="true" />
          </a>
          <a href="#skills" className="text-xs md:text-sm hover:text-accent transition-colors relative group" role="menuitem">
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" aria-hidden="true" />
          </a>
          <a href="#contact" className="text-xs md:text-sm hover:text-accent transition-colors relative group" role="menuitem">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" aria-hidden="true" />
          </a>
          {switchable && toggleTheme && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
