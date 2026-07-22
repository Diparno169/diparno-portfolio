"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useShutdown } from "@/context/ShutdownContext";

const shutdownLines = [
    "Broadcast message from root@jeltraxd (tty1)...",
    "The system is going down for system halt NOW!",
    "Init: Switching to runlevel: 0",
    "Sending SIGTERM to remaining processes... Done.",
    "Sending SIGKILL to remaining processes... Done.",
    "Saving system time to hardware clock... Done.",
    "Turning off swap... Done.",
    "Unmounting local filesystems... Done.",
    "Powering down.",
    "System halted.",
  ];

export default function ShutdownScreen() {
    const { open } = useShutdown();

  const [displayed, setDisplayed] = useState<string[]>([]);
const [lineIndex, setLineIndex] = useState(0);
const [boxHeight, setBoxHeight] = useState(160);
  
      useEffect(() => {
        if (!open) {
          setDisplayed([]);
          setLineIndex(0);
          setBoxHeight(160);
          return;
        }
      
        if (lineIndex >= shutdownLines.length) {
            const finish = setTimeout(() => {
              try {
                window.close();
              } catch (err) {
                console.error(err);
              }
          
              setTimeout(() => {
                try {
                  window.open("about:blank", "_self");
                  window.close();
                } catch (err) {
                  console.error(err);
                }
              }, 1000);
          
            }, 2000);
          
            return () => clearTimeout(finish);
          }
      
        const timer = setTimeout(() => {
          setDisplayed((prev) => [...prev, shutdownLines[lineIndex]]);
          setLineIndex((prev) => prev + 1);
          setBoxHeight((prev) => prev + 28);
        }, 150);
      
        return () => clearTimeout(timer);
      }, [open, lineIndex]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black px-6"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                height: boxHeight,
              }}
            transition={{ duration: 0.35 }}
            className="
              w-full
              max-w-[530px]
              rounded-lg
              border
              border-red-500/40
              bg-[#050505]
              shadow-[0_0_25px_rgba(255,60,60,.08)]
            "
          >
            {/* Header */}
            <div className="px-6 pt-5 pb-4">
              <h2 className="font-mono text-[14px] font-bold tracking-[0.10em] text-red-400">
                SYSTEM SHUTDOWN SEQUENCE
              </h2>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t border-red-500/20" />

            {/* Terminal Body */}
<div className="px-6 py-5 font-mono text-[12px] leading-8">

{displayed.map((line, index) => (
  <p
    key={index}
    className={
      line === "System halted."
        ? "mt-5 font-semibold text-emerald-400"
        : index === 0
        ? "font-semibold text-red-300"
        : "text-neutral-100"
    }
  >
    {line}
  </p>
))}



{lineIndex >= shutdownLines.length && (
  <p className="mt-10 text-center text-[10px] text-neutral-500">
    Attempting to close browser tab...
  </p>
)}

</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}