"use client";

import { motion } from "framer-motion";

const infoLines: { label: string; value: string }[] = [
  { label: "Name", value: "Diparno Chatterjee" },
  { label: "Email", value: "diparno.chatterjee0@gmail.com" },
  { label: "Phone", value: "+91 9832930356" },
  { label: "Availability", value: "Open for Opportunities" },
];

export default function ContactInfo() {
  const maxLabelLen = Math.max(...infoLines.map((l) => l.label.length));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-xs font-semibold tracking-widest text-red">
         CONTACT_INFO
      </span>

      <div className="relative mt-4 rounded-2xl border border-red/30 bg-card/20 p-5 sm:p-6">
        <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-red/60" />
        <span className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-red/60" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-red/60" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-red/60" />

        <p className="font-mono text-xs text-green sm:text-sm">
          <span className="text-gray">diparno@portfolio:</span>~$ cat contact.info
        </p>

        <div className="mt-4 space-y-2.5 font-mono text-[13px] leading-6 sm:text-sm">
          {infoLines.map((line) => (
            <p key={line.label} className="flex flex-wrap gap-x-2 text-white">
              <span className="text-gray">
                &gt; {line.label.padEnd(maxLabelLen, " ")}
              </span>
              <span className="text-gray">:</span>
              <span>{line.value}</span>
            </p>
          ))}
        </div>

        <p className="mt-4 font-mono text-xs text-green sm:text-sm">
          <span className="text-gray">diparno@portfolio:</span>~$
          <span className="ml-1 inline-block h-4 w-2 animate-blink bg-green align-middle" />
        </p>
      </div>
    </motion.div>
  );
}
