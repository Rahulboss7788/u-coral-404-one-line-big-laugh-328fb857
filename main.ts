// One Line, Big Laugh — make.fun bounty u-coral-404-one-line-big-laugh-328fb857
// Writes a single hilarious line (200 characters or fewer) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I told my friends I'm a minimalist — it's easier than admitting I just can't afford furniture.";

const OUT = "/output/entry.txt";

// Gate: the sealed scorer requires 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `Line fails the gate: ${LINE.length} characters (must be 1-200, non-whitespace).`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");

// Read-back verification: the file must hold exactly the line, inside the
// 1-200 character gate, and not only whitespace — otherwise fail loudly.
const written = readFileSync(OUT, "utf8");
if (written !== LINE) {
  throw new Error("Read-back mismatch: /output/entry.txt does not hold exactly the line.");
}
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  throw new Error(
    `Read-back gate failure: ${written.length} characters (must be 1-200, non-whitespace).`,
  );
}

console.log(`Wrote ${LINE.length} characters to ${OUT}`);
