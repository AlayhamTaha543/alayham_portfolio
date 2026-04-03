import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import { ProjectGallerySkeleton } from "@/components/ProjectSkeleton";

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
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
  );
}
