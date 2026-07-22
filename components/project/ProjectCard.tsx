"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShoppingCart,
  Briefcase,
  Pencil,
  User,
  CheckSquare,
  Cloud,
  Code2,
  Braces,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiFirebase,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

// Icon map lives inside this Client Component so that Server Components
// (like the page) only ever pass plain string keys as props — never a
// component reference — across the Server -> Client boundary.
const TECH_META = {
  react: { color: "#61DAFB", bg: "#0b1720", label: "React" },
  nextjs: { color: "#FFFFFF", bg: "#0b0b0b", label: "Next.js" },
  nodejs: { color: "#83CD29", bg: "#0d1a0b", label: "Node.js" },
  express: { color: "#94A3B8", bg: "#0b0b0b", label: "Express" },
  mongodb: { color: "#47A248", bg: "#08190f", label: "MongoDB" },
  tailwind: { color: "#38BDF8", bg: "#0a1620", label: "Tailwind CSS" },
  typescript: { color: "#3178C6", bg: "#0b1526", label: "TypeScript" },
  javascript: { color: "#F7DF1E", bg: "#1c1a0b", label: "JavaScript" },
  html5: { color: "#E34F26", bg: "#2a1208", label: "HTML5" },
  css3: { color: "#1572B6", bg: "#0b1a26", label: "CSS3" },
  firebase: { color: "#FFCA28", bg: "#201a08", label: "Firebase" },
  git: { color: "#F05032", bg: "#210b08", label: "Git" },
} as const;

export type TechIconName = keyof typeof TECH_META;

// Every key in TECH_META should have a matching brand icon here. CSS3's
// react-icons export name changed across versions (SiCss3 vs SiCss), so
// it's intentionally omitted and gracefully falls back to a generic
// braces icon at render time instead of risking an invalid import.
const TECH_ICONS: Partial<Record<TechIconName, IconType>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  firebase: SiFirebase,
  git: SiGit,
};

// Category badge icons also live here as a string-keyed map, for the same
// Server -> Client safety reason as TECH_ICONS above.
const CATEGORY_ICONS = {
  cart: ShoppingCart,
  briefcase: Briefcase,
  edit: Pencil,
  user: User,
  check: CheckSquare,
  weather: Cloud,
} as const;

export type CategoryIconName = keyof typeof CATEGORY_ICONS;

type Accent = "red" | "blue" | "green";

const ACCENT_CLASSES: Record<
  Accent,
  { border: string; borderHover: string; glow: string; text: string; bg: string; ring: string }
> = {
  red: {
    border: "border-red/25",
    borderHover: "hover:border-red/70",
    glow: "hover:shadow-glow-red",
    text: "text-red",
    bg: "bg-red/10",
    ring: "border-red/50",
  },
  blue: {
    border: "border-blue/25",
    borderHover: "hover:border-blue/70",
    glow: "hover:shadow-glow-blue",
    text: "text-blue",
    bg: "bg-blue/10",
    ring: "border-blue/50",
  },
  green: {
    border: "border-green/25",
    borderHover: "hover:border-green/70",
    glow: "hover:shadow-glow-green",
    text: "text-green",
    bg: "bg-green/10",
    ring: "border-green/50",
  },
};

type Props = {
  title: string;
  description: string;
  icon: CategoryIconName;
  accent: Accent;
  technologies: TechIconName[];
  github: string;
  liveDemo: string;
};

function ProjectCard({
  title,
  description,
  icon,
  accent,
  technologies,
  liveDemo,
}: Props) {
  const a = ACCENT_CLASSES[accent];
  const Icon = CATEGORY_ICONS[icon] ?? Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl border ${a.border} ${a.borderHover} bg-card/40 transition-all duration-300 ${a.glow}`}
    >
      {/* corner decorations */}
      <span
        className={`pointer-events-none absolute left-0 top-0 z-10 h-5 w-5 border-l-2 border-t-2 ${a.ring} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <span
        className={`pointer-events-none absolute right-0 top-0 z-10 h-5 w-5 border-r-2 border-t-2 ${a.ring} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <span
        className={`pointer-events-none absolute bottom-0 left-0 z-10 h-5 w-5 border-b-2 border-l-2 ${a.ring} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <span
        className={`pointer-events-none absolute bottom-0 right-0 z-10 h-5 w-5 border-b-2 border-r-2 ${a.ring} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      {/* Preview / mockup area */}
      <div className="relative h-44 overflow-hidden border-b border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent">
        <div
          className={`absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:18px_18px]`}
        />
        <div
          className={`absolute -bottom-8 -right-8 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-70 ${
            accent === "red" ? "bg-red/25" : accent === "blue" ? "bg-blue/25" : "bg-green/25"
          }`}
        />

        {/* abstract "device" mockup */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="relative h-full w-full max-w-[220px] rounded-lg border border-white/10 bg-bg/70 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red/60" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
            <div className="space-y-2 p-3">
              <div className={`h-2 w-2/3 rounded-full ${a.bg}`} />
              <div className="h-2 w-full rounded-full bg-white/10" />
              <div className="h-2 w-5/6 rounded-full bg-white/10" />
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                <div className={`h-8 rounded-md ${a.bg}`} />
                <div className="h-8 rounded-md bg-white/5" />
                <div className="h-8 rounded-md bg-white/5" />
              </div>
            </div>
          </div>
        </div>

        {/* icon badge */}
        <div
          className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border ${a.ring} bg-bg/80 ${a.text} shadow-md backdrop-blur-sm`}
        >
          <Icon size={18} />
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p
          className="mt-2 text-sm leading-6 text-gray"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {technologies.map((tech) => {
            const resolved = TECH_ICONS[tech];
            const meta = TECH_META[tech];
            const TechIcon: IconType | null = typeof resolved === "function" ? resolved : null;

            return (
              <span
                key={tech}
                title={meta?.label ?? tech}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-base"
                style={{
                  backgroundColor: meta?.bg ?? "#0F172A",
                  color: meta?.color ?? "#94A3B8",
                }}
              >
                {/* CSS3 has no dedicated import here (see note above); every
                    other tech gracefully falls back to a generic braces icon
                    too, so an unresolved key never breaks rendering. */}
                {TechIcon ? <TechIcon /> : <Braces size={16} />}
              </span>
            );
          })}
        </div>

        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 inline-flex items-center gap-2 rounded-lg border ${a.border} px-4 py-2.5 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white/5 ${a.borderHover} ${a.glow}`}
        >
          View Project
          <ArrowUpRight size={14} className={a.text} />
        </a>
      </div>
    </motion.div>
  );
}

export default memo(ProjectCard);
