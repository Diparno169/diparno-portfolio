"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Code2, Coffee, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Icon lookup lives here, inside the Client Component, so callers only ever
// pass a plain string across the Server -> Client boundary instead of a
// component reference (which React cannot serialize).
const ICONS: Record<string, LucideIcon> = {
  target: Target,
  code: Code2,
  coffee: Coffee,
  trophy: Trophy,
};

export type StatIconName = keyof typeof ICONS;

type Props = {
  icon: StatIconName;
  target: number;
  suffix: string;
  label: string;
  color: string;
  labelIsValue?: boolean;
  valueText?: string;
};

export default function StatCard({
  icon,
  target,
  suffix,
  label,
  color,
  labelIsValue,
  valueText,
}: Props) {
  const Icon = ICONS[icon];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || labelIsValue) return;
    let frame: number;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, labelIsValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-card/40 px-5 py-5 transition-all duration-300 hover:border-[var(--stat-color)] hover:shadow-[0_0_20px_var(--stat-glow)]"
      style={
        {
          "--stat-color": color,
          "--stat-glow": `${color}55`,
        } as CSSProperties
      }
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border"
        style={{ borderColor: `${color}66`, color }}
      >
        <Icon size={20} />
      </div>
      <div>
        <p className="text-2xl font-extrabold" style={{ color }}>
          {labelIsValue ? valueText : `${count}${suffix}`}
        </p>
        <p className="text-xs font-medium leading-4 text-gray">{label}</p>
      </div>
    </motion.div>
  );
}
