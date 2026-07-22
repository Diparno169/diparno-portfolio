"use client";

import { useEffect, useState } from "react";

const codeLines = [
  { text: "while(alive) {", c: "text-white" },
  { text: "  eat();", c: "text-blue" },
  { text: "  sleep();", c: "text-blue" },
  { text: "  code();", c: "text-blue" },
  { text: "  playFootball();", c: "text-red" },
  { text: "  repeat();", c: "text-red" },
  { text: "}", c: "text-white" },
];

export default function CodeTerminalCard() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= codeLines.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 220);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="w-full max-w-[300px] rounded-xl border border-red/40 bg-card/80 p-4 shadow-glow-red backdrop-blur-md">
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
      </div>
      <div className="font-mono text-[13px] leading-6">
        {codeLines.slice(0, visible).map((line, i) => (
          <p key={i} className={line.c}>
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
}
