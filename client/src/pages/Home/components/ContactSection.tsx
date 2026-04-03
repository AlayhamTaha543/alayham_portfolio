import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
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
  );
}
