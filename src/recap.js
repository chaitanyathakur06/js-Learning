const toast = "Bet Placed Successfully";
const list = ["a", "b", "c", "d", "e", "f"];

// prediction: false
console.log(toast.includes("successfully"));
// prediction: true
console.log(toast.toLowerCase().includes("successfully"));

// prediction: how many lines, and what is the last one? - 7 lines and undefined
for (let i = 0; i <= list.length; i++) {
  console.log(i, list[i]);
}