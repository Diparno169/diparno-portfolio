import type { CodeRunner, RunResult } from "../types";

type NativeLanguage = "c" | "cpp";

const JUDGE0_BASE = "https://ce.judge0.com";

// C (GCC 9.2.0) and C++ (GCC 9.2.0) on Judge0 CE
const JUDGE0_LANGUAGE_ID: Record<NativeLanguage, number> = {
  c: 50,
  cpp: 54,
};

const POLL_INTERVAL_MS = 1000;
const MAX_POLLS = 15;

// In-queue / processing — anything else means the submission finished
const UNFINISHED_STATUS_IDS = new Set([1, 2]);
const COMPILATION_ERROR_STATUS_ID = 6;

interface Judge0Status {
  id: number;
  description: string;
}

interface Judge0Submission {
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  message: string | null;
  status: Judge0Status;
}

function toBase64(input: string): string {
  return btoa(unescape(encodeURIComponent(input)));
}

function fromBase64(input: string | null): string {
  if (!input) return "";
  try {
    return decodeURIComponent(escape(atob(input)));
  } catch {
    return input;
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface NativeEngine {
  compileAndRun(code: string, language: NativeLanguage): Promise<RunResult>;
}

class Judge0NativeEngine implements NativeEngine {
  async compileAndRun(
    code: string,
    language: NativeLanguage
  ): Promise<RunResult> {
    try {
      const token = await this.createSubmission(code, language);
      const submission = await this.pollUntilFinished(token);
      return this.toRunResult(submission);
    } catch (err) {
      return {
        stdout: "",
        stderr:
          err instanceof Error
          ? `Failed to reach execution service: ${err.message}`
            : "Failed to reach execution service.",
        ok: false,
      };
    }
  }

  private async createSubmission(
    code: string,
    language: NativeLanguage
  ): Promise<string> {
    const response = await fetch(
      `${JUDGE0_BASE}/submissions/?base64_encoded=true&wait=false`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language_id: JUDGE0_LANGUAGE_ID[language],
          source_code: toBase64(code),
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Execution service returned ${response.status}`);
    }

    const data = await response.json();

    if (!data.token) {
      throw new Error(data.error || "no submission token returned");
    }

    return data.token as string;
  }

  private async pollUntilFinished(token: string): Promise<Judge0Submission> {
    for (let attempt = 0; attempt < MAX_POLLS; attempt++) {
      const response = await fetch(
        `${JUDGE0_BASE}/submissions/${token}?base64_encoded=true&fields=stdout,stderr,compile_output,message,status`,
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error(`Execution service returned ${response.status}`);
      }

      const submission: Judge0Submission = await response.json();

      if (!UNFINISHED_STATUS_IDS.has(submission.status.id)) {
        return submission;
      }

      await delay(POLL_INTERVAL_MS);
    }

    throw new Error("timed out waiting for execution result");
  }

  private toRunResult(submission: Judge0Submission): RunResult {
    const stdout = fromBase64(submission.stdout);
    const stderr = fromBase64(submission.stderr);
    const compileOutput = fromBase64(submission.compile_output);

    if (submission.status.id === COMPILATION_ERROR_STATUS_ID) {
      return {
        stdout: "",
        stderr: compileOutput || "Compilation failed.",
        ok: false,
      };
    }

    const ok = submission.status.id === 3; // Accepted

    return {
      stdout: stdout.trim(),
      stderr: ok
        ? stderr.trim()
        : (stderr || submission.message || submission.status.description).trim(),
      ok,
    };
  }
}

const engine: NativeEngine = new Judge0NativeEngine();

export function createNativeRunner(language: NativeLanguage): CodeRunner {
  return {
    run(code: string) {
      return engine.compileAndRun(code, language);
    },
  };
}