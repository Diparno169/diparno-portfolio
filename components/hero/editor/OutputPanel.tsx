"use client";

import type { RunResult } from "./types";

interface OutputPanelProps {
  result: RunResult | null;
  isRunning: boolean;
}

export default function OutputPanel({ result, isRunning }: OutputPanelProps) {
  return (
    <div className="border-t border-border bg-black/30 px-4 py-2">
      <div className="mb-1 text-[10px] font-medium uppercase tracking-widest text-gray/50">
        Output
      </div>

      <div className="h-[2.6em] overflow-y-auto font-mono text-[12px] leading-[1.3em] text-white/90">
        {isRunning ? (
          <span className="text-gray/60">Running…</span>
        ) : result ? (
          <>
            {result.stdout && (
              <pre className="whitespace-pre-wrap break-words text-white/90">
                {result.stdout}
              </pre>
            )}
            {result.stderr && (
              <pre className="whitespace-pre-wrap break-words text-red">
                {result.stderr}
              </pre>
            )}
            {!result.stdout && !result.stderr && (
              <span className="text-gray/40">No output</span>
            )}
          </>
        ) : (
          <span className="text-gray/40">Run your code to see output here.</span>
        )}
      </div>
    </div>
  );
}
