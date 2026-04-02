import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressiveImage from "@/components/ProgressiveImage";
import { certifications } from "@/data/projects";
import { useMemo } from "react";

export default function Certifications() {
  // Memoize animation variants for performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning in cutting-edge technologies.
          </p>
        </motion.div>

        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group"
              >
                <Card className="bg-card border-border hover:border-accent/50 overflow-hidden transition-all duration-300 relative">
                  {/* Featured shimmer effect for Google AI certificate */}
                  {cert.id === "google-ai-professional" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent shimmer pointer-events-none z-10" />
                  )}
                  
                  <div className="p-8 text-center space-y-6">
                    {/* Logo */}
                    <div className="w-full h-40 flex items-center justify-center p-4">
                      {cert.id === "google-ai-professional" ? (
                        <div className="relative h-32 w-32">
                          <ProgressiveImage
                            src="/images/certifications/google-ai-professional-certificate.png"
                            placeholder="/images/certifications/placeholder.webp"
                            alt="Google AI Professional Certificate"
                            className="h-full w-full object-contain drop-shadow-xl"
                            aspectRatio="auto"
                            fallback={
                              <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-xl">
                                <span className="text-white font-bold text-2xl">G</span>
                              </div>
                            }
                          />
                        </div>
                      ) : (
                        <ProgressiveImage
                          src={cert.logoUrl}
                          placeholder="/images/certifications/placeholder.webp"
                          alt={`${cert.issuer} logo`}
                          className="max-h-full max-w-full object-contain"
                          aspectRatio="auto"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        {cert.date}
                      </p>
                    </div>

                    {/* Action */}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg text-accent font-medium transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
