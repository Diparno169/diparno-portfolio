"use client";

import { useEffect, useState } from "react";

const whoamiCmd = "whoami";
const closingCmd = "Lets_build_something_great_together.sh";

const bullets = [
  "Full Stack Developer",
  "Problem Solver",
  "Code Enthusiast",
  "Football Lover",
];

export default function TerminalIntro() {
  const [typedWhoami, setTypedWhoami] = useState("");
  const [visibleBullets, setVisibleBullets] = useState(0);
  const [typedClosing, setTypedClosing] = useState("");

  // Step 1: type the `whoami` command
  useEffect(() => {
    if (typedWhoami.length >= whoamiCmd.length) return;
    const t = setTimeout(
      () => setTypedWhoami(whoamiCmd.slice(0, typedWhoami.length + 1)),
      70
    );
    return () => clearTimeout(t);
  }, [typedWhoami]);

  // Step 2: reveal bullet lines one by one, once the command finished typing
  useEffect(() => {
    if (typedWhoami.length < whoamiCmd.length) return;
    if (visibleBullets >= bullets.length) return;
    const t = setTimeout(() => setVisibleBullets((v) => v + 1), 260);
    return () => clearTimeout(t);
  }, [typedWhoami, visibleBullets]);

  // Step 3: type the closing command, once every bullet is visible
  useEffect(() => {
    if (visibleBullets < bullets.length) return;
    if (typedClosing.length >= closingCmd.length) return;
    const t = setTimeout(
      () => setTypedClosing(closingCmd.slice(0, typedClosing.length + 1)),
      35
    );
    return () => clearTimeout(t);
  }, [visibleBullets, typedClosing]);

  const whoamiDone = typedWhoami.length >= whoamiCmd.length;
  const bulletsDone = visibleBullets >= bullets.length;

  return (
    <div>
      <p className="font-mono text-sm text-green">
        <span className="text-gray">diparno@portfolio:</span>~$ {typedWhoami}
        {!whoamiDone && <span className="ml-0.5 animate-blink">▍</span>}
      </p>

      <div className="relative mt-4 rounded-xl border border-red/30 bg-card/50 p-4">
        <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-red/60" />
        <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-red/60" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-red/60" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-red/60" />

        <div className="font-mono text-sm leading-8 text-white">
          {bullets.slice(0, visibleBullets).map((line, i) => {
            const isLast = i === visibleBullets - 1 && bulletsDone;
            return (
              <p key={line}>
                <span className="text-gray">&gt;</span> {line}
                {isLast && <span className="ml-1 inline-block h-4 w-2 animate-blink bg-green align-middle" />}
              </p>
            );
          })}
        </div>
      </div>

      <p className="mt-5 max-w-md text-sm leading-7 text-gray">
        I&apos;m always open to discussing new projects, creative ideas or
        opportunities to be part of your visions.
      </p>

      <p className="mt-5 font-mono text-sm text-green">
        <span className="text-gray">diparno@portfolio:</span>~$ {typedClosing}
        {bulletsDone && <span className="ml-0.5 animate-blink">▍</span>}
      </p>
    </div>
  );
}
