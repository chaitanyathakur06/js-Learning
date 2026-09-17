// lesson2.js — strings. Run with: node src/lesson2.js

// A raw log line exactly as a server might write it, spaces and all
const logLine = "  2026-09-16 13:42:07 INFO getRounds accountId=88421 status=200 rounds=12  ";

// .trim() removes spaces, tabs and newlines from BOTH ends. Page and log values often carry them.
const clean = logLine.trim();
console.log(`[${clean}]`);                 // brackets reveal where the text really starts and ends

// .length = number of characters (a property, so no brackets after it)
console.log(clean.length);

// .includes() → true or false. Case-sensitive.
console.log(clean.includes("status=200"));  // true
console.log(clean.includes("error"));       // false — the line has INFO, not error

// .split() cuts a string into pieces at every separator and returns a list
const parts = clean.split(" ");
console.log(parts);                         // a list. Lists are Lesson 3; for now just look at it
console.log(parts[3]);                      // pieces are numbered from 0, so this is the 4th: getRounds

// .replace() swaps the FIRST match for new text and returns a new string
const masked = clean.replace("88421", "*****");
console.log(masked);
console.log(clean);                         // unchanged — proves strings never mutate

// .toLowerCase() makes a comparison case-proof
console.log("Passed".toLowerCase() === "passed");   // true

// .startsWith() / .endsWith()
console.log(clean.startsWith("2026"));      // true