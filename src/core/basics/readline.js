import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b;

rl.question("Enter a:", (answer) => {
  a = answer;
  rl.question("Enter b:", (answer) => {
    b = answer;
    rl.close();
  });
});

rl.on("close", () => {
  console.log(`Sum of ${a} + ${b} = ${+a + +b}`);
});
