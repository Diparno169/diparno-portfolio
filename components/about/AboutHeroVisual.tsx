import Image from "next/image";

export default function AboutHeroVisual() {
  return (
    <div className="relative mx-auto flex h-[480px] w-full max-w-[950px] items-center justify-center sm:h-[620px] lg:h-[600px]">

      {/* glow blobs */}
      <div className="absolute left-4 top-4 h-36 w-36 rounded-full bg-blue/25 blur-[70px]" />
      <div className="absolute bottom-4 right-4 h-36 w-36 rounded-full bg-red/25 blur-[70px]" />

      <div className="hero-frame relative -mt-40 z-10 w-full overflow-hidden rounded-3xl shadow-[0_0_45px_rgba(255,0,60,0.18)]">
  <Image
    src="/images/hero2.png"
    alt="Diparno Chatterjee"
    width={1400}
    height={900}
    priority
    className="
      w-full
      max-w-[900px]
      h-auto
      rounded-2xl
      object-cover
    "
  />

  {/* Football Text */}
  <span
    className="
      absolute
      top-6
      right-6
      z-20
      -rotate-6
      font-mono
      text-xs
      font-bold
      italic
      text-red/90
      drop-shadow-[0_0_12px_rgba(255,0,60,0.8)]
      sm:text-sm
      lg:text-base
    "
  >
    <span className="text-red">
  FOOTBALL
</span>
<br />
<span className="text-red">
  FUELS
</span>
<br />
<span className="text-red drop-shadow-[0_0_18px_rgba(0,168,255,1)]">
  MY FOCUS
</span>
  </span>
</div>
</div>
  );
}
