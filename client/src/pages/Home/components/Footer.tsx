import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-border py-8 bg-background/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Alayham Taha. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <motion.a
            href="https://www.linkedin.com/in/alayham-taha-8bb369277/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn Profile (opens in new tab)"
          >
            <Linkedin size={18} aria-hidden="true" />
          </motion.a>
          <motion.a
            href="https://github.com/AlayhamTaha543"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <Github size={18} aria-hidden="true" />
          </motion.a>
          <p>Crafted with precision and passion for backend excellence.</p>
        </div>
      </div>
    </motion.footer>
  );
}
