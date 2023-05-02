let a = 10,
  b = 10;

let promise = new Promise((res, rej) => {
  setTimeout(() => {
    b++;
    // console.log(b);
    res("Done");
  }, 1000);
});

let result = await promise;

console.log("Result:" + (a + b));

//old way
promise
  .then((val) => {
    console.log(val);
    console.log("Result:" + (a + b));
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Done");
  });
