"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Trophy, Star, BarChart3, Target, Code2, Clock, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PURPLE = "#A78BFA";

const achievements = [
  {
    title: "Completed 10+ major projects",
    subtitle: "Across Web Development & Data Analysis",
  },
  {
    title: "Solved 500+ DSA Problems",
    subtitle: "On various coding platforms",
  },
  {
    title: "Consistent Learner",
    subtitle: "Always exploring new technologies",
  },
];

type Highlight = {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
};

const highlights: Highlight[] = [
  { icon: Target, value: "2+", label: "Years Learning & Development", color: PURPLE },
  { icon: Code2, value: "10+", label: "Projects Completed Successfully", color: "#FF003C" },
  { icon: Clock, value: "1000+", label: "Hours Of Coding Experience", color: "#00A8FF" },
  { icon: Cpu, value: "5+", label: "Technologies Worked With", color: "#FF003C" },
];

function AchievementsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border p-5 sm:p-6"
      style={{ borderColor: `${PURPLE}33`, backgroundColor: `${PURPLE}08` }}
    >
      <div className="mb-5 flex items-center gap-2.5">
        <Trophy size={18} style={{ color: PURPLE }} />
        <h3 className="text-sm font-extrabold tracking-widest" style={{ color: PURPLE }}>
          ACHIEVEMENTS
        </h3>
      </div>

      <ul className="relative z-10 flex flex-col gap-4">
        {achievements.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <Star size={16} className="mt-0.5 shrink-0" style={{ color: PURPLE }} fill={PURPLE} />
            <div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-0.5 text-xs text-gray">{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* decorative trophy illustration */}
      <Trophy
        size={120}
        strokeWidth={1}
        className="pointer-events-none absolute -bottom-6 -right-6 opacity-10"
        style={{ color: PURPLE }}
      />
    </motion.div>
  );
}

function HighlightsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl border border-border/60 bg-card/20 p-5 sm:p-6"
    >
      <div className="mb-5 flex items-center gap-2.5">
        <BarChart3 size={18} className="text-white" />
        <h3 className="text-sm font-extrabold tracking-widest text-white">
          EXPERIENCE HIGHLIGHTS
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card/40 px-3 py-4 text-center transition-all duration-300 hover:border-[var(--hi-color)] hover:shadow-[0_0_20px_var(--hi-glow)]"
            style={
              {
                "--hi-color": h.color,
                "--hi-glow": `${h.color}55`,
              } as CSSProperties
            }
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${h.color}1a`, color: h.color }}
            >
              <h.icon size={18} />
            </div>
            <p className="text-xl font-extrabold" style={{ color: h.color }}>
              {h.value}
            </p>
            <p className="text-[11px] leading-4 text-gray">{h.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function AchievementsHighlights() {
  return (
    <section className="border-b border-border px-6 py-14 md:px-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AchievementsPanel />
        <HighlightsPanel />
      </div>
    </section>
  );
}
