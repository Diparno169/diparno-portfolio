"use client";

import { motion } from "framer-motion";
import ExperienceHeroVisual from "./ExperienceHeroVisual";

export default function ExperienceHero() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 border-b border-border px-6 py-14 md:px-10 lg:grid-cols-2 lg:gap-6 lg:py-20">
      {/* Left column */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-blue">
         MY EXPERIENCE
        </span>

        <div className="mt-4 flex items-start gap-3">
          <h1 className="text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
            Every Step.
            <br />
            <span className="text-red text-glow-red">Every Lesson.</span>
          </h1>
        </div>

        <p className="mt-5 max-w-md text-sm leading-7 text-gray">
          My journey has been shaped by education, hands-on experience, and a
          constant hunger to learn and grow.
        </p>

        {/* Loading journey bar */}
        <div className="mt-8 max-w-xs">
          <p className="mb-2 font-mono text-[11px] font-semibold tracking-widest text-gray">
            LOADING JOURNEY...
          </p>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue to-red shadow-glow-blue"
              initial={{ width: "0%" }}
              whileInView={{ width: "62%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Right column — hero visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <ExperienceHeroVisual />
      </motion.div>
    </section>
  );
}
