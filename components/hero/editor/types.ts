export type Language = "python" | "c" | "cpp";

export interface RunResult {
  stdout: string;
  stderr: string;
  ok: boolean;
}

export interface CodeRunner {
  run(code: string): Promise<RunResult>;
}
