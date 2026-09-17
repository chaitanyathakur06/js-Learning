//Build one object describing a test case you run by hand, with exactly five fields: two strings, one number, one boolean, and an environment. Print the whole object.
//Print a one-line summary using three of its fields with dot access.
//Change the boolean field to its opposite, then print just that field.
//Add a new field called actualStatus with a number, then print the number of fields the object now has. Hint: Object.keys gives you an array, and arrays have a property that counts.
//Build an array of three small objects, each with id and result where result is "PASS" or "FAIL", loop over it with for...of, and print id: result for each.

const Testcase ={
id : "TC01",
name : "Chaitanya",
number : 900000000,
isActive : true,
environment : "www.google.com"
}
// prediction - all testcase details
console.log (Testcase);
// prediction - One Line summary of 3 fields that is id, name and environment
console.log ("One Line Summary:" + `${Testcase.id} executed by ${Testcase.name} on ${Testcase.environment}`);
// prediction - changing isActive true to false
Testcase.isActive = false;
console.log(Testcase.isActive);
//prediction - adding of a field to Testcase will increase the count from 5 to 6. The console will display new field
Testcase.actualStatus = 200;
console.log(Testcase)
// To print the whole objects length
console.log(Object.keys(Testcase).length);

const publish = [
  { id: "TC-01", result: "PASS" },
  { id: "TC-02", result: "FAIL" },
  { id: "TC-03", result: "PASS" },
];
console.log(publish[1].id);
for (const tc of publish) {
  console.log(`${tc.id} → result=${tc.result}`);
}