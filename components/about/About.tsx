"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 items-center gap-10 border-b border-border px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-14"
    >
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-semibold tracking-widest text-red"> WHO I AM</span>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Crafting Innovative Solutions Through{" "}
          <span className="text-blue text-glow-blue">Code</span> &{" "}
          <span className="text-red text-glow-red">Creativity</span>
        </h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-gray">
          I&apos;m a passionate Full Stack Developer who loves turning ideas
          into real-world web applications. I build fast, responsive and
          user-friendly solutions using modern technologies. Always curious.
          Always building.
        </p>
        <Link
  href="/about"
  className="group mt-7 inline-flex w-fit items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-red hover:text-red"
>
          Explore More
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-blue/20 bg-card shadow-glow-blue-lg"
      >
        {/* window dots */}
        <div className="absolute left-4 top-4 z-10 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#050a14] via-[#04060B] to-[#0a0210]" />
        <Image
  src="/images/ab.png"
  alt="Diparno"
  fill
  priority
  className="
  absolute
  inset-3
  z-10
  object-contain
  "
/>

        {/* abstract cityscape / workstation glow */}
        <div className="absolute bottom-0 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-t-full bg-blue/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-1/2 w-1/2 rounded-full bg-red/10 blur-3xl" />
        <div className="absolute inset-0 flex items-end justify-center gap-1 px-10 pb-10 opacity-70">
          {[40, 65, 50, 80, 55, 70, 45, 60].map((h, i) => (
            <div
              key={i}
              className="w-full rounded-sm bg-gradient-to-t from-blue/40 to-transparent"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="absolute bottom-4 left-4 h-2 w-2 animate-pulse-glow rounded-full bg-green" />
      </motion.div>
    </section>
  );
}
