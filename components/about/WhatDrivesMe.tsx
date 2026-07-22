"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Target, Zap, Crown } from "lucide-react";

const features = [
  { label: "FOCUSED", desc: "Always stay focused on the goal", icon: Target, color: "#00A8FF" },
  { label: "CONSISTENT", desc: "Small daily progress leads to big results", icon: Zap, color: "#00A8FF" },
  { label: "DETERMINED", desc: "Never stop until it's done", icon: Crown, color: "#FF003C" },
];

export default function WhatDrivesMe() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-xs font-semibold tracking-widest text-red">
         WHAT DRIVES ME
      </span>
      <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
        Discipline, <span className="text-blue text-glow-blue">Passion</span>,
        <br />
        <span className="text-red text-glow-red">Consistency.</span>
      </h2>
      <p className="mt-4 max-w-md text-sm leading-7 text-gray">
        I believe in putting 100% into everything I do &mdash; whether it&apos;s
        code or football. Both teach me focus, patience, and the hunger to
        win.
      </p>

      <div className="mt-7 grid grid-cols-3 gap-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.label}
              className="group flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: `${f.color}33` }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:shadow-[0_0_16px_var(--f-glow)]"
                style={{ borderColor: f.color, color: f.color, "--f-glow": `${f.color}66` } as CSSProperties}
              >
                <Icon size={16} />
              </div>
              <span className="text-[11px] font-bold tracking-wide text-white">{f.label}</span>
              <span className="hidden text-[10px] leading-4 text-gray sm:block">{f.desc}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
