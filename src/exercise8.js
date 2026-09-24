//Await fetchStatus("ACC-10") and print just its balance.
//Call fetchStatus("ACC-11") without await, store it, and print it. Then print its .balance. Predict both.
//Record Date.now(), await three calls in a row with the default delay, and print how many milliseconds passed. Predict roughly.
//Write isHealthy(accountId), an async function that awaits a call and returns true when status is 200. Print isHealthy("ACC-12") once without await and once with. Predict both.
//Loop over ["ACC-13", "ACC-14", "ACC-15"] with for...of, await each call with a delay of 100, and print id: balance for each.

// ---- Fake API: copy from lesson8.js ----
const fetchStatus = (accountId, ms = 500) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ accountId, status: 200, balance: 1250 }), ms);
  });
// ----------------------------------------

const run = async () => {
  // 1. await the call, print just the balance
  const r1 =await fetchStatus("ACC-10");

  // prediction: 1250
  console.log(r1.balance);

  // 2. no await: store the receipt, print it, then print its .balance
  const receipt = fetchStatus("ACC-11");
  // prediction: Promise { <pending> }
  console.log(receipt);
  // prediction:undefined
  console.log(receipt.balance);

  // 3. three sequential awaits, measure the time
  const start = Date.now();
  await fetchStatus("ACC-20");
  await fetchStatus("ACC-21");
  await fetchStatus("ACC-22");
  // prediction (roughly): three calls took about 1505 ms
  console.log(`three calls took about ${Date.now() - start} ms`);

  // 4. an async function that returns true when status is 200
  const isHealthy = async (accountId) => {
    const r = await fetchStatus(accountId);
    return r.status === 200;
  };
  // prediction: Promise { <pending> }
  console.log(isHealthy("ACC-12"));
  // prediction: true
  console.log(await isHealthy("ACC-12"));

  // 5. await inside a loop, delay 100 each
  for (const id of ["ACC-13", "ACC-14", "ACC-15"]) {
    const r = await fetchStatus(id, 100);
    console.log(`${id}: ${r.balance}`);
  }
};

run();