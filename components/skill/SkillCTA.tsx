"use client";

import Image from "next/image";


export default function SkillCTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-red/30 bg-[#090b13]">

      {/* Banner Image */}
      <Image
        src="/images/skill-banner.png"
        alt="Skill Banner"
        fill
        priority
        className="object-cover object-center scale-[1.05]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[120px] items-center py-6 sm:min-h-[140px] lg:min-h-[160px]">

        {/* Text */}
        <div
  className="
    ml-[90px]
    sm:ml-[140px]
    lg:ml-[170px]
    max-w-[42%]
  "
>
          <h3 className="text-base font-medium leading-tight text-white sm:text-2xl">
            I don't just write code,
          </h3>

          <p className="mt-1 text-lg font-bold leading-tight text-red-500 drop-shadow-[0_0_10px_rgba(255,0,70,.7)] sm:text-3xl">
            I build solutions that score.
          </p>
        </div>
      </div>
    </div>
  );
}