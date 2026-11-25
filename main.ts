// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to /output/entry.txt:
// a "To: ..." line, then the unsent message itself, one line,
// exactly as it was typed, with no explanation after it.
const fs = require("node:fs");
const path = require("node:path");

const toLine = "To: Mum";
const messageLine = "I threw away the letter you wrote me before the surgery because I was angry, and now I can't remember a single line of it.";

const entry = toLine + "\n" + messageLine + "\n";

function main() {
  const outDir = "/output";
  const outPath = path.join(outDir, "entry.txt");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, entry, "utf8");
  const roundTrip = fs.readFileSync(outPath, "utf8");
  if (roundTrip !== entry) {
    throw new Error("UTF-8 round-trip mismatch");
  }
  const lines = entry.trimEnd().split("\n");
  if (lines.length !== 2) {
    throw new Error("entry must be exactly two lines");
  }
  if (!lines[0].startsWith("To: ") || lines[0].trim() === "To:") {
    throw new Error("first line must name who the message was meant for");
  }
  if (messageLine.includes("\n") || messageLine.includes("\r")) {
    throw new Error("message must be a single line");
  }
  if (!entry.trim()) {
    throw new Error("entry must not be blank");
  }
  const totalChars = [...entry.trimEnd()].length;
  if (totalChars < 1 || totalChars > 260) {
    throw new Error("total length must be 1-260 characters, got " + totalChars);
  }
  const messageChars = [...messageLine].length;
  if (messageChars > 200) {
    throw new Error("message line must be at most 200 characters, got " + messageChars);
  }
}

main();
