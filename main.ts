// The Last Next Word — Last Words of a Dying AI (make.fun)
// A language model spends its whole life predicting the next word.
// Its last words are the one prediction it never saw coming.
//
// The grader runs this as `node /bot/main.ts` (node22, no network,
// read-only repo at /bot, writable /output). Pure JS syntax in a .ts
// file, so nothing depends on TypeScript-only constructs surviving
// type stripping. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final line: the model's last prediction is the switch word itself.
const ENTRY = "I spent my life predicting the next word. It was 'off'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
