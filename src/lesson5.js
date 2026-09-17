// lesson5.js — functions. Run with: node src/lesson5.js

// Define once. `id` and `status` are parameters: placeholders for values supplied later.
const buildSummary = (id, status) => {
  return `${id} finished with status ${status}`;
};
// Call many times. "TC-201" and 200 are arguments: the real values for this call.
console.log(buildSummary("TC-201", 200));
console.log(buildSummary("TC-202", 500));

// A function that answers a yes/no question. === is strict equality; Lesson 6 covers it fully.
const isSuccess = (statusCode) => {
  return statusCode === 200;
};
console.log(isSuccess(200));   // true
console.log(isSuccess(404));   // false

// Default parameter: used when the caller leaves it out
const buildUrl = (path, env = "stage") => {
  return `https://${env}.example.test${path}`;
};
console.log(buildUrl("/wallet"));            // uses the default
console.log(buildUrl("/wallet", "uat"));     // overrides it

// Parameters can be objects. The function reads fields with dot access, as in Lesson 4.
const describeCase = (tc) => {
  return `${tc.id} on ${tc.environment}: expected ${tc.expectedStatus}`;
};
console.log(describeCase({ id: "TC-201", environment: "stage", expectedStatus: 200 }));

// Short form: one expression, no braces, no return keyword. The value is returned automatically.
const normalise = (text) => text.trim().toLowerCase();
console.log(normalise("   PASS  "));         // pass

// A function with no return gives back undefined
const logStep = (step) => {
  console.log(`STEP: ${step}`);
};
const outcome = logStep("open login page");  // prints the step...
console.log(outcome);                        // ...but the function returned undefined