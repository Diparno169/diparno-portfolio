"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { Cloud, Code2 } from "lucide-react";
import type { IconType } from "react-icons";

// All logos live here, inside the Client Component, so parent Server
// Components only ever pass a plain string key as a prop (safe to cross the
// Server -> Client boundary) instead of a component reference.
const ICONS: Record<string, IconType | undefined> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  python: SiPython,
  php: SiPhp,
  mysql: SiMysql,
  mongodb: SiMongodb,
  git: SiGit,
  tailwind: SiTailwindcss,
  firebase: SiFirebase,
};

export type SkillIconName = keyof typeof ICONS | "restapi";

type Props = {
  icon: SkillIconName;
  name: string;
  percent: number;
  iconColor: string;
  iconBg: string;
  barColor: string;
};

export default function SkillCard({ icon, name, percent, iconColor, iconBg, barColor }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Guaranteed-safe resolution: if a given react-icons export ever comes
  // back undefined (version mismatch, tree-shaking quirk, etc.), fall back
  // to a generic icon instead of crashing the whole grid. In dev mode we
  // also log which key failed so it's easy to swap in the correct import.
  const resolved = icon === "restapi" ? Cloud : ICONS[icon];
  const Icon: IconType =
    typeof resolved === "function" ? resolved : (Code2 as IconType);

  if (process.env.NODE_ENV === "development" && typeof resolved !== "function") {
    // eslint-disable-next-line no-console
    console.warn(
      `[SkillCard] Icon for "${icon}" (${name}) did not resolve from react-icons — using fallback icon. Check the export name in components/skill/SkillCard.tsx.`
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="rounded-xl border border-red/20 bg-card/50 p-4 transition-all duration-300 hover:border-red/60 hover:shadow-glow-red"
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          <Icon />
        </div>
        <span className="text-sm font-semibold text-white">{name}</span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: barColor }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${percent}%` } : { width: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          />
        </div>
        <span className="w-9 shrink-0 text-right text-xs font-semibold text-gray">
          {percent}%
        </span>
      </div>
    </motion.div>
  );
}
