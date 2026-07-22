"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const fullText = "PS C:\\Users\\Diparno\\Portfolio> npm run dev";

export default function Terminal() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (typed.length >= fullText.length) return;
    const t = setTimeout(() => setTyped(fullText.slice(0, typed.length + 1)), 45);
    return () => clearTimeout(t);
  }, [typed]);

  return (
    <section id="contact" className="border-b border-border px-6 py-10 md:px-10">
      <span className="mb-4 flex items-center gap-2 text-sm font-semibold text-green">
        <span>&gt;</span> Let&apos;s Connect
      </span>

      <div className="flex flex-col gap-5 overflow-hidden rounded-2xl border border-blue/30 bg-card/50 lg:flex-row">
        <div className="flex-1 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
            </div>
            <span className="text-[11px] font-semibold tracking-widest text-gray">
              LOCALHOST SERVER
            </span>
          </div>
          <div className="font-mono text-[13px] leading-7 text-gray">
            <p className="text-white">
              {typed}
              <span className="ml-0.5 animate-blink">▍</span>
            </p>
            {typed.length >= fullText.length && (
              <>
                <p>
                  <span className="text-blue">&gt; local:</span>{" "}
                  <span className="text-white">http://localhost:3000</span>
                </p>
                <p className="text-green">&gt; Ready in 1.2s</p>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 border-t border-border p-5 lg:w-[300px] lg:border-l lg:border-t-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-green/50 text-green shadow-glow-green">
            <CheckCircle2 size={18} />
          </div>
          <span className="font-mono text-sm font-bold tracking-widest text-green">
            COMPILED SUCCESSFULLY
          </span>
        </div>
      </div>
    </section>
  );
}
