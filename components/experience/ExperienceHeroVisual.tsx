"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// PLACEHOLDER IMAGE: replace this panel with a real photo/portrait later.
// Mirrors the reference design — a jersey silhouette from behind over a
// red/blue "network" particle backdrop — using the same lightweight SVG
// approach already used for AboutHeroVisual / ProjectHero so no image
// asset is required.
export default function ExperienceHeroVisual() {
  const particles = [
    { x: 8, y: 10, c: "#FF003C" },
    { x: 22, y: 6, c: "#00A8FF" },
    { x: 38, y: 16, c: "#FF003C" },
    { x: 55, y: 8, c: "#00A8FF" },
    { x: 70, y: 18, c: "#FF003C" },
    { x: 86, y: 10, c: "#00A8FF" },
    { x: 94, y: 26, c: "#FF003C" },
    { x: 15, y: 30, c: "#00A8FF" },
    { x: 62, y: 32, c: "#FF003C" },
    { x: 80, y: 40, c: "#00A8FF" },
  ];

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
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
    <motion.div
  animate={{
    x: [0, 12, 0],
    y: [0, -10, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue/25 blur-[70px]"
/>


<motion.div
  animate={{
    x: [0, -10, 0],
    y: [0, 10, 0],
  }}
  transition={{
    duration: 9,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-6 right-6 h-40 w-40 rounded-full bg-red/25 blur-[80px]"
/>

  
    {/* Grid */}
    <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
  
    <div className="relative h-full w-full">
      <Image
        src="/images/p1.png"
        alt="Experience Hero"
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
  
    <motion.div
  className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10"
  whileHover={{
    boxShadow: [
      "0 0 0 rgba(0,191,255,0)",
      "0 0 30px rgba(0,191,255,.35)",
      "0 0 30px rgba(255,0,80,.35)",
      "0 0 0 rgba(0,191,255,0)",
    ],
  }}
  transition={{
    duration: 1.6,
    ease: "easeInOut",
  }}
/>
  
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
  <motion.div
    initial={{
      x: "-140%",
      opacity: 0,
    }}
    whileHover={{
      x: "220%",
      opacity: [0, 0.7, 0],
    }}
    transition={{
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      absolute
      top-0
      left-0
      h-full
      w-[40%]
      -skew-x-[20deg]
      bg-gradient-to-r
      from-transparent
      via-white/40
      to-transparent
      blur-xl
    "
  />
</div>
  </motion.div>
  );
}
