"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ListItem = {
  title: string;
  subtitle: string;
  year: string;
};

const education: ListItem[] = [
  { title: "Madhyamik (Secondary)", subtitle: "West Bengal Board of Secondary Education", year: "2018" },
  { title: "Higher Secondary", subtitle: "West Bengal Council of Higher Secondary Education", year: "2020" },
  { title: "Bachelor of Computer Applications (BCA)", subtitle: "Vivekananda Mahavidyalaya, Haripal", year: "2023" },
  { title: "Master of Computer Applications (MCA)", subtitle: "Brainware University", year: "2025" },
];

const certifications: ListItem[] = [
  { title: "MERN Stack Industrial Training", subtitle: "Euphoria GenX", year: "2024" },
  { title: "Web Development Bootcamp", subtitle: "Udemy", year: "2024" },
  { title: "JavaScript (ES6+) Developer", subtitle: "HackerRank", year: "2024" },
  { title: "Responsive Web Design", subtitle: "freeCodeCamp", year: "2023" },
];

function ListPanel({
  title,
  icon: Icon,
  color,
  items,
}: {
  title: string;
  icon: LucideIcon;
  color: string;
  items: ListItem[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border p-5 sm:p-6"
      style={{ borderColor: `${color}33`, backgroundColor: `${color}08` }}
    >
      <div className="mb-5 flex items-center gap-2.5">
        <Icon size={18} style={{ color }} />
        <h3 className="text-sm font-extrabold tracking-widest" style={{ color }}>
          {title}
        </h3>
      </div>

      <ul className="relative flex flex-col gap-5 pl-5">
        <span
          className="absolute left-[3px] top-1 h-[calc(100%-8px)] w-px"
          style={{ backgroundColor: `${color}33` }}
        />
        {items.map((item) => (
          <li key={item.title} className="relative flex items-start justify-between gap-4">
            <span
              className="absolute -left-5 top-1 h-2 w-2 rounded-full"
              style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}88` }}
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-0.5 text-xs text-gray">{item.subtitle}</p>
            </div>
            <span className="shrink-0 text-xs font-bold" style={{ color }}>
              {item.year}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function EducationCertifications() {
  return (
    <section className="border-b border-border px-6 py-14 md:px-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ListPanel title="EDUCATION" icon={GraduationCap} color="#00A8FF" items={education} />
        <ListPanel title="CERTIFICATIONS" icon={Award} color="#FF003C" items={certifications} />
      </div>
    </section>
  );
}
