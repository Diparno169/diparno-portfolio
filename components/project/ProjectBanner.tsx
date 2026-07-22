"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CodeXml, ChevronRight } from "lucide-react";

export default function ProjectBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl border border-red/30 bg-card/30 px-5 py-6 sm:flex-row sm:items-center sm:px-8"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-red/10 via-transparent to-transparent sm:block" />

      <div className="relative flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red/50 text-red">
          <CodeXml size={20} />
        </div>
        <p className="text-sm leading-6 text-white sm:text-base">
          Every project is a goal achieved.
          <br />
          Every line of code is a step forward.
        </p>
      </div>

      <Link
        href="/contact"
        className="relative flex shrink-0 items-center gap-2 rounded-xl border border-red/50 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all hover:bg-red/10 hover:border-red hover:shadow-glow-red"
      >
        Have a Project in Mind?
        <ChevronRight size={16} className="text-red" />
      </Link>
    </motion.div>
  );
}
