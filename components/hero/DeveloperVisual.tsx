"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { MouseEvent } from "react";



export default function DeveloperVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-120, 120], [7, -7]);
  const rotateY = useTransform(mouseX, [-120, 120], [-7, 7]);

  const parallaxX = useTransform(mouseX, [-120, 120], [-10, 10]);
  const parallaxY = useTransform(mouseY, [-120, 120], [-10, 10]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
    className="relative mx-auto flex h-[430px] sm:h-[560px] lg:h-[640px] w-full max-w-[650px] items-center justify-center overflow-visible bg-transparent">
      {/* HUD Scanner background layer */}
      <motion.div
  className="absolute inset-0 -translate-y-16 flex items-center justify-center bg-transparent"
>
        {/* Outer segmented HUD ring */}
        <motion.svg
          viewBox="0 0 600 600"
          className="absolute h-[260px] w-[260px] opacity-70 sm:h-[360px] sm:w-[360px] lg:h-[440px] lg:w-[440px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="300"
            cy="300"
            r="280"
            fill="none"
            stroke="rgba(56,189,248,0.35)"
            strokeWidth="2"
            strokeDasharray="3 14"
          />
          <circle
            cx="300"
            cy="300"
            r="250"
            fill="none"
            stroke="rgba(248,113,113,0.25)"
            strokeWidth="1.5"
            strokeDasharray="1 8"
          />
        </motion.svg>

        {/* Radial targeting ticks */}
        <motion.svg
          viewBox="0 0 600 600"
          className="absolute h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] lg:h-[390px] lg:w-[390px]"
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * 360) / 24;
            const long = i % 6 === 0;
            return (
              <line
                key={i}
                x1="300"
                y1={long ? "10" : "20"}
                x2="300"
                y2={long ? "34" : "28"}
                stroke={
                  i % 2 === 0
                    ? "rgba(56,189,248,0.55)"
                    : "rgba(248,113,113,0.4)"
                }
                strokeWidth={long ? 2 : 1}
                transform={`rotate(${a} 300 300)`}
              />
            );
          })}
        </motion.svg>

        {/* Rotating blue arc */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute h-[180px] w-[180px] rounded-full border-[6px] border-transparent border-l-cyan-400 border-t-cyan-400 opacity-80 sm:h-[260px] sm:w-[260px] lg:h-[330px] lg:w-[330px]"
        />

        {/* Rotating red arc */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute h-[160px] w-[160px] rounded-full border-[6px] border-transparent border-r-red-500 border-b-red-500 opacity-80 sm:h-[230px] sm:w-[230px] lg:h-[300px] lg:w-[300px]"
        />

        {/* Thin concentric rings */}
        <div className="absolute h-[200px] w-[200px] rounded-full border border-cyan-400/20 sm:h-[290px] sm:w-[290px] lg:h-[360px] lg:w-[360px]" />
        <div className="absolute h-[140px] w-[140px] rounded-full border border-red-500/20 sm:h-[200px] sm:w-[200px] lg:h-[250px] lg:w-[250px]" />

        
</motion.div>
        

      {/* Breathing glow behind the image */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[260px] w-[220px] rounded-full bg-cyan-400/20 blur-[70px] sm:h-[360px] sm:w-[300px]"
      />

      {/* Hero image */}
      <motion.div
  style={{
    rotateX,
    rotateY,
  }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 20,
  }}
  className="
relative
z-20
translate-y-24
lg:translate-y-28
-translate-x-2
lg:-translate-x-4
"
>
  <Image
    src="/images/Myp.png"
    alt="Diparno"
    width={560}
    height={760}
    priority
    className="
h-[500px]
sm:h-[570px]
lg:h-[680px]
w-auto
object-contain
translate-y-10
lg:translate-y-14
scale-100
drop-shadow-[0_0_90px_rgba(0,180,255,.55)]
"
  />

  
</motion.div>
      
    </div>
  );
}
