"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Youtube,
} from "lucide-react";

type YoutubeVideo = {
  id: string;
  title: string;
  url: string;
  featured: boolean;
  createdAt: string;
};

export default function YoutubeSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();
        setVideos(data);

      } catch (err) {
        console.error(err);
      }
    }

    loadVideos();
  }, []);

  const getThumbnail = (url: string) => {
    try {
      const videoId =
        new URL(url).searchParams.get("v") ||
        url.split("/").pop()?.split("?")[0];
  
      return `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;
    } catch {
      return "";
    }
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.firstElementChild as HTMLElement;
    const width = card.offsetWidth + 24;

    el.scrollBy({
      left: dir * width,
      behavior: "smooth",
    });

    setActive((prev) =>
      Math.min(
        Math.max(prev + dir, 0),
        Math.max(videos.length - 1, 0)
      )
    );
  };

  useEffect(() => {
    if (videos.length === 0) return;

    const timer = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;

      const card = el.firstElementChild as HTMLElement;
      const width = card.offsetWidth + 24;

      const isLast =
  el.scrollLeft >= el.scrollWidth - el.clientWidth - 5;

  if (isLast) {
    el.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  
    setActive(0);
    return;
  } else {
  el.scrollBy({
    left: width,
    behavior: "smooth",
  });

    setActive((prev) => {
  const next = prev + 1;
  return next >= videos.length ? videos.length - 1 : next;
});
}
    }, 3500);

    return () => clearInterval(timer);
  }, [videos]);

  return (
    <section className="border-b border-border px-6 py-10 md:px-10">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
  <div>
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
      YOUTUBE LIBRARY
    </p>

    <h2 className="mt-2 text-3xl font-bold text-white">
       Videos
    </h2>
  </div>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 transition-all duration-300 hover:scale-110 hover:border-red-500 hover:bg-red-500/20 hover:shadow-[0_0_25px_rgba(255,0,0,.45)]"
  >
    <Youtube
      size={28}
      className="text-red-500 transition group-hover:scale-110"
    />
  </a>
</div>
      <div className="flex w-full items-center justify-between">

      <button
  onClick={() => scrollByCard(-1)}
  className="mr-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-white transition hover:border-cyan-400 hover:text-cyan-400"
>
  <ChevronLeft size={22} />
</button>
<div className="flex-1 overflow-hidden">
<div
  ref={trackRef}
  className="no-scrollbar flex gap-3 md:gap-6 overflow-x-auto scroll-smooth"
>
        {videos.map((video) => (
  <a
    key={video.id}
    href={video.url}
    target="_blank"
    rel="noopener noreferrer"
    className="
    group
    relative
    w-[150px]
sm:w-[180px]
md:w-[300px]
lg:w-[360px]
    shrink-0
    overflow-hidden
    rounded-3xl
    "
    style={{
      background:
        "linear-gradient(#0d1117,#0d1117) padding-box,linear-gradient(90deg,#ff004d,#00bfff,#00ff99,#ff004d) border-box",
      border: "2px solid transparent",
      backgroundSize: "300% 300%",
      animation: "rgbBorder 5s linear infinite",
    }}
  >
    {/* Thumbnail */}
    <div
  className="
    relative
    h-[120px]
    sm:h-[150px]
    md:h-[180px]
    lg:h-[190px]
    overflow-hidden
    rounded-t-3xl
    bg-black
  "
>
<img
  src={getThumbnail(video.url)}
  alt={video.title}
  className="
    w-full
    h-full
    object-cover
    object-center
    transition-transform
    duration-500
    group-hover:scale-105
  "
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl transition-all duration-300 group-hover:scale-125 group-hover:bg-red-600">
          <Play
            size={28}
            fill="white"
            className="ml-1 text-white"
          />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="space-y-2 p-3 md:space-y-3 md:p-5">
    <h3 className="
line-clamp-2
text-xs
md:text-lg
font-bold
text-white
transition
group-hover:text-cyan-300
">
        {video.title}
      </h3>

      <p className="
text-[10px]
md:text-sm
text-gray-400
transition
group-hover:text-white
">
        Click to watch on YouTube →
      </p>
    </div>
  </a>
))}

</div>
</div>

<button
  onClick={() => scrollByCard(1)}
  className="ml-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-white transition hover:border-cyan-400 hover:text-cyan-400"
>
  <ChevronRight size={22} />
</button>

</div>

{/* Pagination */}
<div className="mt-8 flex justify-center gap-2">
  {Array.from({ length: videos.length }).map((_, i) => (
  <span
    key={i}
    className={`h-2 rounded-full transition-all duration-300 ${
      active === i
        ? "w-8 bg-cyan-400"
        : "w-2 bg-gray-600"
    }`}
  />
))}
</div>
</section>
);
}