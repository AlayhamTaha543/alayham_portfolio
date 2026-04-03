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
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Navigation Header */}
      <Navigation />

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

      {/* Footer */}
      <Footer />
    </div>
  );
}
