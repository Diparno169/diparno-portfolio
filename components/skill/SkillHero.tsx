"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CodeXml } from "lucide-react";
import Image from "next/image";

export default function SkillHero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setProgress(100), 300);
    return () => clearTimeout(t);
  }, []);

  return (
<section className="relative grid grid-cols-1 items-center gap-10 overflow-hidden border-b border-border px-6 py-14 md:px-10 lg:grid-cols-2 lg:gap-6 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-blue">
         MY SKILLS
        </span>

        <h1 className="mt-4 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
          Built with code.
          <br />
          <span className="text-red text-glow-red">Driven by passion.</span>
          <CodeXml className="ml-2 inline-block text-red" size={26} />
        </h1>

        <p className="mt-5 max-w-md text-sm leading-7 text-gray">
          Here are my weapons of choice. Each skill represents hours of
          dedication, practice and continuous learning.
        </p>

        <div className="mt-6 max-w-xs">
          <span className="text-xs font-semibold tracking-widest text-blue">
            LOADING SKILLS...
          </span>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-blue shadow-glow-blue"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* PLACEHOLDER IMAGE: football player from behind, jersey "DIPARNO 10" */}
      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  whileHover={{
    y: -8,
    rotateX: 2,
    rotateY: -2,
  }}
  style={{
    transformStyle: "preserve-3d",
  }}
  transition={{ duration: 0.7 }}
  className="
    group
    relative
    w-full
aspect-[3/2]
max-h-[420px]
    overflow-hidden
    rounded-2xl
    border
    border-border/60
    bg-card/30
  "
>
  {/* Glow */}
  <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue/25 blur-[70px]" />
  <div className="absolute bottom-6 right-6 h-40 w-40 rounded-full bg-red/25 blur-[80px]" />

  {/* Grid */}
  <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

  {/* Image */}
  <div className="relative h-full w-full">
  <Image
  src="/images/p1.png"
  alt="Skills"
  fill
  priority
  className="
    relative
    z-10
    object-cover
    object-center
    transition-all
    duration-700
    ease-out
    group-hover:brightness-110
    group-hover:contrast-110
    group-hover:saturate-125
  "
/>
  </div>

  {/* Glass Overlay */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue/10 via-transparent to-red/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  <motion.div
  className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10"
  whileHover={{
    boxShadow: [
      "0 0 0 rgba(0,191,255,0)",
      "0 0 18px rgba(0,191,255,.35)",
      "0 0 18px rgba(255,0,76,.35)",
      "0 0 0 rgba(0,191,255,0)",
    ],
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
</motion.div>

  {/* Mouse Glow */}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    rounded-2xl
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
  "
  style={{
    background:
      "radial-gradient(circle at center, rgba(0,180,255,.15), transparent 65%)",
  }}
/>

    </section>
  );
}
