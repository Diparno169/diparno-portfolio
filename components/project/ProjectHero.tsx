"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectHero() {
  return (
    <section className="relative grid grid-cols-1 items-center gap-10 overflow-hidden border-b border-border px-6 py-14 md:px-10 lg:grid-cols-2 lg:gap-6 lg:py-20">
      {/* Left column */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-blue">
           MY PROJECTS
        </span>

        <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
          Ideas. Code.
          <br />
          <span className="text-red text-glow-red">Impact.</span>
        </h1>

        <p className="mt-5 max-w-md text-sm leading-7 text-gray">
          Here are some of my selected projects. Each project is a
          reflection of my dedication, creativity, and problem-solving
          skills.
        </p>

        <div className="mt-8 flex items-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-blue"
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Right column — hero visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
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
        {/* stadium-light glow blobs */}
        <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue/25 blur-[70px]" />
        <div className="absolute bottom-6 right-6 h-40 w-40 rounded-full bg-red/25 blur-[80px]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        <div className="relative h-full w-full">
        <Image
  src="/images/p1.png"
  alt="Project Hero"
  fill
  priority
  className="
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
<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue/10 via-transparent to-red/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

<div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 transition-all duration-500 group-hover:border-blue/40 group-hover:shadow-[inset_0_0_30px_rgba(0,170,255,.25)]" />

<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
  <motion.div
    initial={{ x: "-150%" }}
    whileHover={{ x: "220%" }}
    transition={{ duration: 1 }}
    className="
      absolute
      top-0
      left-0
      h-full
      w-1/3
      -skew-x-12
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      blur-md
    "
  />
</div>
      </motion.div>
    </section>
  );
}
