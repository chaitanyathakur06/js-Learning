//1. isPassed(result) returns true when the result, after trimming and lowercasing, is exactly "pass".
//Hint: the body is one line: return followed by the chained cleanup, then === "pass". Model it on isSuccess in the lesson file, which also returns a comparison. Call it three times, with "PASS", " pass " and "FAIL", printing each.
//
//2. summary(tc) takes one object with id, title and result and returns them as one string in the form id - title: result.
//Hint: describeCase in the lesson does exactly this shape. The object arrives as tc, and you read fields with tc.id and so on inside a template literal. Call it with two different objects, printing each.
//
//3. buildEndpoint(accountId, env = "stage") returns https://${env}.example.test/getRounds?accountId=${accountId}.
//Hint: this is buildUrl from the lesson with different names. Call it once with only an account ID, so the default env is used, and once with a second argument "uat". Print both and predict which host each URL shows.
//
//4. A function with no return. Give it any name, have it print a message, then store what a call returns in a variable and print that variable.
//Hint: logStep and outcome in the lesson are the template. Predict what the variable holds before you run.
//
//5. An array of three objects, each with id, title and result, looped with for...of, printing summary(tc) for each.
//Hint: the loop is the same as your Lesson 4 loop over publish. The only change is that instead of building the string inside the loop, you call the function you wrote in item 2. That reuse is the entire point of the lesson.

const isPassed = (result) => result.trim().toLowerCase() === "pass";
// prediction - true
console.log(isPassed("    PASS    "));
// prediction: true
console.log(isPassed("   pass   "));
// prediction: false
console.log(isPassed("    FAIL    "));

// ITEM 2: one object in, one string out.
 // tc is the parameter. It will hold whatever object the caller passes.
 const summary = (tc) => {
   return `${tc.id} - ${tc.title}: ${tc.result}`;
 };
 console.log(summary({ id: "TC-01", title: "Login with valid user", result: "PASS" }));
 console.log(summary({ id: "TC-02", title: "Login with wrong password", result: "FAIL" }));

 // ITEM 3: default parameter. env is "stage" unless the caller supplies a second argument.
 const buildEndpoint = (accountId, env = "stage") => {
   return `https://${env}.example.test/getRounds?accountId=${accountId}`;
 };
 console.log(buildEndpoint(88421));          // host will be stage.example.test
 console.log(buildEndpoint(88421, "uat"));   // host will be uat.example.test

 // ITEM 4: a function with no return. It prints, but hands nothing back.
 const logStep = (step) => {
   console.log(`STEP: ${step}`);
 };
 const outcome = logStep("open login page");  // prints STEP: open login page
 console.log(outcome);                        // undefined, because nothing was returned

 // ITEM 5: reuse. The loop does not build the string itself; it calls summary().
 const suite = [
   { id: "TC-01", title: "Login with valid user", result: "PASS" },
   { id: "TC-02", title: "Login with wrong password", result: "FAIL" },
   { id: "TC-03", title: "Logout", result: "PASS" },
 ];
 for (const tc of suite) {
   console.log(summary(tc));
 }