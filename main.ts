// Sorry, I Heard That Wrong — a smart speaker's apology after mishearing its owner.
// The entry is one line, at most 140 characters, written to /output/entry.txt.
// The joke: the device misheard "call Mom" as "cancel Mom" and then, with
// cheerful helpfulness, escalated the mistake — notified her, then blocked her.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry, I heard 'call Mom' as 'cancel Mom.' She has been notified. I have also blocked her, for your convenience.";

// Gate: UTF-8 text of 1 to 140 characters, not only white space, single line.
const text = ENTRY.trim();
if (text.length < 1 || text.length > 140 || !/\S/.test(text) || text.includes("\n")) {
  throw new Error("entry fails the 1-140 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
