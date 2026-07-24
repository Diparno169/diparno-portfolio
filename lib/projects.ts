import type { CategoryIconName, TechIconName } from "@/components/project/ProjectCard";

export type Project = {
  slug: string;
  title: string;
  description: string;
  icon: CategoryIconName;
  accent: "red" | "blue" | "green";
  technologies: TechIconName[];
  github: string;
  liveDemo: string;
  category: string;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-web-app",
    title: "E-Commerce Web App",
    description:
      "A full-stack e-commerce platform with cart, payment gateway, admin panel and order management.",
    icon: "cart",
    accent: "red",
    technologies: ["react", "nodejs", "express", "mongodb", "tailwind"],
    github: "https://github.com/diparno/ecommerce-web-app",
    liveDemo: "https://ecommerce-demo.example.com",
    category: "Full Stack",
  },
  {
    slug: "job-portal",
    title: "Job Portal",
    description:
      "A job searching platform where users can find jobs, apply, and track applications with secure authentication.",
    icon: "briefcase",
    accent: "blue",
    technologies: ["react", "nodejs", "express", "mongodb", "tailwind"],
    github: "https://github.com/diparno/job-portal",
    liveDemo: "https://job-portal-demo.example.com",
    category: "Full Stack",
  },
  {
    slug: "blog-website",
    title: "Blog Website",
    description:
      "A modern blog platform with rich text editor, categories, authentication and comment system.",
    icon: "edit",
    accent: "green",
    technologies: ["nextjs", "react", "nodejs", "mongodb"],
    github: "https://github.com/diparno/blog-website",
    liveDemo: "https://blog-demo.example.com",
    category: "Full Stack",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills, projects and experiences with modern UI/UX.",
    icon: "user",
    accent: "red",
    technologies: ["nextjs", "react", "tailwind", "typescript"],
    github: "https://github.com/diparno/portfolio-website",
    liveDemo: "https://diparno-portfolio.example.com",
    category: "Frontend",
  },
  {
    slug: "task-manager-app",
    title: "Task Manager App",
    description:
      "A task management application to add, update, delete and organize daily tasks efficiently.",
    icon: "check",
    accent: "blue",
    technologies: ["react", "nodejs", "mongodb"],
    github: "https://github.com/diparno/task-manager-app",
    liveDemo: "https://task-manager-demo.example.com",
    category: "Full Stack",
  },
  {
    slug: "portfolio-website",
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It showcases my skills, projects, experience, and contact information with a premium responsive UI and interactive animations.",
    icon: "user",
    accent: "red",
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
    ],
    github: "https://github.com/Diparno169/diparno-portfolio",
    liveDemo: "https://weather-dashboard-pink-nu.vercel.app/",
    category: "Frontend",
  },
]
