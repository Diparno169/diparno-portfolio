"use client";

import { motion } from "framer-motion";
import { Code2, ChevronRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="px-6 py-10 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl border border-green/50 bg-green/5 px-6 py-6 shadow-glow-green sm:flex-row sm:items-center"
      >
        <div className="pointer-events-none absolute inset-0 animate-pulse-glow bg-gradient-to-r from-green/10 via-transparent to-green/10" />

        <div className="relative flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-green/50 text-green">
            <Code2 size={18} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Let&apos;s build something amazing together!
            </h3>
            <p className="mt-1 text-sm text-gray">
              I&apos;m always open to discussing new projects and ideas.
            </p>
          </div>
        </div>

        <a
          href="#send-message"
          className="relative flex shrink-0 items-center gap-2 rounded-xl border border-green/60 px-6 py-3 text-sm font-semibold tracking-wide text-green transition-all hover:bg-green/10 hover:shadow-glow-green"
        >
          GET IN TOUCH
          <ChevronRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
