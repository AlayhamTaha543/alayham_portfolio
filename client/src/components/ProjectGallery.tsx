import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressiveImage from "@/components/ProgressiveImage";
import { projects } from "@/data/projects";
import { useMemo } from "react";

interface ProjectGalleryProps {
  expandedProject: string | null;
  setExpandedProject: (id: string | null) => void;
}

export default function ProjectGallery({
  expandedProject,
  setExpandedProject,
}: ProjectGalleryProps) {
  // Memoize animation variants for performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  }), []);

  // Safe data check
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group cursor-pointer transition-all duration-300"
            onClick={() =>
              setExpandedProject(
                expandedProject === project.id ? null : project.id
              )
            }
          >
          <Card className="bg-card border-border hover:border-accent/50 overflow-hidden transition-all duration-300 h-full flex flex-col">
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <ProgressiveImage
                src={project.imageUrl}
                placeholder={project.imagePlaceholder}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Problem, Role, Tech Stack - Expanded */}
                {expandedProject === project.id && (
                  <motion.div
                    className="pt-4 space-y-4 border-t border-border/50"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-2">The Problem</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-2">Your Role</h4>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-muted/50 rounded text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded text-accent transition-colors text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={14} />
                  <span className="text-xs font-medium">Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 text-accent text-xs font-medium hover:text-accent/80 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 text-accent text-xs font-medium hover:text-accent/80 transition-colors ml-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  More
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
