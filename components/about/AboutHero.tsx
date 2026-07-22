"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import AboutHeroVisual from "./AboutHeroVisual";
import CodeTerminalCard from "./CodeTerminalCard";

export default function AboutHero() {
  return (
    <section className="grid grid-cols-1 items-start gap-10 border-b border-border px-6 py-14 md:px-10 lg:grid-cols-2 lg:gap-6 lg:py-20">
      {/* Left column */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-block rounded-md border border-blue/40 bg-blue/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-blue">
           ABOUT ME
        </span>

        <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3rem]">
          Code is my passion
          <br />
          football is my
          <br />
          <span className="text-red text-glow-red">life.</span>
        </h1>

        <p className="mt-5 max-w-md text-sm leading-7 text-gray">
          I&apos;m <span className="text-green">Diparno Chatterjee</span>, a Full
          Stack Developer who loves building fast, modern, and scalable web
          applications. I write clean code, design intuitive interfaces, and
          always aim for the best performance.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          {/* PLACEHOLDER LINK: point href to your real CV file */}
          <a
            href="/Diparno_Chatterjee_CV.pdf"
            download=""
            className="flex items-center gap-2 rounded-xl border border-green/40 bg-card px-5 py-3 text-sm font-semibold tracking-wide text-white transition-all hover:border-green hover:shadow-glow-green"
          >
            DOWNLOAD CV
            <Download size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white transition-all hover:border-red hover:text-red hover:shadow-glow-red"
          >
            <Github size={18} />
          </a>
          <a
  href="https://www.linkedin.com/in/diparno-chatterjee-4550b72b9?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue/40 text-blue transition-all hover:border-blue hover:text-blue hover:shadow-glow-blue"
>
  <Linkedin size={18} />
</a>
        </div>
      </motion.div>

      {/* Right column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex flex-col items-center pb-0"
      >
        <div>
  <AboutHeroVisual />
</div>
<div
  className="
    relative
    z-30

    -translate-y-52
mb-[-240px]

    ml-auto
    w-[88%]
    max-w-[340px]

    sm:-translate-y-32
    sm:mb-0
    sm:max-w-[360px]

    lg:absolute
    lg:top-[420px]
    lg:right-4
    lg:translate-y-0
    lg:w-full
    lg:max-w-[340px]
  "
>
  <CodeTerminalCard />
</div>
      </motion.div>
    </section>
  );
}
