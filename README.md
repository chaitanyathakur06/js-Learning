# JS Learning

Daily JavaScript exercises on the path to TypeScript and Playwright test automation.
One lesson file and one exercise file per topic, all runnable with Node.

## Run a lesson

    node src/lesson1.js

## Contents

| File | Topic |
|---|---|
| lesson1.js / exercise1.js | Variables, types, template literals |
| lesson2.js / exercise2.js | Strings and string methods |
| lesson3.js / exercise3.js | Arrays and loops |
| lesson4.js / exercise4.js | Objects and arrays of objects |
| lesson5.js / exercise5.js | Functions |
| lesson6.js / exercise6.js | Control flow and strict equality (upcoming) |
| lesson7.js / exercise7.js | Array methods: map, filter, find (upcoming) |

## Concepts and how they appear in a real Playwright test

Two words appear below that the lessons have not covered yet: `async` and `await`.
Read them as "this step takes time, wait for it". They are covered in Milestone 2.

### Lesson 1 — Variables, types, template literals

**const / let.** `const` for values that never change (test data, expected values), `let` only when reassignment is intended.

```javascript
// lesson
const expectedStatus = 200;
let actualStatus = 500;
actualStatus = 200;
```
```typescript
// playwright
const expectedTitle = "Dashboard";
let attempts = 0;
attempts = attempts + 1;
```

**The three core types.** Strings in quotes, numbers without, booleans as `true`/`false`. Quotes decide whether a value is text, however numeric it looks.

```typescript
const username = "tester01";      // string
const stake = 2.5;                // number
const isLoggedIn = true;          // boolean
const accountId = "0088421";      // string on purpose: leading zero, never used in arithmetic
```

**Template literals.** Backticks with `${ }` to build text from values. Only what is inside `${ }` is evaluated.

```javascript
// lesson
console.log(`${testCaseId}: expected ${expectedStatus}, got ${actualStatus}`);
```
```typescript
// playwright
await page.goto(`/play/${gameId}?currency=${currency}`);
await expect(page.locator(`#round-${roundId}`)).toBeVisible();
```

**Reading an error.** File and line first, then the caret, then the error type and message, then the stack trace.
`TypeError` = a value does not allow that operation. `ReferenceError ... is not defined` = a name that was never declared (usually a typo).
`SyntaxError` = the file could not even be read, so nothing ran.

### Lesson 2 — Strings

**trim / includes / split / replace / toLowerCase.** Every method returns a new string; the original never changes. `includes` and `===` are case-sensitive.

```javascript
// lesson
const clean = raw.trim();
clean.includes("status=200");
clean.split(": ")[1];
"Passed".toLowerCase() === "passed";
```
```typescript
// playwright
const balanceText = await page.textContent("#wallet-balance");   // "  £1,250.00 "
const balance = Number(balanceText.trim().replace("£", "").replace(",", ""));

const toast = await page.textContent(".toast");
expect(toast.toLowerCase()).toContain("successfully");             // case-proof check

const roundId = toast.split(": ")[1];                              // "R-2026-000123"
expect(page.url().endsWith("/dashboard")).toBe(true);
```

### Lesson 3 — Arrays and loops

**Array literal, index from 0, length, last item, push, includes, join.**

```javascript
// lesson
const testIds = ["TC-101", "TC-102"];
testIds[0];
testIds[testIds.length - 1];
testIds.push("TC-103");
testIds.includes("TC-102");
```
```typescript
// playwright
const rows = await page.locator("table tbody tr").allTextContents();
expect(rows.length).toBe(5);
expect(rows[0]).toContain("TC-101");
expect(rows[rows.length - 1]).toContain("TC-105");
```

**for...of** runs the body once per item. **Indexed for** when you need the position; `i < list.length`, never `<=`.

```javascript
// lesson
for (const id of testIds) { console.log(`Running ${id}`); }
for (let i = 0; i < testIds.length; i++) { console.log(`${testIds[i]}: ${results[i]}`); }
```
```typescript
// playwright — one test per data row
for (const gameId of ["buffalo-gold", "cleopatra", "starburst"]) {
  test(`${gameId} loads`, async ({ page }) => {
    await page.goto(`/play/${gameId}`);
    await expect(page.locator("canvas")).toBeVisible();
  });
}
```

**A position that does not exist returns `undefined`, not an error.** A large share of confusing test failures start here.

### Lesson 4 — Objects

**Named fields, dot access, changing and adding fields, Object.keys.**

```javascript
// lesson
const testCase = { id: "TC-201", environment: "stage", expectedStatus: 200, passed: true };
testCase.id;
testCase.passed = false;
testCase.actualStatus = 500;
Object.keys(testCase).length;
```
```typescript
// playwright — an API response is an object
const response = await request.get(`/getRounds?accountId=${accountId}`);
const body = await response.json();
expect(response.status()).toBe(200);
expect(body.accountId).toBe(accountId);
expect(Object.keys(body)).toEqual(["accountId", "rounds", "total"]);   // contract check
```

**Arrays of objects** are the shape of every test-data file and every API list.

```typescript
for (const round of body.rounds) {
  expect(round.betAmount).toBeGreaterThan(0);
}
const user = { name: "tester01", password: "Secret123" };
await page.fill("#username", user.name);
```

### Lesson 5 — Functions

**Arrow function: define once, call many times.** Name, parameters, arrow, body.

```javascript
// lesson
const buildSummary = (id, status) => { return `${id} finished with status ${status}`; };
buildSummary("TC-201", 200);
```
```typescript
// playwright — a shared step
const login = async (page, username, password) => {
  await page.fill("#username", username);
  await page.fill("#password", password);
  await page.click("button[type=submit]");
};
await login(page, "tester01", "Secret123");
```

**return** hands a value back. No `return` means the caller gets `undefined`.

```typescript
const getBalance = async (page) => {
  const text = await page.textContent("#wallet-balance");
  return Number(text.trim().replace("£", ""));
};
const balance = await getBalance(page);
expect(balance).toBeGreaterThan(0);
```

**Default parameters.**

```typescript
const openGame = async (page, gameId, currency = "GBP") => {
  await page.goto(`/play/${gameId}?currency=${currency}`);
};
await openGame(page, "buffalo-gold");          // GBP
await openGame(page, "buffalo-gold", "EUR");   // override
```

**An object as the parameter.**

```typescript
const placeBet = async (page, bet) => {
  await page.fill("#stake", String(bet.stake));
  await page.selectOption("#lines", String(bet.lines));
  await page.click("#spin");
};
await placeBet(page, { stake: 2.5, lines: 20 });
```

**Short form with implicit return.** One expression, no braces, no `return`.

```typescript
const toPence = (pounds) => Math.round(pounds * 100);
```

**A function passed as an argument.** `test` is a function; its second argument is your function. Playwright calls it and supplies `page`.

```typescript
test("user can log in", async ({ page }) => {
  await login(page, "tester01", "Secret123");
  await expect(page).toHaveURL("/dashboard");
});
```

### Lesson 6 — Control flow and strict equality (upcoming)

**if / else if / else.** Branch on a condition.

```javascript
// lesson
if (status === 200) { console.log("PASS"); } else { console.log("FAIL"); }
```
```typescript
// playwright — handle an optional cookie banner
if (await page.locator("#accept-cookies").isVisible()) {
  await page.click("#accept-cookies");
}
```

**=== and !==** compare value AND type; never use `==`. **&&**, **||**, **!** combine conditions. **??** supplies a fallback for `undefined`/`null`.

```typescript
expect(response.status() === 200 && body.rounds.length > 0).toBe(true);
const currency = process.env.CURRENCY ?? "GBP";
```

**Ternary** for a one-line either/or.

```typescript
const label = passed ? "PASS" : "FAIL";
```

### Lesson 7 — Array methods: map, filter, find (upcoming)

**map** transforms every item, **filter** keeps the ones matching a condition, **find** returns the first match (or `undefined`).
Each takes a function as its argument — Lesson 5 applied to Lesson 3.

```javascript
// lesson
const ids = suite.map((tc) => tc.id);
const failed = suite.filter((tc) => tc.result === "FAIL");
const tc202 = suite.find((tc) => tc.id === "TC-202");
```
```typescript
// playwright
const amounts = body.rounds.map((r) => r.betAmount);
const losing = body.rounds.filter((r) => r.winAmount === 0);
const bigWin = body.rounds.find((r) => r.winAmount > 100);
expect(losing.length).toBeLessThan(body.rounds.length);
expect(bigWin).toBeDefined();
```
