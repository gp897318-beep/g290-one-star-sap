// One Star, Written in Sap — make.fun entry.
// Writes a single one-line 1-star review (under 280 characters) from a
// houseplant about its human owner to /output/entry.txt, after checking it
// against the competition gate.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review, held as its three sentences: the star, the grievance, the thirst.
const sentences: string[] = [
  "One star.",
  "My owner waters the cactus more than me, and the cactus is plastic.",
  "I am sitting next to a lie and dying of thirst.",
];

const review: string = sentences.join(" ");

// Gate from the competition rules: 1-279 characters, one line, not blank,
// and no invisible control characters sneaking into the text.
const MAX_CHARS = 279;
function checkGate(text: string, expectedWords: number): { chars: number; words: number } {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`gate: review is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: review must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate: review must be a single line");
  }
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    throw new Error("gate: review must not contain control characters");
  }
  const words = text.trim().split(/\s+/).length;
  if (words !== expectedWords) {
    throw new Error(`gate: expected ${expectedWords} words, got ${words}`);
  }
  return { chars, words };
}

const { chars, words } = checkGate(review, 26);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, review, "utf8");
// Read back what was written and confirm it is exactly the validated review.
if (readFileSync(outPath, "utf8") !== review) {
  throw new Error("write check: /output/entry.txt does not match the validated review");
}
console.log(`wrote ${outPath} (${chars} chars, ${words} words)`);
