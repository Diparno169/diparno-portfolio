"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Gamepad2,
  Headphones,
  Trophy,
} from "lucide-react";
import Image from "next/image";

const rows = [
  {
    title: "Football Enthusiast",
    desc: "Football is my escape and my energy.",
    icon: Trophy,
    image: "/images/football-banner.png",
    position: "object-[70%_20%]",
  },
  {
    title: "Gamer",
    desc: "Gaming helps me think fast and stay sharp.",
    icon: Gamepad2,
    image: "/images/gamer-banner.png",
    position: "object-center",
  },
  {
    title: "Music Lover",
    desc: "Music keeps me calm and productive.",
    icon: Headphones,
    image: "/images/music-banner.png",
    position: "object-center",
  },
];

export default function BeyondTheCode() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-red/30 bg-card/30"
    >
      {/* Header */}
      <div className="border-b border-red/20 px-5 py-4">
        <span className="text-xs font-semibold tracking-[0.25em] text-blue">
          BEYOND THE CODE
        </span>
      </div>

      <div className="flex flex-col divide-y divide-red/10">
        {rows.map((row) => {
          const Icon = row.icon;

          return (
            <div
              key={row.title}
              className="group relative min-h-[120px] sm:min-h-[135px] overflow-hidden"
            >
              <Image
  src={row.image}
  alt={row.title}
  fill
  className={`object-cover ${row.position} transition-all duration-500 group-hover:scale-105`}
/>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Left Fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#090b13] via-[#090b13]/55 to-transparent" />

              {/* Content */}
<div className="relative z-10 flex h-full items-center px-6 py-6 sm:px-8">
  <div className="flex items-center gap-4 max-w-[75%] sm:max-w-[55%]">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red/40 bg-black/30 text-red backdrop-blur-sm">
      <Icon size={20} />
    </div>

    <div className="flex items-start gap-3">
      <div>
        <h3 className="text-base font-semibold text-white sm:text-xl">
          {row.title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-300 sm:text-base">
          {row.desc}
        </p>
      </div>

      <ChevronRight
        size={20}
        className="mt-1 shrink-0 text-red transition-all duration-300 group-hover:translate-x-1"
      />
    </div>
  </div>
</div>
</div>
          );
        })}
      </div>
    </motion.div>
  );
}