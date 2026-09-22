// lesson7.js — map, filter, find. Run with: node src/lesson7.js

// A regression run, as it might arrive from an export: results are messy on purpose
const suite = [
  { id: "TC-301", title: "Login valid user",     result: "PASS",   durationMs: 420 },
  { id: "TC-302", title: "Login wrong password", result: " fail ", durationMs: 380 },
  { id: "TC-303", title: "Place bet",            result: "Pass",   durationMs: 2600 },
  { id: "TC-304", title: "Withdraw",             result: "FAIL",   durationMs: 1900 },
  { id: "TC-305", title: "Logout",               result: "pass",   durationMs: 150 },
];

// map: one value out per item, collected into a new array of the same length
const ids = suite.map((tc) => tc.id);
console.log(ids);                                       // 5 ids

const durations = suite.map((tc) => tc.durationMs);
console.log(durations);                                 // 5 numbers

// The function can return anything. Here: a cleaned copy of the result field.
const cleanResults = suite.map((tc) => tc.result.trim().toLowerCase());
console.log(cleanResults);                              // [ 'pass', 'fail', 'pass', 'fail', 'pass' ]

// filter: your function returns true or false. Only the true items are kept.
const failed = suite.filter((tc) => tc.result.trim().toLowerCase() === "fail");
console.log(failed.length);                             // 2
console.log(failed);                                    // the two whole objects

const slow = suite.filter((tc) => tc.durationMs > 2000);
console.log(slow.map((tc) => tc.id));                   // [ 'TC-303' ] — filter, then map: chaining

// find: the FIRST item where your function returns true. One object, not an array.
const withdraw = suite.find((tc) => tc.id === "TC-304");
console.log(withdraw.title);                            // Withdraw

const missing = suite.find((tc) => tc.id === "TC-999");
console.log(missing);                                   // undefined — no match, no error

// Counting is filter + length. No loop, no counter variable.
const passedCount = suite.filter((tc) => tc.result.trim().toLowerCase() === "pass").length;
console.log(`${passedCount} of ${suite.length} passed`);

// The original array is unchanged by all of the above
console.log(suite.length);                              // still 5
