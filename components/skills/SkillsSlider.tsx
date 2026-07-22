"use client";

import {
  SiHtml5,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiFramer,
  SiPython,
  SiPhp,
  SiC,
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithub,
  SiPrisma,
  SiTypeorm,
  SiMongoose,
  SiPostman,
  SiVite,
  SiNpm,
  SiYarn,
  SiVercel,
  SiNetlify,
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
import { TbApi } from "react-icons/tb";
import {
  FaBrain,
  FaPalette,
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import { FaJava } from "react-icons/fa6";
import {
  SiMui,
  SiChakraui,
} from "react-icons/si";

import { DiDotnet } from "react-icons/di";

import { FaDatabase } from "react-icons/fa";

import { DiRedis } from "react-icons/di";

import { DiMsqlServer } from "react-icons/di";

import { FaAws } from "react-icons/fa";

import { BiCodeAlt } from "react-icons/bi";

import { RiOpenaiFill } from "react-icons/ri";

import { FcGoogle } from "react-icons/fc";

import { SiDart } from "react-icons/si";

import { SiRust } from "react-icons/si";

import { SiBabel } from "react-icons/si";

import { SiClaude } from "react-icons/si";

import { memo } from "react";

import { skills } from "@/lib/data";

// Hoisted to module scope: these are static and were previously being
// reallocated on every render for no reason.
const iconMap = {
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  SCSS: SiSass,
  JavaScript: SiJavascript,
  Babel: SiBabel,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  Redux: SiRedux,
  "Framer Motion": SiFramer,

  Python: SiPython,
  PHP: SiPhp,
  Java: FaJava,
  C: SiC,
  "C++": SiCplusplus,
  Flutter: SiFlutter,
  Angular: SiAngular,
  "Vue.js": SiVuedotjs,
  Laravel: SiLaravel,
  Django: SiDjango,
  Flask: SiFlask,
  "ASP.NET": DiDotnet,
  "Spring Boot": SiSpringboot,
  Dart: SiDart,
  Rust: SiRust,

  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  MariaDB: SiMariadb,
  Oracle: FaDatabase,
  Redis: DiRedis,
  Supabase: SiSupabase,
  Prisma: SiPrisma,
  TypeORM: SiTypeorm,
  Mongoose: SiMongoose,

  Firebase: SiFirebase,
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,

  AWS: FaAws,
  Azure: DiMsqlServer,
  "Google Cloud": SiGooglecloud,
  Cloudinary: SiCloudinary,

  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  Linux: SiLinux,
  NGINX: SiNginx,


  GraphQL: SiGraphql,
  Swagger: SiSwagger,
  "REST API": BiCodeAlt,

  Figma: SiFigma,
  


  "Material UI": SiMui,
  "Chakra UI": SiChakraui,

  OpenAI: RiOpenaiFill,
  Claude: SiClaude,
Gemini: FcGoogle,

  "React Native": SiReact,

  Vite: SiVite,
  npm: SiNpm,
  Yarn: SiYarn,
  Vercel: SiVercel,
  Netlify: SiNetlify,
} as const;

const loop = [...skills, ...skills];

function SkillsSlider() {
  return (
    <section className="border-b border-border px-6 py-6 md:px-10">
      <div className="relative flex items-center gap-3 rounded-2xl border border-green/30 bg-card/40 px-3 py-4">

        <div className="no-scrollbar overflow-hidden">
          <div className="flex w-max animate-marquee gap-8 py-1 hover:[animation-play-state:paused]">
            {loop.map((skill, i) => {
  const Icon = iconMap[skill.name as keyof typeof iconMap];

  return (
              <div
                key={`${skill.name}-${i}`}
                className="flex w-[86px] shrink-0 flex-col items-center gap-2 rounded-xl border border-transparent px-2 py-2 transition-all duration-300 hover:border-green/50 hover:bg-green/5 hover:shadow-[0_0_12px_rgba(0,255,120,.25)]">
                <div
  className="flex h-10 w-10 items-center justify-center rounded-lg text-xl"
  style={{
    backgroundColor: skill.bg,
    color: skill.color,
  }}
>
  {Icon ? (
  <Icon
    size={24}
    className="transition-transform duration-300 group-hover:scale-110"
  />
) : (
  <TbApi
    size={22}
    className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
  />
)}
</div>

                <span className="text-center text-[11px] font-medium text-gray">
                  {skill.name}
                </span>
              </div>
            );
})}
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default memo(SkillsSlider);
