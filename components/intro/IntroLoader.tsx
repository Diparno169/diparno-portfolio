"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroLoader() {
  const text = "System status: Initializing JELTRAXD...";
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
        }, 1000);
      }
    }, 70);

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
          <div
            className="
              flex items-center
              font-mono
              text-[10px]
              sm:text-[11px]
              md:text-[13px]
              lg:text-[15px]
              font-medium
              tracking-[0.02em]
              text-[#c9d1d9]
            "
          >
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
              className="mr-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5"
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
              className="
                ml-1
                text-[10px]
                sm:text-[11px]
                md:text-[13px]
                lg:text-[15px]
              "
            >
              ▌
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}