import { motion } from "framer-motion";
import Certifications from "@/components/Certifications";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import {
  Navigation,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  EducationSection,
  ContactSection,
  Footer,
} from "./components";

/**
 * Modern Technical Minimalism Design System
 * Deep Slate (#0F172A) base with Electric Cyan (#00D9FF) accents
 * Typography: Sora (headings), Fira Code (technical content)
 * Layout: Asymmetric grid with staggered sections
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Skip Navigation for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Certifications Section */}
        <Certifications />

        {/* Skills Section */}
        <SkillsSection />

        {/* Education Section */}
        <EducationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
