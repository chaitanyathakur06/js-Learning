// lesson4.js — objects. Run with: node src/lesson4.js

// One test case as a single object: named fields instead of parallel lists
const testCase = {
  id: "TC-201",
  title: "Place a bet with sufficient balance",
  environment: "S62",
  expectedStatus: 200,
  passed: true,
};

console.log(testCase);                      // the whole object
console.log(testCase.id);                   // dot access: one field by name
console.log(testCase.expectedStatus);
console.log(`${testCase.id} on ${testCase.environment}: passed=${testCase.passed}`);

// Change a field. Allowed on a const object: same object, new contents.
testCase.passed = false;
console.log(testCase.passed);

// Add a field that did not exist yet
testCase.actualStatus = 500;
console.log(testCase);

// A field that does not exist → undefined, not an error. Same rule as arrays.
console.log(testCase.owner);

// Object.keys() gives the field names as an array
console.log(Object.keys(testCase));

// An array of objects: the shape of every test-data file and API response you will meet
const suite = [
  { id: "TC-201", passed: true },
  { id: "TC-202", passed: false },
  { id: "TC-203", passed: true },
];
console.log(suite[1].id);                   // position 1 in the list, then the id field
for (const tc of suite) {
  console.log(`${tc.id} → passed=${tc.passed}`);
}