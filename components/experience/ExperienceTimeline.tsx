"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, type LucideIcon } from "lucide-react";

type TimelineItem = {
  side: "left" | "right";
  range: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

const items: TimelineItem[] = [
  {
    side: "left",
    range: "2018 - 2020",
    title: "Higher Secondary",
    description: "Completed my Higher Secondary education with a focus on Science.",
    icon: GraduationCap,
    color: "#00A8FF",
  },
  {
    side: "right",
    range: "2020 - 2023",
    title: "Bachelor of Computer Applications (BCA)",
    description:
      "Completed BCA with a strong foundation in programming, web development and databases.",
    icon: GraduationCap,
    color: "#FF003C",
  },
  {
    side: "left",
    range: "2023 - 2025",
    title: "Master of Computer Applications (MCA)",
    description:
      "Pursued MCA to deepen my knowledge in software development and IT fundamentals.",
    icon: GraduationCap,
    color: "#00A8FF",
  },
  {
    side: "right",
    range: "2024",
    title: "MERN Stack Developer Intern",
    description:
      "Completed industrial training at Euphoria GenX in MERN stack development.",
    icon: Briefcase,
    color: "#FF003C",
  },
  {
    side: "left",
    range: "2025 - Present",
    title: "Full Stack Developer",
    description: "Building modern web applications and solving real-world problems.",
    icon: Code2,
    color: "#00A8FF",
  },
];

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const iconBox = (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 bg-bg [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]"
      style={{ borderColor: item.color, color: item.color }}
    >
      <item.icon size={22} />
    </div>
  );

  const textBlock = (
    <div className="min-w-0">
      <p className="text-xs font-bold tracking-wide" style={{ color: item.color }}>
        {item.range}
      </p>
      <h3 className="mt-1 text-base font-bold leading-snug text-white">{item.title}</h3>
      <p className="mt-1.5 text-xs leading-6 text-gray">{item.description}</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: item.side === "left" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="flex items-start gap-4 rounded-2xl border p-5 transition-all duration-300"
      style={
        {
          borderColor: `${item.color}33`,
          backgroundColor: `${item.color}0d`,
          "--hover-glow": `${item.color}55`,
        } as CSSProperties
      }
    >
      {item.side === "left" ? (
        <>
          {iconBox}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {iconBox}
        </>
      )}
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section className="border-b border-border px-6 py-14 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-center justify-center gap-3"
      >
        <span className="h-px w-10 bg-red/40 sm:w-20" />
        <h2 className="text-center text-lg font-extrabold tracking-widest text-white sm:text-xl">
          MY JOURNEY TIMELINE
        </h2>
        <span className="h-px w-10 bg-red/40 sm:w-20" />
      </motion.div>

      <div className="relative rounded-2xl border border-border/60 bg-card/10 p-4 sm:p-6 lg:p-8">
        {/* center connecting line (desktop only) */}
        <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-64px)] w-px -translate-x-1/2 bg-gradient-to-b from-blue/50 via-red/50 to-blue/50 lg:block" />

        <div className="flex flex-col gap-6">
          {items.map((item, i) => (
            <div key={item.title} className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
              {/* center node (desktop only) */}
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-bg lg:block"
                style={{ borderColor: item.color, boxShadow: `0 0 10px ${item.color}88` }}
              />

              {item.side === "left" ? (
                <>
                  <TimelineCard item={item} index={i} />
                  <div className="hidden lg:block" />
                </>
              ) : (
                <>
                  <div className="hidden lg:block" />
                  <TimelineCard item={item} index={i} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
