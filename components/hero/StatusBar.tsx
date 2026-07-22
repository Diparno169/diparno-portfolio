"use client";

import { Activity, GitBranch } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="flex justify-center px-3 pt-1 pb-0 md:pt-3 md:pb-2">
     <div className="flex items-center gap-2 rounded-full border border-white/10 bg-card/60
px-3 py-1
md:px-4 md:py-1.5
backdrop-blur-md">

        {/* Online */}
        <div className="flex items-center gap-1">
        <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          <span className="text-[9px] md:text-[10px] text-gray">
            STATUS :
          </span>

          <span className="text-[9px] md:text-[10px] font-semibold text-emerald-400">
            ONLINE
          </span>
        </div>

        <span className="text-[9px] md:text-[10px] text-white/15">│</span>

        {/* Branch */}
        <div className="flex items-center gap-1">
          <GitBranch size={12} className="text-white/60" />

          <span className="text-[9px] md:text-[10px] font-medium text-white">
            main
          </span>
        </div>

        <span className="text-[9px] md:text-[10px] text-white/15">│</span>

        {/* Ping */}
        <div className="flex items-center gap-1">
          <Activity size={12} className="text-yellow-400" />

          <span className="text-[9px] md:text-[10px] text-gray">
            LATENCY :
          </span>

          <span className="text-[9px] md:text-[10px] font-semibold text-blue">
            18ms
          </span>
        </div>

      </div>
    </div>
  );
}