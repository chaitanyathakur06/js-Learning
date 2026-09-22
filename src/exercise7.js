//map: an array of all six ids. Print it.
//map: an array of the results cleaned with trim and lowercase. Print it. Predict all six values.
//filter then map: the ids of the failed tests only. Clean the result inside the filter's function before comparing. Print the array and predict its length.
//find: the test with id "TC-404", then print its title. Then find with id "TC-999"
// and print what comes back.
//Counts with filter().length: how many passed, and how many took longer than 2000 milliseconds.
// Print a sentence for each, such as 3 of 6 passed.

const run = [
  { id: "TC-401", title: "Deposit via card",      result: "PASS",    durationMs: 900 },
  { id: "TC-402", title: "Deposit declined card", result: "  Fail",  durationMs: 1200 },
  { id: "TC-403", title: "Bet with zero balance", result: "FAIL ",   durationMs: 300 },
  { id: "TC-404", title: "Bet max stake",         result: "pass",    durationMs: 3100 },
  { id: "TC-405", title: "Cash out mid-game",     result: " PASS ",  durationMs: 2200 },
  { id: "TC-406", title: "Session timeout",       result: "Blocked", durationMs: 50 },
];
//prediction - [ 'TC-401', 'TC-402', 'TC-403', 'TC-404', 'TC-405', 'TC-406' ]
const ids = run.map((tc) => tc.id);
console.log(ids);

//prediction - [ 'pass', 'fail', 'fail', 'pass', 'pass', 'blocked' ]
const results=run.map((tc)=> tc.result.trim().toLowerCase());
console.log(results);

// prediction: 2
const failedIds = run.filter((tc) => tc.result.trim().toLowerCase() === "fail").map((tc) => tc.id);
console.log(failedIds);

//prediction - [ 'Bet max stake' ]
const maxStake = run.find((tc) => tc.id === "TC-404");
console.log(maxStake.title);

//prediction - undefined
const newid = run.find((tc) => tc.id === "TC-999");
console.log(newid);

//prediction - 3 out of 6 passed
const passed = run.filter((tc) => tc.result.trim().toLowerCase() === "pass").length;
console.log(`${passed} out of ${run.length} passed`);

//prediction -2 of 6 took longer than 2000 ms
const slowCount = run.filter((tc) => tc.durationMs>2000).length;
console.log(`${slowCount} of ${run.length} took longer than 2000 ms`);