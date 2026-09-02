import { PortfolioConfig } from './portfolio.example';

// Language-specific content
const content = {
  en: {
    personal: {
      name: "Henry Gutierrez",
      title: "Full Stack Developer",
      subtitle: "Building scalable web applications with modern technologies",
      greeting: "Hello, I'm",
      profilePhoto: "./src/image.png",
      cvUrl: undefined
    },
    about: {
      description: "Full Stack Developer with a passion for creating modern, scalable web applications. Experienced in frontend and backend development, I enjoy solving comple problems, learning new technologies, and building software that delivers real value to users.",
      experience: "My journey as a self-taught developer has been driven by curiosity and continuous learning. I have built full-stack projects, strengthened my problem-solving skills, and enjoy creating clean, scalable web applications with modern technologies.",
      highlights: [
        {
          icon: "Code2",
          title: "5+ Years",
          description: "Professional Experience"
        },
        {
          icon: "Users",
          title: "20+ Projects",
          description: "Successfully Delivered"
        },
        {
          icon: "Lightbulb",
          title: "Modern Tech",
          description: "Latest Technologies"
        },
        {
          icon: "Award",
          title: "Quality Focus",
          description: "Best Practices"
        }
      ]
    },
    projects: [
      {
        title: "Project Name",
        description: "Describe your project here. What it does, what problems it solves, and what technologies you used.",
        image: "/project-image.svg",
        technologies: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/github.com/kb2872/project",
        demo: "https://project-demo.vercel.app"
      }
      // Add more projects as needed
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 88 },
            { name: "Vue.js", level: 75 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 78 }
          ]
        },
        {
          title: "Tools & Others",
          skills: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 82 },
            { name: "Git", level: 92 },
            { name: "Jest", level: 88 },
            { name: "Figma", level: 75 }
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
        "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
      ]
    },
    meta: {
      title: "Henry Gutierrez - Full Stack Developer",
      description: "Personal portfolio of Henry Gutierrez, a full stack developer specializing in modern web technologies.",
      keywords: ["full stack developer", "web development", "portfolio", "react", "typescript"]
    }
  },
  es: {
    personal: {
      name: "Henry Gutierrez",
      title: "Desarrollador Full Stack",
      subtitle: "Desarrollando aplicaciones web escalables con tecnologias modernas.",
      greeting: "Hola, soy",
      profilePhoto: "/profile-photo.png",
      cvUrl: undefined
    },
    about: {
      description: "Desarrollador Full Stack apasionado por crear aplicaciones web modernas y escalables. Disfruto transformar ideas en soluciones digitales utilizando tecnologias actuales, codigo limpio y buenas pràcticas de desarrollo.",
      experience: "Mi camino como desarrollador autodidacta ha estado impulsado por la curiosidad y el aprendizaje continuo. He desarrollado proyectos full stack, fortaleciendo mis habilidades para resolver problemas y disfruto creando aplicaciones web limpias y escalables con tecnologias modernas.",
      highlights: [
        {
          icon: "Code2",
          title: "5+ Años",
          description: "Experiencia Profesional"
        },
        {
          icon: "Users",
          title: "20+ Proyectos",
          description: "Entregados Exitosamente"
        },
        {
          icon: "Lightbulb",
          title: "Tecnología Moderna",
          description: "Últimas Tecnologías"
        },
        {
          icon: "Award",
          title: "Enfoque en Calidad",
          description: "Mejores Prácticas"
        }
      ]
    },
    projects: [
      {
        title: "Nombre del Proyecto",
        description: "Describe tu proyecto aquí. Qué hace, qué problemas resuelve y qué tecnologías usaste.",
        image: "/project-image.svg",
        technologies: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/github.com/kb2872/project",
        demo: "https://project-demo.vercel.app"
      }
      // Agrega más proyectos según sea necesario
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 88 },
            { name: "Vue.js", level: 75 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 78 }
          ]
        },
        {
          title: "Herramientas y Otros",
          skills: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 82 },
            { name: "Git", level: 92 },
            { name: "Jest", level: 88 },
            { name: "Figma", level: 75 }
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
        "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
      ]
    },
    meta: {
      title: "Henry Gutierrez - Desarrollador Full Stack",
      description: "Portfolio personal de Henry Gutierrez, un desarrollador full stack especializado en tecnologías web modernas.",
      keywords: ["desarrollador full stack", "desarrollo web", "portfolio", "react", "typescript"]
    }
  }
};

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Henry Gutierrez",
    title: "Full Stack Developer",
    subtitle: "Building scalable web applications with modern technologies",
    greeting: "Hello, I'm",
    profilePhoto: "/profile-photo.png",
    // cvUrl: "/cv.pdf" // Descomenta cuando subas tu CV a public/cv.pdf
  },

  contact: {
    email: "hengu83@gmail.com",
    phone: "+39 3519651827",
    location: "Cinisello Balsamo, Milano, Italia",
    social: {
      github: "https://github.com/github.com/kb2872",
      linkedin: "https://linkedin.com/in/www.linkedin.com/in/henrym-gutierrez",
      twitter: "https://twitter.com/github.com/kb2872", // Optional - update if different
      instagram: "https://instagram.com/github.com/kb2872" // Optional - update if different
    }
  },

  about: {
    description: "Full Stack Developer with a passion for creating modern, scalable web applications. Experienced in frontend and backend development, I enjoy solving comple problems, learning new technologies, and building software that delivers real value to users.",
    experience: "My journey as a self-taught developer has been driven by curiosity and continuous learning. I have built full-stack projects, strengthened my problem-solving skills, and enjoy creating clean, scalable web applications with modern technologies.",
    highlights: [
      {
        icon: "Code2",
        title: "5+ Years",
        description: "Professional Experience"
      },
      {
        icon: "Users",
        title: "20+ Projects",
        description: "Successfully Delivered"
      },
      {
        icon: "Lightbulb",
        title: "Modern Tech",
        description: "Latest Technologies"
      },
      {
        icon: "Award",
        title: "Quality Focus",
        description: "Best Practices"
      }
    ]
  },

  projects: [
    {
      title: "Project Name",
      description: "Describe your project here. What it does, what problems it solves, and what technologies you used.",
      image: "/project-image.svg",
      technologies: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/github.com/kb2872/project",
      demo: "https://project-demo.vercel.app"
    }
    // Add more projects as needed
  ],

  skills: {
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "Tailwind CSS", level: 88 },
          { name: "Vue.js", level: 75 }
        ]
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", level: 88 },
          { name: "Python", level: 82 },
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "GraphQL", level: 78 }
        ]
      },
      {
        title: "Tools & Others",
        skills: [
          { name: "AWS", level: 85 },
          { name: "Docker", level: 82 },
          { name: "Git", level: 92 },
          { name: "Jest", level: 88 },
          { name: "Figma", level: 75 }
        ]
      }
    ],
    technologies: [
      "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
      "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
    ]
  },

  footer: {
    copyright: "All rights reserved.",
    builtWith: "Built with ❤️ using React & TypeScript"
  },

  meta: {
    title: "Henry Gutierrez - Full Stack Developer",
    description: "Personal portfolio of Henry Gutierrez, a full stack developer specializing in modern web technologies.",
    keywords: ["full stack developer", "web development", "portfolio", "react", "typescript"]
  }
};

// Export the content for use in components
export { content };
