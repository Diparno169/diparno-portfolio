"use client";

import dynamic from "next/dynamic";
import type * as Monaco from "monaco-editor";

import type { Language } from "./types";
import { monacoLanguageId } from "./languageConfig";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-[11px] text-gray/50">
      Loading editor…
    </div>
  ),
});

interface CodeEditorProps {
  language: Language;
  value: string;
  onChange: (value: string) => void;
}
function handleEditorWillMount(monaco: typeof Monaco) {
  monaco.editor.defineTheme("portfolio-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#070B14",
      "editor.foreground": "#E5E7EB",
      "editorLineNumber.foreground": "#5C6B86",
      "editorCursor.foreground": "#3B82F6",
      "editor.selectionBackground": "#1E3A8A55",
      "editor.lineHighlightBackground": "#070B14",
      "editorIndentGuide.background": "#1B2435",
      "editorIndentGuide.activeBackground": "#2D3A55",
    },
  });
}

export default function CodeEditor({
  language,
  value,
  onChange,
}: CodeEditorProps) {
  return (
    <MonacoEditor
      language={monacoLanguageId[language]}
      value={value}
      onChange={(v) => onChange(v ?? "")}
      beforeMount={handleEditorWillMount}
theme="portfolio-dark"
      options={{
        fontSize: 13,
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        lineNumbers: (n: number) => String(n + 12),
        padding: { top: 8, bottom: 8 },
        renderLineHighlight: "none",
        overviewRulerLanes: 0,
        automaticLayout: true,
        tabSize: 4,
        wordWrap: "off",
        cursorBlinking: "smooth",
cursorSmoothCaretAnimation: "on",
        scrollbar: {
          verticalScrollbarSize: 6,
          horizontalScrollbarSize: 6,
        },
      }}
    />
  );
}
