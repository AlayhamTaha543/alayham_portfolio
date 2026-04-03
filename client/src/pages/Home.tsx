import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Mail, Phone, MapPin, Linkedin, Moon, Sun } from "lucide-react";
import { useState, Suspense, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProgressiveImage from "@/components/ProgressiveImage";
import { ProjectGallerySkeleton } from "@/components/ProjectSkeleton";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import Certifications from "@/components/Certifications";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Modern Technical Minimalism Design System
 * Deep Slate (#0F172A) base with Electric Cyan (#00D9FF) accents
 * Typography: Sora (headings), Fira Code (technical content)
 * Layout: Asymmetric grid with staggered sections
 */


export default function Home() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { theme, toggleTheme, switchable } = useTheme();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Back to Top Button */}
      <BackToTop />

      {/* Navigation Header */}
      <motion.header 
        className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="container py-3 md:py-4 flex items-center justify-between flex-wrap gap-2">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-accent-foreground font-bold text-xs md:text-sm">AT</span>
            </div>
            <span className="font-bold text-base md:text-lg">Alayham Taha</span>
          </motion.div>
          <div className="flex items-center gap-3 md:gap-6 flex-wrap">
            <a href="#projects" className="text-xs md:text-sm hover:text-accent transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#skills" className="text-xs md:text-sm hover:text-accent transition-colors relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="text-xs md:text-sm hover:text-accent transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            {switchable && toggleTheme && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
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

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 md:py-28 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div 
            className="mb-16 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of my most impactful backend development projects, showcasing expertise in API design, database optimization, and scalable architecture.
            </p>
          </motion.div>

          <Suspense fallback={<ProjectGallerySkeleton />}>
            <ProjectGallery expandedProject={expandedProject} setExpandedProject={setExpandedProject} />
          </Suspense>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <Certifications />

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 md:py-28 border-t border-border bg-card/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Technical Skills</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Backend */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-accent">Backend</h3>
              <div className="space-y-3">
                {["PHP (Laravel)", "Java (Spring Boot)", "RESTful APIs"].map(
                  (skill) => (
                    <motion.div 
                      key={skill} 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-accent rounded-full"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-muted-foreground">{skill}</span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-accent">Frontend</h3>
              <div className="space-y-3">
                {[
                  "JavaScript",
                  "Three.js",
                  "HTML5 & CSS3",
                ].map((skill) => (
                  <motion.div 
                    key={skill} 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-accent rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Database & Tools */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-accent">Database & Tools</h3>
              <div className="space-y-3">
                {[
                  "MySQL & PostgreSQL",
                  "Git & GitHub",
                  "OOP & MVC Architecture",
                ].map((skill) => (
                  <motion.div 
                    key={skill} 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-accent rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div 
            className="mt-12 pt-12 border-t border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
              {[
                { lang: "Arabic", level: "Native" },
                { lang: "English", level: "Proficient" },
                { lang: "French", level: "Advanced" },
              ].map((item, index) => (
                <motion.div 
                  key={item.lang} 
                  className="flex items-baseline gap-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <span className="font-medium text-foreground">{item.lang}</span>
                  <span className="text-sm text-cyan-400">{item.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        className="py-20 md:py-28 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Education</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <Card className="bg-card border-border p-8 hover:border-accent/50 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">Damascus University</h3>
                  <p className="text-muted-foreground mt-2">
                    Fourth Year, AI Section
                  </p>
                </div>
                <div className="text-accent font-semibold md:text-right mt-2 md:mt-0">Damascus, Syria</div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3 font-semibold">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures",
                    "Algorithms",
                    "Web Development",
                    "Database Management",
                  ].map((course, index) => (
                    <motion.span
                      key={course}
                      className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-xs text-accent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 md:py-28 border-t border-border bg-card/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div 
            className="max-w-2xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Get In Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Interested in collaborating or have a project in mind? Feel free to reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <motion.a
                href="mailto:alayham543279@gmail.com"
                className="group p-6 bg-background border border-border hover:border-accent/50 rounded-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Mail className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-sm font-semibold mt-2 break-all">
                  alayham543279@gmail.com
                </p>
              </motion.a>

              <motion.a
                href="tel:+963953971735"
                className="group p-6 bg-background border border-border hover:border-accent/50 rounded-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Phone className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-sm font-semibold mt-2">+963 953 971 735</p>
              </motion.a>

              <motion.div 
                className="group p-6 bg-background border border-border hover:border-accent/50 rounded-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-sm font-semibold mt-2">Damascus, Syria</p>
              </motion.div>
            </div>

            <motion.div 
              className="pt-8 flex gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.a
                href="https://github.com/AlayhamTaha543"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-accent/20"
              >
                <Github size={20} />
                Follow on GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/alayham-taha-8bb369277/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-accent/20"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
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
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="https://github.com/AlayhamTaha543"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github size={18} />
            </motion.a>
            <p>Crafted with precision and passion for backend excellence.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
