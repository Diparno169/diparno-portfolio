"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiPython, SiC, SiCplusplus } from "react-icons/si";

import type { Language, RunResult } from "./editor/types";
import { languageTemplates, languageMeta } from "./editor/languageConfig";
import CodeEditor from "./editor/CodeEditor";
import OutputPanel from "./editor/OutputPanel";
import RunButton from "./editor/RunButton";
import { pythonRunner } from "./editor/runners/pythonRunner";
import { createNativeRunner } from "./editor/runners/nativeRunner";

const staticLines = [
  { n: "01", text: [{ t: "const ", c: "text-blue" }, { t: "diparno", c: "text-white" }, { t: " = {", c: "text-gray" }] },
  { n: "02", text: [{ t: "  name: ", c: "text-gray" }, { t: "'Diparno Chatterjee'", c: "text-green" }, { t: ",", c: "text-gray" }] },
  { n: "03", text: [{ t: "  role: ", c: "text-gray" }, { t: "'Full Stack Developer'", c: "text-green" }, { t: ",", c: "text-gray" }] },
  { n: "04", text: [{ t: "  passion: ", c: "text-gray" }, { t: "'Building Future'", c: "text-green" }, { t: ",", c: "text-gray" }] },
  { n: "05", text: [{ t: "  skills: ", c: "text-gray" }, { t: "['React', 'Next.js', 'Node.js']", c: "text-green" }, { t: ",", c: "text-gray" }] },
  { n: "06", text: [{ t: "  status: ", c: "text-gray" }, { t: "'Always Learning'", c: "text-green" }] },
  { n: "07", text: [{ t: "};", c: "text-gray" }] },
  { n: "08", text: [{ t: "", c: "" }] },
  { n: "09", text: [{ t: "function ", c: "text-blue" }, { t: "createImpact", c: "text-white" }, { t: "() {", c: "text-gray" }] },
  { n: "10", text: [{ t: "  return ", c: "text-blue" }, { t: "'Code. Innovate. Elevate.'", c: "text-green" }, { t: ";", c: "text-gray" }] },
  { n: "11", text: [{ t: "}", c: "text-gray" }] },
];

const STATIC_COLLAPSED_HEIGHT = 108; // px — leaves ~4 lines visible, scrollable
const EDITOR_SECTION_HEIGHT = 220; // px — fixed so the terminal never resizes further

export default function TypingCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [language, setLanguage] = useState<Language | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [editorCode, setEditorCode] = useState("");
  const [result, setResult] = useState<RunResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const staticScrollRef = useRef<HTMLDivElement>(null);

  // Original typing animation for the static, read-only lines 01–11
  useEffect(() => {
    if (showEditor) return;
  
    if (visibleLines >= staticLines.length) return;
  
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, 160);
  
    return () => clearTimeout(timer);
  }, [visibleLines, showEditor]);

  // Load the template + open the editor when a language is picked
  useEffect(() => {
    if (!language) return;

    setShowEditor(true);
    setResult(null);
    setEditorCode(languageTemplates[language]);
  }, [language]);

  // Smoothly scroll the static block upward once the editor appears
  useEffect(() => {
    if (!showEditor) return;

    const el = staticScrollRef.current;
    if (!el) return;

    const frame = requestAnimationFrame(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    });

    return () => cancelAnimationFrame(frame);
  }, [showEditor]);

  function selectLanguage(lang: Language) {
    setLanguage(lang);
  }

  async function handleRun() {
    if (!language) return;

    setIsRunning(true);
    setResult(null);

    const runner = language === "python" ? pythonRunner : createNativeRunner(language);
    const runResult = await runner.run(editorCode);

    setResult(runResult);
    setIsRunning(false);
  }

  function handleBack() {
    setShowEditor(false);
    setLanguage(null);
    setResult(null);
    setEditorCode("");
    setIsRunning(false);
  
    const el = staticScrollRef.current;
  
    if (el) {
      el.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  
    setVisibleLines(0);
  }

  return (
    <div className="mt-6 max-w-xl overflow-hidden rounded-xl border border-border bg-card/60">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">

          <div className="flex gap-2">
  <motion.div
    animate={{ opacity: [1, 0.5, 1], scale: [1, 1.08, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
    className="h-3 w-3 rounded-full bg-red-500"
  />

  <motion.div
    animate={{ opacity: [1, 0.5, 1], scale: [1, 1.08, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
    className="h-3 w-3 rounded-full bg-yellow-400"
  />

  <motion.div
    animate={{ opacity: [1, 0.5, 1], scale: [1, 1.08, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
    className="h-3 w-3 rounded-full bg-green-500"
  />
</div>

          <span className="text-xs font-medium text-white">
            portfolio.tsx
          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-[11px] text-gray/60">
            UTF-8
          </span>

          <button
            onClick={() => selectLanguage("python")}
            className={`rounded-md p-1.5 transition-all duration-300 hover:scale-110 ${
              language === "python"
                ? "bg-[#3776AB]/20 ring-1 ring-[#3776AB]"
                : "hover:bg-white/5"
            }`}
          >
            <SiPython className="h-4 w-4 text-[#3776AB]" />
          </button>

          <button
            onClick={() => selectLanguage("c")}
            className={`rounded-md p-1.5 transition-all duration-300 hover:scale-110 ${
              language === "c"
                ? "bg-[#00599C]/20 ring-1 ring-[#00599C]"
                : "hover:bg-white/5"
            }`}
          >
            <SiC className="h-4 w-4 text-[#A8B9CC]" />
          </button>

          <button
            onClick={() => selectLanguage("cpp")}
            className={`rounded-md p-1.5 transition-all duration-300 hover:scale-110 ${
              language === "cpp"
                ? "bg-[#00599C]/20 ring-1 ring-[#00599C]"
                : "hover:bg-white/5"
            }`}
          >
            <SiCplusplus className="h-4 w-4 text-[#00599C]" />
          </button>

        </div>
      </div>

      {/* Static typing terminal — lines 01–11, read-only forever */}
      <motion.div
        ref={staticScrollRef}
        animate={{ height: showEditor ? STATIC_COLLAPSED_HEIGHT : "auto" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-y-auto p-4 font-mono text-[13px] leading-6"
      >
        {staticLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="w-5 shrink-0 select-none text-right text-gray/50">
              {line.n}
            </span>

            <span>
              {line.text.map((seg, j) => (
                <span key={j} className={seg.c}>
                  {seg.t}
                </span>
              ))}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Live editor — mounts below the collapsed static block, never moves the page */}
      <AnimatePresence
  initial={false}
  onExitComplete={() => {
    setVisibleLines(1);
  }}
>
        {showEditor && language && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-2">
  <span
    className="text-[11px] font-semibold tracking-wide"
    style={{ color: languageMeta[language].color }}
  >
    {languageMeta[language].label}
  </span>

  <div className="flex items-center gap-2">

    

    <RunButton
      onRun={handleRun}
      isRunning={isRunning}
    />

  </div>
</div>

            <div style={{ height: EDITOR_SECTION_HEIGHT }}>
              <CodeEditor
                language={language}
                value={editorCode}
                onChange={setEditorCode}
              />
            </div>

            <div className="relative">
  <button
    onClick={handleBack}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-md border border-cyan-500/40 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white"
  >
    Return
  </button>

  <OutputPanel
    result={result}
    isRunning={isRunning}
  />
</div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
