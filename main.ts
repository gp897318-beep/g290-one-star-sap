import { mkdirSync, writeFileSync } from "node:fs";

// One star, written in sap: a houseplant's one-star review of its
// owner. The twist is the plastic cactus next door getting watered
// more than the living plant — a clear complaint, a clear reason
// for one star, in the plant's own voice (water, thirst, sitting
// next to a lie). No drama-queen wilting, no "ignored" stock lines.
const review =
  "One star. My owner waters the cactus more than me, and the cactus is plastic. I am sitting next to a lie and dying of thirst.";

// The gate: UTF-8 text, one line, 1-280 characters (under 280).
// Check the limit here so an invalid line can never ship.
const MAX_CHARS = 279;

function oneLine(text: string): string {
  const line = text.replace(/\s+/g, " ").trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`review must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("review must be a single line");
  }
  return line;
}

const line = oneLine(review);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
