const toast = "   Bet placed successfully! Round ID: R-2026-000123   ";

const clean=toast.trim();
console.log(`[${clean}]`);

const word=toast.includes("successfully");
console.log(`[${word}]`);
// prediction false
// console.log("successfully".toUpperCase() === "SUCCESSFULLY"); incorrect as per CLAUDE, updating in next line
console.log(toast.includes("SUCCESSFULLY"));
// prediction - Removing ":" and separating the line,
const clean1=clean.split(": ");
console.log(clean1);
// prediction - printing only the round ID value
console.log(clean1[1]);

const newword= toast.replace("successfully", "OK");
console.log(`[${newword}]`);

console.log(clean.length);
