"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Monitor, Rocket, Trophy } from "lucide-react";

const journey = [
  {
    year: "2018",
    title: "Started My Academic Journey",
    icon: GraduationCap,
    color: "#00A8FF",
  },
  {
    year: "2020",
    title: "Fell in Love with Programming",
    icon: Code2,
    color: "#FF003C",
  },
  {
    year: "2023",
    title: "Built My First Full Stack Projects",
    icon: Monitor,
    color: "#00A8FF",
  },
  {
    year: "2024",
    title: "Exploring New Tech & Opportunities",
    icon: Rocket,
    color: "#FF003C",
  },
  {
    year: "2025+",
    title: "Building, Learning & Inspiring Everyday",
    icon: Trophy,
    color: "#00A8FF",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="border-b border-border px-6 py-14 md:px-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-red">
             MY JOURNEY
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            A Journey of <span className="text-blue text-glow-blue">Consistency</span> and{" "}
            <span className="text-red text-glow-red">Growth.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray">
            From writing my first line of code to building real-world
            projects and solving complex problems &mdash; it&apos;s been an
            incredible ride of learning, failing, improving, and never giving
            up.
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-4">
          {/* connecting line */}
          <div className="absolute left-6 top-6 h-[calc(100%-24px)] w-px bg-gradient-to-b from-blue/40 via-red/40 to-blue/40 lg:left-0 lg:top-6 lg:h-px lg:w-full lg:bg-gradient-to-r" />

          {journey.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="relative z-10 flex flex-1 items-start gap-4 lg:flex-col lg:items-center lg:text-center"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 bg-bg [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] transition-all duration-300 hover:shadow-[0_0_18px_var(--node-glow)]"
                  style={
                    {
                      borderColor: step.color,
                      color: step.color,
                      "--node-glow": `${step.color}66`,
                    } as CSSProperties
                  }
                >
                  <Icon size={20} />
                </div>
                <div className="lg:mt-1">
                  <p className="text-lg font-extrabold" style={{ color: step.color }}>
                    {step.year}
                  </p>
                  <p className="mt-1 max-w-[150px] text-xs leading-5 text-gray">
                    {step.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
