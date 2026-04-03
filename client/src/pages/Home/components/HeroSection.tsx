import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProgressiveImage from "@/components/ProgressiveImage";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <ProgressiveImage
          src="/images/hero-bg-1.webp"
          placeholder="/images/projects/satellite-placeholder.webp"
          alt="Hero background"
          className="w-full h-full object-cover"
          aspectRatio="16/9"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Animated decorative orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl pointer-events-none"
        style={{ y: y2 }}
      />

      <motion.div
        className="container relative py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        style={{ opacity }}
      >
        {/* Left: Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs font-semibold text-accent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Backend Developer
          </motion.div>

          <motion.div className="space-y-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building Scalable
              <span className="block bg-gradient-to-r from-accent via-accent/90 to-accent/70 bg-clip-text text-transparent animate-gradient">
                Backend Solutions
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Backend-focused developer with hands-on experience in Laravel and Spring Boot frameworks, complemented by Three.js for 3D web visualizations. Passionate about building scalable APIs and optimizing database performance.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20">
                View My Work
              </Button>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Get In Touch
              </Button>
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { value: "3+", label: "Major Projects" },
              { value: "4th", label: "Year AI Student" },
              { value: "3", label: "Languages" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/alayham-taha-8bb369277/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg text-accent font-medium transition-all duration-300"
            >
              <Linkedin size={18} />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/AlayhamTaha543"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg text-accent font-medium transition-all duration-300"
            >
              <Github size={18} />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Visual Element with Animated Orbs */}
        <motion.div
          className="hidden md:block relative h-96"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg border border-accent/30 overflow-hidden">
            <motion.div
              className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/15 rounded-full blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
