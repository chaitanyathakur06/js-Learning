// lesson3.js — arrays. Run with: node src/lesson3.js

// A list of test case IDs from a regression suite
const testIds = ["TC-101", "TC-102", "TC-103"];

console.log(testIds);                          // the whole list
console.log(testIds.length);                   // 3 — how many items
console.log(testIds[0]);                       // first item, position 0
console.log(testIds[testIds.length - 1]);      // last item, whatever the length is

// .push() adds to the END. Allowed on a const array: the list is the same list, just longer.
testIds.push("TC-104");
console.log(testIds.length);                   // 4

// .includes() works on arrays too: is this exact item in the list?
console.log(testIds.includes("TC-102"));       // true
console.log(testIds.includes("TC-999"));       // false

// for...of runs the block once per item, in order. `id` is the current item each time.
for (const id of testIds) {
  console.log(`Running ${id}`);
}

// .join() is the reverse of split: glue the items into one string with a separator
console.log(testIds.join(", "));               // TC-101, TC-102, TC-103, TC-104

// Position that does not exist → undefined, not an error. Watch for this in test output.
console.log(testIds[10]);                      // undefined