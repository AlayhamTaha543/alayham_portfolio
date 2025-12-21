import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Modern Technical Minimalism Design System
 * Deep Slate (#0F172A) base with Electric Cyan (#00D9FF) accents
 * Typography: Sora (headings), Fira Code (technical content)
 * Layout: Asymmetric grid with staggered sections
 */

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "masjedi",
    title: "Masjedi",
    description: "A robust backend system for mosque management and community engagement built with Spring Boot and MySQL.",
    technologies: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "Spring Security"],
    highlights: [
      "Implemented RESTful APIs for seamless data communication",
      "Integrated MySQL with optimized queries for efficient data retrieval",
      "Utilized Spring Security for authentication and authorization",
      "Designed scalable backend architecture",
    ],
    github: "https://github.com/AlayhamTaha543/Masjedi",
    image: "/images/project-hero-spring.jpg",
  },
  {
    id: "tourism",
    title: "Tourism Management",
    description: "Comprehensive tourism management system with Laravel framework featuring role-based access control and advanced booking functionality.",
    technologies: ["PHP", "Laravel", "PostgreSQL", "RESTful APIs", "Eloquent ORM"],
    highlights: [
      "Built comprehensive tourism management system with Laravel",
      "Designed RESTful APIs for tours, bookings, and user management",
      "Implemented role-based access control for admin and user roles",
      "Optimized database schema using Eloquent ORM",
    ],
    github: "https://github.com/AlayhamTaha543/Tourism-Management",
    image: "/images/project-hero-laravel.jpg",
  },
  {
    id: "satellite",
    title: "Satellite Simulation",
    description: "Interactive 3D satellite simulation visualizing orbital mechanics with real-time data updates and user interactions.",
    technologies: ["JavaScript", "Three.js", "WebGL", "Real-time Data", "3D Visualization"],
    highlights: [
      "Created interactive 3D satellite simulation using Three.js",
      "Integrated JavaScript modules for real-time data updates",
      "Demonstrated ability to merge frontend creativity with backend data processing",
      "Optimized 3D rendering performance",
    ],
    github: "https://github.com/AlayhamTaha543/Satellite-simulation",
    image: "/images/hero-bg-1.jpg",
  },
];

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <nav className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">AT</span>
            </div>
            <span className="font-bold text-lg">Alayham Taha</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/images/hero-bg-1.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs font-semibold text-accent">
                Backend Developer
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Building Scalable
                <span className="block text-accent">Backend Solutions</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Backend-focused developer with hands-on experience in Laravel and Spring Boot frameworks, complemented by Three.js for 3D web visualizations. Passionate about building scalable APIs and optimizing database performance.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View My Work
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Download CV
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-xs text-muted-foreground">Major Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">4th</div>
                <div className="text-xs text-muted-foreground">Year AI Student</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-xs text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hidden md:block relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg border border-accent/30 overflow-hidden">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-28 border-t border-border">
        <div className="container">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of my most impactful backend development projects, showcasing expertise in API design, database optimization, and scalable architecture.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id
                  )
                }
              >
                <Card className="bg-card border-border hover:border-accent/50 overflow-hidden transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-xs font-medium text-accent"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Highlights - Expanded */}
                        {expandedProject === project.id && (
                          <div className="pt-4 space-y-2 border-t border-border/50">
                            {project.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                <p className="text-sm text-muted-foreground">
                                  {highlight}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-6">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded text-accent transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          <span className="text-sm font-medium">View Code</span>
                        </a>
                        <button
                          className="inline-flex items-center gap-2 px-4 py-2 text-accent text-sm font-medium hover:text-accent/80 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {expandedProject === project.id ? "Show Less" : "Learn More"}
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28 border-t border-border bg-card/50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Backend */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Backend</h3>
              <div className="space-y-3">
                {["PHP (Laravel)", "Java (Spring Boot)", "RESTful APIs"].map(
                  (skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Frontend */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Frontend</h3>
              <div className="space-y-3">
                {[
                  "JavaScript",
                  "Three.js",
                  "HTML5 & CSS3",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database & Tools */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Database & Tools</h3>
              <div className="space-y-3">
                {[
                  "MySQL & PostgreSQL",
                  "Git & GitHub",
                  "OOP & MVC Architecture",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-xl font-bold mb-6">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { lang: "Arabic", level: "Native" },
                { lang: "English", level: "Proficient" },
                { lang: "French", level: "Advanced" },
              ].map((item) => (
                <div key={item.lang} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{item.lang}</span>
                  <span className="text-accent font-semibold">{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>

          <Card className="bg-card border-border p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Damascus University</h3>
                <p className="text-muted-foreground mt-2">
                  Fourth Year, AI Section
                </p>
              </div>
              <div className="text-accent font-semibold">Damascus, Syria</div>
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
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-xs text-accent"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 border-t border-border bg-card/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Interested in collaborating or have a project in mind? Feel free to reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <a
                href="mailto:alayham543279@gmail.com"
                className="group p-6 bg-background border border-border hover:border-accent/50 rounded-lg transition-all duration-300"
              >
                <Mail className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-sm font-semibold mt-2 break-all">
                  alayham543279@gmail.com
                </p>
              </a>

              <a
                href="tel:+963953971735"
                className="group p-6 bg-background border border-border hover:border-accent/50 rounded-lg transition-all duration-300"
              >
                <Phone className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-sm font-semibold mt-2">+963 953 971 735</p>
              </a>

              <div className="group p-6 bg-background border border-border hover:border-accent/50 rounded-lg transition-all duration-300">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-sm font-semibold mt-2">Damascus, Syria</p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://github.com/AlayhamTaha543"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all duration-300"
              >
                <Github size={20} />
                Follow on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background/50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Alayham Taha. All rights reserved.</p>
          <p>Crafted with precision and passion for backend excellence.</p>
        </div>
      </footer>
    </div>
  );
}
