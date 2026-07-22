import {
  Home,
  User,
  Briefcase,
  Code2,
  Timer,
  Mail,
  Power,
} from "lucide-react";

import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiPython,
  SiPhp,
  SiOpenjdk,
  SiC,
  SiCplusplus,
  SiBootstrap,
  SiFramer,
  SiPrisma,
  SiTypeorm,
  SiMongoose,
  SiPostman,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiNpm,
  SiYarn,
  SiVite,
  SiFlutter,
SiAngular,
SiVuedotjs,
SiLaravel,
SiDjango,
SiFlask,
SiDotnet,
SiSpringboot,
SiSqlite,
SiMariadb,
SiRedis,
SiSupabase,
SiGooglecloud,
SiCloudinary,
SiKubernetes,
SiJenkins,
SiLinux,
SiNginx,
SiGraphql,
SiSwagger,
SiFigma,
} from "react-icons/si";

export const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Project", href: "/project", icon: Briefcase },
  { label: "Skill", href: "/skill", icon: Code2 },
  { label: "Experience", href: "/experience", icon: Timer },
  { label: "Contact", href: "/contact", icon: Mail },
];

export const shutdownItem = { label: "Shutdown", icon: Power };

import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  color: string;
  bg: string;
};

export const skills: Skill[] = [
  { name: "HTML5", color: "#E34F26", bg: "#210b08" },
  { name: "CSS3", color: "#1572B6", bg: "#081726" },
  { name: "SCSS", color: "#CC6699", bg: "#201018" },
  { name: "JavaScript", color: "#F7DF1E", bg: "#1c1a0b" },
  { name: "Babel", color: "#F9DC3E", bg: "#201d08" },
  { name: "TypeScript", color: "#3178C6", bg: "#0b1526" },
  { name: "React", color: "#61DAFB", bg: "#0b1720" },
  { name: "Next.js", color: "#FFFFFF", bg: "#0b0b0b" },
  { name: "Node.js", color: "#83CD29", bg: "#0d1a0b" },
  { name: "Express", color: "#FFFFFF", bg: "#0b0b0b" },
  { name: "Tailwind", color: "#38BDF8", bg: "#0a1620" },
  { name: "Bootstrap", color: "#7952B3", bg: "#170d25" },
  { name: "Redux", color: "#764ABC", bg: "#150c22" },
  { name: "Framer Motion", color: "#0055FF", bg: "#0d1430" },
  { name: "Flutter", color: "#02569B", bg: "#081722" },
{ name: "Angular", color: "#DD0031", bg: "#210b14" },
{ name: "Vue.js", color: "#42B883", bg: "#08180f" },
{ name: "Material UI", color: "#007FFF", bg: "#081728" },
{ name: "Chakra UI", color: "#319795", bg: "#081818" },

  { name: "Python", color: "#FFD43B", bg: "#201b08" },
  { name: "PHP", color: "#777BB4", bg: "#18162a" },
  { name: "Java", color: "#EA2D2E", bg: "#210b0b" },
  { name: "C", color: "#00599C", bg: "#081522" },
  { name: "C++", color: "#00599C", bg: "#081522" },
  { name: "Laravel", color: "#FF2D20", bg: "#220b08" },
{ name: "Django", color: "#0C4B33", bg: "#081510" },
{ name: "Flask", color: "#FFFFFF", bg: "#111111" },
{ name: "ASP.NET", color: "#512BD4", bg: "#120d24" },
{ name: "Spring Boot", color: "#6DB33F", bg: "#101b08" },
{ name: "Dart", color: "#0175C2", bg: "#081726" },
{ name: "Rust", color: "#DEA584", bg: "#1a1410" },

  { name: "MongoDB", color: "#00ED64", bg: "#08190f" },
  { name: "MySQL", color: "#00758F", bg: "#06171c" },
  { name: "PostgreSQL", color: "#4169E1", bg: "#0a1330" },
  { name: "TypeORM", color: "#FE0803", bg: "#220808" },
  { name: "Prisma", color: "#FFFFFF", bg: "#101010" },
  { name: "Mongoose", color: "#880000", bg: "#220b0b" },
  { name: "SQLite", color: "#003B57", bg: "#08131a" },
{ name: "MariaDB", color: "#003545", bg: "#08161d" },
{ name: "Oracle", color: "#F80000", bg: "#220808" },
{ name: "Redis", color: "#DC382D", bg: "#220808" },
{ name: "Supabase", color: "#3ECF8E", bg: "#08190f" },

  { name: "Firebase", color: "#FFCA28", bg: "#201a08" },
  { name: "Docker", color: "#2496ED", bg: "#08151f" },
  { name: "Git", color: "#F05032", bg: "#210b08" },
  { name: "GitHub", color: "#FFFFFF", bg: "#111111" },
  { name: "Postman", color: "#FF6C37", bg: "#211108" },
  { name: "AWS", color: "#FF9900", bg: "#201608" },
{ name: "Azure", color: "#0078D4", bg: "#081726" },
{ name: "Google Cloud", color: "#4285F4", bg: "#081828" },
{ name: "Cloudinary", color: "#3448C5", bg: "#111530" },

  { name: "Vite", color: "#646CFF", bg: "#111530" },
  { name: "npm", color: "#CB3837", bg: "#1e0b0b" },
  { name: "Yarn", color: "#2C8EBB", bg: "#0b1821" },
  { name: "Vercel", color: "#FFFFFF", bg: "#111111" },
  { name: "Netlify", color: "#00C7B7", bg: "#081918" },
  { name: "Kubernetes", color: "#326CE5", bg: "#091633" },
{ name: "Jenkins", color: "#D24939", bg: "#220d08" },
{ name: "Linux", color: "#FCC624", bg: "#1d1908" },
{ name: "NGINX", color: "#009639", bg: "#08160d" },

{ name: "REST API", color: "#00BCD4", bg: "#08181c" },
{ name: "GraphQL", color: "#E10098", bg: "#220816" },
{ name: "Swagger", color: "#85EA2D", bg: "#101808" },


{ name: "Figma", color: "#F24E1E", bg: "#220c08" },

{ name: "OpenAI", color: "#10A37F", bg: "#081914" },
{ name: "Claude", color: "#D97706", bg: "#211408" },
{ name: "Gemini", color: "#4285F4", bg: "#081828" },

{ name: "React Native", color: "#61DAFB", bg: "#0b1720" },
];

export type VideoItem = {
  title: string;
  subtitle: string;
  duration: string;
  badgeColor: string;
  thumbGradient: string;
};

export const videos: VideoItem[] = [
  {
    title: "NEXT.JS",
    subtitle: "Next.js Full Course for Beginners",
    duration: "3:28:41",
    badgeColor: "#00A8FF",
    thumbGradient: "from-blue/30 via-transparent to-transparent",
  },
  {
    title: "REACT",
    subtitle: "React Full Course for Beginners",
    duration: "2:15:34",
    badgeColor: "#61DAFB",
    thumbGradient: "from-cyan-500/30 via-transparent to-transparent",
  },
  {
    title: "TAILWIND CSS",
    subtitle: "Tailwind CSS Full Course for Beginners",
    duration: "1:32:11",
    badgeColor: "#38BDF8",
    thumbGradient: "from-sky-500/30 via-transparent to-transparent",
  },
  {
    title: "MONGODB",
    subtitle: "MongoDB Full Course for Beginners",
    duration: "1:01:05",
    badgeColor: "#00FF66",
    thumbGradient: "from-green-500/30 via-transparent to-transparent",
  },
  {
    title: "JAVASCRIPT",
    subtitle: "JavaScript Full Course for Beginners",
    duration: "2:25:15",
    badgeColor: "#F7DF1E",
    thumbGradient: "from-yellow-500/30 via-transparent to-transparent",
  },
  {
    title: "NODE.JS",
    subtitle: "Node.js Full Course for Beginners",
    duration: "2:02:47",
    badgeColor: "#83CD29",
    thumbGradient: "from-green-600/30 via-transparent to-transparent",
  },
];

export const quickLinks = ["Home", "About", "Project", "Skill", "Experience", "Contact"];

export const services = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Database Design",
  "API Integration",
  "UI/UX Design",
];
