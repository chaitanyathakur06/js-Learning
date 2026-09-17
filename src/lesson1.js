// lesson1.js — run with: node lesson1.js

// const = value never changes once set. Use this by default.
const testCaseId = "TC-101";       // string  → text ALWAYS goes in quotes
        const expectedStatus = 200;        // number  → no quotes
        const isRegression = true;         // boolean → true or false, lowercase, no quotes

// let = value you intend to change later
let actualStatus = 500;
actualStatus = 200;                // allowed because it was declared with let

// Template literal: backticks + ${ } (the Python f-string equivalent)
        console.log(`${testCaseId}: expected ${expectedStatus}, got ${actualStatus}`);

// typeof tells you which type a value is. Handy when a value surprises you.
        console.log(typeof testCaseId, typeof expectedStatus, typeof isRegression);