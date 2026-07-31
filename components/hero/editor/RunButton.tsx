"use client";

import { Play, Loader2 } from "lucide-react";

interface RunButtonProps {
  onRun: () => void;
  isRunning: boolean;
  disabled?: boolean;
}

export default function RunButton({
  onRun,
  isRunning,
  disabled,
}: RunButtonProps) {
  return (
    <button
      onClick={onRun}
      disabled={disabled || isRunning}
      className="flex items-center gap-1.5 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400 transition-all duration-300 hover:bg-emerald-500/20 hover:shadow-[0_0_10px_rgba(16,185,129,0.35)] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isRunning ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <Play className="h-3.5 w-3.5" />
      )}
      {isRunning ? "Running" : "Run"}
    </button>
  );
}
