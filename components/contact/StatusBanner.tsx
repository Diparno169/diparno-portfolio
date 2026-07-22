"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function StatusBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-red/30 bg-card/20 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8"
    >
      <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-red/60" />
      <span className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-red/60" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-red/60" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-red/60" />

      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red/50 text-red shadow-glow-red">
          <Target size={20} />
        </div>
        <div>
          <span className="text-xs font-semibold tracking-widest text-red">
             INITIATE_CONNECTION
          </span>
          <p className="mt-1 text-sm font-bold leading-6 text-green sm:text-base">
            Great projects start with a simple &quot;Hi!&quot;
          </p>
          <p className="mt-1 text-sm leading-6 text-gray">
            Drop a message and let&apos;s build the future together.
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-6 border-t border-border pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
        <div className="text-right">
          <p className="text-xs font-semibold tracking-widest text-gray">
            STATUS
          </p>
          <p className="mt-1 flex items-center justify-end gap-2 text-sm font-extrabold tracking-widest text-red text-glow-red">
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-red shadow-glow-red" />
            ONLINE
          </p>
        </div>
      </div>
    </motion.div>
  );
}
