import type { Language } from "./types";

export const languageTemplates: Record<Language, string> = {
  python: `# Write Python code here

print("Hello JELTRAX_D")`,

  c: `#include <stdio.h>

int main() {

    printf("Hello JELTRAX_D");

    return 0;
}`,

  cpp: `#include <iostream>
using namespace std;

int main() {

    cout << "Hello JELTRAX_D";

    return 0;
}`,
};

export const monacoLanguageId: Record<Language, string> = {
  python: "python",
  c: "c",
  cpp: "cpp",
};

export const languageMeta: Record<
  Language,
  { label: string; color: string }
> = {
  python: { label: "Python", color: "#3776AB" },
  c: { label: "C", color: "#A8B9CC" },
  cpp: { label: "C++", color: "#00599C" },
};
