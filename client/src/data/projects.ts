export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePlaceholder: string;
  tags: string[];
  role: string;
  problem: string;
  techStack: string[];
  github: string;
  liveUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  logoUrl: string;
}

export const projects: Project[] = [
  {
    id: "masjedi",
    title: "Masjedi",
    description: "A robust backend system for mosque management and community engagement built with Spring Boot and MySQL.",
    imageUrl: "/images/projects/masjedi-hero.webp",
    imagePlaceholder: "/images/projects/masjedi-placeholder.webp",
    tags: ["Backend", "Java", "MySQL"],
    role: "Backend Developer & System Architect",
    problem: "Mosques needed a comprehensive digital solution to manage daily operations, community engagement, and administrative tasks efficiently while maintaining data security and scalability.",
    techStack: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "Spring Security", "JWT Authentication"],
    github: "https://github.com/AlayhamTaha543/Masjedi",
  },
  {
    id: "tourism",
    title: "Tourism Management",
    description: "Comprehensive tourism management system with Laravel framework featuring role-based access control and advanced booking functionality.",
    imageUrl: "/images/projects/tourism-hero.webp",
    imagePlaceholder: "/images/projects/tourism-placeholder.webp",
    tags: ["Backend", "PHP", "MySQL"],
    role: "Full Stack Developer",
    problem: "Tourism companies struggled with managing bookings, tour schedules, and customer relationships across multiple channels without a unified platform.",
    techStack: ["PHP", "Laravel", "MySQL", "RESTful APIs", "Eloquent ORM", "Role-Based Access Control"],
    github: "https://github.com/AlayhamTaha543/Tourism-Management",
  },
  {
    id: "satellite",
    title: "Satellite Simulation",
    description: "Interactive 3D satellite simulation visualizing orbital mechanics with real-time data updates and user interactions.",
    imageUrl: "/images/projects/satellite-hero.webp",
    imagePlaceholder: "/images/projects/satellite-placeholder.webp",
    tags: ["Frontend", "3D", "JavaScript"],
    role: "Frontend Developer & 3D Specialist",
    problem: "Educational institutions needed an engaging way to teach orbital mechanics and satellite behavior with real-time visualization capabilities.",
    techStack: ["JavaScript", "Three.js", "WebGL", "Real-time Data", "3D Visualization", "Canvas API"],
    github: "https://github.com/AlayhamTaha543/Satellite-simulation",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (limit: number = 3): Project[] => {
  return projects.slice(0, limit);
};

export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter(project => 
    project.tags.some(projectTag => 
      projectTag.toLowerCase() === tag.toLowerCase()
    )
  );
};

// Security helper to validate URLs
export const isValidUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};

// Certifications data
export const certifications: Certification[] = [
  {
    id: "google-ai-professional",
    title: "Google AI Professional Certificate",
    issuer: "Google Cloud",
    date: "2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/XYZ123", // Replace with actual URL
    logoUrl: "/images/certifications/google-ai-logo.svg",
  },
];

export const getCertificationById = (id: string): Certification | undefined => {
  return certifications.find(cert => cert.id === id);
};
