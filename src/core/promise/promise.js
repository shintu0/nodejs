const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done 1"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done 2"), 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done 3"), 3000);
});

// console.time("Promise");
// Promise.all([promise1, promise2, promise3])
//   .then((value) => {
//     console.log("Value: ",value)
//     console.timeEnd('Promise')
//   })
//   .catch((err) => console.log(err));
console.time("Promise");
Promise.allSettled([promise1, promise2, promise3])
  .then((value) => {
    console.log("Value: ",value)
    console.timeEnd('Promise')
  })
  .catch((err) => console.log(err));

// console.time("Promise");
// Promise.race([promise1, promise2, promise3])
//   .then((value) => {
//     console.log("Value: ",value)
//     console.timeEnd('Promise')
//   })
//   .catch((err) => console.log(err));
