import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
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
  );
}
