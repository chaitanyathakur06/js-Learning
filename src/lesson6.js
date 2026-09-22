// lesson6.js — control flow. Run with: node src/lesson6.js

const expectedStatus = 200;
const actualStatus = 200;

// if / else: exactly one block runs
if (actualStatus === expectedStatus) {
  console.log("PASS: status matches");
} else {
  console.log(`FAIL: expected ${expectedStatus}, got ${actualStatus}`);
}

// === compares value AND type. Text "200" is not the number 200.
console.log(200 === 200);      // true
console.log("200" === 200);    // false
console.log("200" == 200);     // true — == converts types first. Never use it.

// !== means "not strictly equal"
console.log(actualStatus !== 500);   // true

// else if: several branches, the first true one wins, the rest are skipped
const responseTime = 1800;
if (responseTime < 500) {
  console.log("fast");
} else if (responseTime < 2000) {
  console.log("acceptable");
} else {
  console.log("slow");
}

// && both must be true. || at least one. ! flips.
const isLoggedIn = true;
const hasBalance = false;
console.log(isLoggedIn && hasBalance);   // false
console.log(isLoggedIn || hasBalance);   // true
console.log(!hasBalance);                // true

if (isLoggedIn && !hasBalance) {
  console.log("Logged in with empty wallet: expect the bet to be rejected");
}

// A decision inside a function, returning different values from different branches
const gradeStatus = (status) => {
  if (status === 200) {
    return "PASS";
  }
  return "FAIL";   // only reached when the if above did not return
};
console.log(gradeStatus(200));
console.log(gradeStatus(500));

// Ternary: condition ? valueIfTrue : valueIfFalse. if/else for picking one of two values.
const label = actualStatus === expectedStatus ? "PASS" : "FAIL";
console.log(label);

// ?? gives a fallback only when the value is undefined or null
const config = { env: "stage" };
const currency = config.currency ?? "GBP";
console.log(currency);   // GBP, because config has no currency field