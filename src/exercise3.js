//const testIds = ["TC-201", "TC-202", "TC-203", "TC-204"];
//const results = ["PASS", "FAIL", "PASS", "PASS"];
//Then, with a prediction comment above each print:
//
//Print how many test cases there are.
//Print the last test ID without typing the number 3 anywhere.
//Add "TC-205" to testIds and "BLOCKED" to results, then print both lengths on one line.
//Loop over results with for...of and print each one in lowercase. Predict how many lines this produces.
//Print whether results contains "FAIL".

const testIds = ["TC-201", "TC-202", "TC-203", "TC-204"];
const results = ["PASS", "FAIL", "PASS", "PASS"];
// prediction is 4
console.log(testIds.length);

// prediction is TC-204
console.log(testIds[testIds.length - 1]);

// prediction is 5 and 5
testIds.push("TC-205");
results.push("BLOCKED");
console.log(testIds);
console.log(results);
console.log(testIds.length, results.length);

//prediction 1 line
for (const status of results)
{
console.log(status.toLowerCase());
}
 //prediction is true
console.log(results.includes("FAIL"));

for (let i=0;i<testIds.length;i++)
{
console.log(`[${testIds[i]}]: [${results[i]}]`);
}

results.push("BLOCKED");
results = ["PASS"];