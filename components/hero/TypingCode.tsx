"use client";

import { useEffect, useState } from "react";

const lines = [
  { n: "01", text: [{ t: "const ", c: "text-blue" }, { t: "diparno", c: "text-white" }, { t: " = {", c: "text-gray" }] },
  { n: "02", text: [{ t: "  name: ", c: "text-gray" }, { t: "'Diparno Chatterjee'", c: "text-green" }, { t: ",", c: "text-gray" }] },
  { n: "03", text: [{ t: "  role: ", c: "text-gray" }, { t: "'Full Stack Developer'", c: "text-green" }, { t: ",", c: "text-gray" }] },
  { n: "04", text: [{ t: "  passion: ", c: "text-gray" }, { t: "'Building Future'", c: "text-green" }, { t: ",", c: "text-gray" }] },
  { n: "05", text: [{ t: "  skills: ", c: "text-gray" }, { t: "['React', 'Next.js', 'Node.js']", c: "text-green" }, { t: ",", c: "text-gray" }] },
  { n: "06", text: [{ t: "  status: ", c: "text-gray" }, { t: "'Always Learning'", c: "text-green" }] },
  { n: "07", text: [{ t: "};", c: "text-gray" }] },
  { n: "08", text: [{ t: "", c: "" }] },
  { n: "09", text: [{ t: "function ", c: "text-blue" }, { t: "createImpact", c: "text-white" }, { t: "() {", c: "text-gray" }] },
  { n: "10", text: [{ t: "  return ", c: "text-blue" }, { t: "'Code. Innovate. Elevate.'", c: "text-green" }, { t: ";", c: "text-gray" }] },
  { n: "11", text: [{ t: "}", c: "text-gray" }] },
];

export default function TypingCode() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, 160);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="mt-6 max-w-xl overflow-hidden rounded-xl border border-border bg-card/60">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>

          <span className="text-xs font-medium text-white">
            portfolio.tsx
          </span>

        </div>

        <span className="text-[11px] text-gray/60">
          UTF-8
        </span>
      </div>

      {/* Code */}
      <div className="p-4 font-mono text-[13px] leading-6">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="w-5 shrink-0 select-none text-right text-gray/50">
              {line.n}
            </span>

            <span>
              {line.text.map((seg, j) => (
                <span key={j} className={seg.c}>
                  {seg.t}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}