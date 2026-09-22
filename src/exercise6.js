const checkStatus = (expected, actual) => {
  if (expected === actual) {
    return "PASS";
  }
  return `FAIL: expected ${expected}, got ${actual}`;
};

// prediction: Pass
console.log(checkStatus(200, 200));
// prediction: Fail
console.log(checkStatus(200, "200"));

const classifyTime = (ms) => {
  if (ms < 500) {
    return "fast";
  } else if (ms < 2000) {
    return "acceptable";
  }
  return "slow";
};

// prediction: fast
console.log(classifyTime(120));
// prediction: acceptable
console.log(classifyTime(1999));
// prediction: slow
console.log(classifyTime(2000));

const canPlaceBet = (isLoggedIn, balance, stake) => {
  return isLoggedIn && balance >= stake;
};
// prediction: true
console.log(canPlaceBet(true, 100, 50));
// prediction: false
console.log(canPlaceBet(true, 20, 50));
// prediction: false
console.log(canPlaceBet(false, 100, 50));

const result = "FAIL";
// prediction: X
const marker = result === "PASS" ? "OK" : "X";
console.log(marker);

const settings = { env: "uat" };
// prediction: uat
console.log(settings.env ?? "stage");
// prediction: 30000
console.log(settings.timeout ?? 30000);