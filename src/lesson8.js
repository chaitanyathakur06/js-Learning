// lesson8.js — async / await. Run with: node src/lesson8.js

// ---- Fake API: answers after `ms` milliseconds. Consume it, don't study it. ----
const fetchStatus = (accountId, ms = 500) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ accountId, status: 200, balance: 1250 }), ms);
  });
// -------------------------------------------------------------------------------

const main = async () => {
  // 1. The correct way: await turns the receipt into the value
  const response = await fetchStatus("ACC-1");
  console.log(response);                 // { accountId: 'ACC-1', status: 200, balance: 1250 }
  console.log(response.status);          // 200

  // 2. The number one bug: forgetting await. You get the receipt, not the value.
  const receipt = fetchStatus("ACC-2");
  console.log(receipt);                  // Promise { <pending> }
  console.log(receipt.status);           // undefined — a receipt has no status field

  // 3. Two awaits run one after the other. Time adds up.
  const start = Date.now();
  await fetchStatus("ACC-3");
  await fetchStatus("ACC-4");
  console.log(`two sequential calls took about ${Date.now() - start} ms`);   // ~1000

  // 4. An async function that returns a value still hands back a receipt to its caller
  const getBalance = async (accountId) => {
    const r = await fetchStatus(accountId);
    return r.balance;
  };
  console.log(getBalance("ACC-5"));            // Promise { <pending> } — forgot to await
  console.log(await getBalance("ACC-5"));      // 1250 — awaited

  // 5. await inside a loop: one call at a time, in order
  for (const id of ["ACC-6", "ACC-7"]) {
    const r = await fetchStatus(id, 200);
    console.log(`${r.accountId}: ${r.status}`);
  }

  console.log("main finished");
};

main();
console.log("this line is after main() but prints FIRST — main is still waiting");