import type { CodeRunner, RunResult } from "../types";

declare global {
  interface Window {
    loadPyodide?: (config?: { indexURL: string }) => Promise<any>;
  }
}

const PYODIDE_VERSION = "v0.26.2";
const PYODIDE_BASE_URL = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/`;
const PYODIDE_SCRIPT_URL = `${PYODIDE_BASE_URL}pyodide.js`;

let pyodideInstance: any = null;
let pyodideLoadingPromise: Promise<any> | null = null;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Pyodide runtime."));
    document.body.appendChild(script);
  });
}

async function getPyodide(): Promise<any> {
  if (pyodideInstance) return pyodideInstance;
  if (pyodideLoadingPromise) return pyodideLoadingPromise;

  pyodideLoadingPromise = (async () => {
    await loadScript(PYODIDE_SCRIPT_URL);

    if (!window.loadPyodide) {
      throw new Error("Pyodide failed to initialize.");
    }

    const instance = await window.loadPyodide({
      indexURL: PYODIDE_BASE_URL,
    });

    pyodideInstance = instance;
    return instance;
  })();

  return pyodideLoadingPromise;
}

export const pythonRunner: CodeRunner = {
  async run(code: string): Promise<RunResult> {
    try {
      const pyodide = await getPyodide();

      let stdout = "";
      let stderr = "";

      pyodide.setStdout({
        batched: (msg: string) => {
          stdout += stdout ? `\n${msg}` : msg;
        },
      });

      pyodide.setStderr({
        batched: (msg: string) => {
          stderr += stderr ? `\n${msg}` : msg;
        },
      });

      await pyodide.runPythonAsync(code);

      return {
        stdout: stdout.trim(),
        stderr: stderr.trim(),
        ok: stderr.trim().length === 0,
      };
    } catch (err) {
      return {
        stdout: "",
        stderr: err instanceof Error ? err.message : "Python execution failed.",
        ok: false,
      };
    }
  },
};
