"use client";

import { Activity, GitBranch } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="flex justify-center pt-5 pb-2">
      <div className="flex items-center gap-5 rounded-full border border-white/10 bg-card/60 px-6 py-2 backdrop-blur-md">

        {/* Online */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="text-[11px] text-gray">
            STATUS :
          </span>

          <span className="text-[11px] font-semibold text-emerald-400">
            ONLINE
          </span>
        </div>

        <span className="text-white/15">│</span>

        {/* Branch */}
        <div className="flex items-center gap-2">
          <GitBranch size={14} className="text-white/60" />
          <span className="text-[11px] font-medium text-white">
            main
          </span>
        </div>

        <span className="text-white/15">│</span>

        {/* Ping */}
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-yellow-400" />

          <span className="text-[11px] text-gray">
            LATENCY :
          </span>

          <span className="text-[11px] font-semibold text-blue">
            18ms
          </span>
        </div>

      </div>
    </div>
  );
}