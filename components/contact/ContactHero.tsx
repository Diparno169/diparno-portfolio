"use client";

import { motion } from "framer-motion";
import TerminalIntro from "./TerminalIntro";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 border-b border-border px-6 py-14 md:px-10 lg:grid-cols-2 lg:gap-8 lg:py-16">
      {/* Left column */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-semibold tracking-widest text-blue">
           CONNECT TERMINAL
        </span>

        <h1 className="mt-3 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
          CONTACT <span className="text-red text-glow-red">ME_</span>
        </h1>

        <div className="mt-6">
          <TerminalIntro />
        </div>
      </motion.div>

      {/* Right column: football goal visual (CSS/SVG only, no external image) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-border sm:h-[340px] lg:h-[440px]"
      >
        {/* ambient glow blobs */}
        <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-blue/25 blur-[70px]" />
        <div className="absolute -right-6 bottom-6 h-48 w-48 rounded-full bg-red/30 blur-[80px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue/10 via-transparent to-red/15" />

        {/* PLACEHOLDER IMAGE: football goal with neon blue/red lighting */}
        <div className="relative h-full w-full">
  <Image
    src="/images/contact-goal.png"
    alt="Football Goal"
    fill
    priority
    className="object-cover"
  />
</div>
      </motion.div>
    </section>
  );
}
