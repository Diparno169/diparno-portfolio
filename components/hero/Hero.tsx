"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import TypingCode from "./TypingCode";
import DeveloperVisual from "./DeveloperVisual";

export default function Hero() {

  const fullText = "I build digital experiences with code.";

const [typedText, setTypedText] = useState("");

useEffect(() => {
  let index = 0;

  const timer = setInterval(() => {
    setTypedText(fullText.slice(0, index + 1));
    index++;

    if (index >= fullText.length) {
      clearInterval(timer);
    }
  }, 85); 

  return () => clearInterval(timer);
}, []);

  return (
    <section
      id="home"
      className="grid grid-cols-1 items-center gap-10 border-b border-border px-6 py-14 md:px-10 lg:grid-cols-2 lg:gap-6 lg:py-20"
    >
      {/* Left column */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="order-2 lg:order-1"
      >
        <span className="inline-block rounded-md border border-blue/40 bg-blue/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-blue">
          FULL STACK DEVELOPER
        </span>

        <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.4rem] whitespace-pre-line">
  {typedText.split("").map((char, index) => {
    const before = typedText.slice(0, index);

    let color = "text-white";

    if (
      before.includes("experiences") ||
      (before.indexOf("experiences") !== -1 &&
        index >= before.indexOf("experiences") &&
        index <
          before.indexOf("experiences") + "experiences".length)
    ) {
      color = "text-red text-glow-red";
    }

    if (
      before.includes("code") ||
      (before.indexOf("code") !== -1 &&
        index >= before.indexOf("code") &&
        index < before.indexOf("code") + 4)
    ) {
      color = "text-blue text-glow-blue";
    }

    return (
      <span key={index} className={color}>
        {char}
      </span>
    );
  })}

  <span className="ml-1 inline-block w-[3px] h-10 bg-blue animate-pulse align-middle" />
</h1>

        <TypingCode />

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-red/40 bg-card px-5 py-3 text-sm font-medium text-white transition-all hover:shadow-glow-red hover:border-red"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
  href="https://linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 rounded-xl border border-blue/40 px-5 py-3 text-sm font-medium text-blue transition-all hover:border-blue hover:shadow-glow-blue"
>
  <Linkedin size={18} />
  LinkedIn
</a>
        </div>
      </motion.div>

      {/* Right column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="order-1 lg:order-2"
      >
        <DeveloperVisual />
      </motion.div>
    </section>
  );
}
