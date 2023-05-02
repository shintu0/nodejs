let a = 10,
  b = 10;

setTimeout(() => {
  b = 20;
}, 1000);

console.log("Result: " + (a + b));
