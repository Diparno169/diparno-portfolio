"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function IntroLoader() {
  const text = "System status: Initializing JELTRAXD...";
  const pathname = usePathname();
  const [displayed, setDisplayed] = useState("");
  const [hide, setHide] = useState(false);


  useEffect(() => {

  
    let i = 0;
  
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
  
        setTimeout(() => {
          setHide(true);
        }, 1200);
      }
    }, 90);
  
    return () => clearInterval(typing);
  }, []);
  
  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          exit={{
            y: "-100%",
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="flex items-center font-mono text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-wide text-[#c9d1d9]">

{/* Animated Dot */}
<motion.span
  animate={{
    opacity: [0.3, 1, 0.3],
    scale: [0.9, 1.2, 0.9],
  }}
  transition={{
    duration: 1.2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="mr-2 h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-gray-400"
/>

{displayed}

<motion.span
  animate={{
    opacity: [1, 0, 1],
  }}
  transition={{
    duration: 0.8,
    repeat: Infinity,
  }}
  className="ml-1 text-xs sm:text-sm md:text-base lg:text-[18px]"
>
  ▌
</motion.span>

</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}