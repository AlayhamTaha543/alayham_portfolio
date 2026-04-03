import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
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
  );
}
