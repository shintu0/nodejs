import express from "express";
import cluster from "node:cluster";
import { availableParallelism } from "node:os";
import process from "node:process";
import { Worker, isMainThread } from "node:worker_threads";

const numCPUs = availableParallelism();
console.log(`Cores: ${numCPUs}`);
const PORT = 7000;
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = express();
  if (isMainThread) {
    console.log("Is Main thread: ", isMainThread);
  } else {
    console.log("Is Main thread: ", threadId);
  }
  app.get("/", (req, res) => {
    res.send("<h1>🙏</h1>");
  });
  app.get("/non-blocking", (req, res) => {
    res.send("<h1>Non-Blocking</h1>");
  });
  app.get("/blocking", (req, res) => {
    const task = new Worker("./counter.js", {
      workerData: { range: 100000 },
    });
    task.on("message", (data) => {
      console.log("From Worker: ", data);
    });
    task.on("error", (err) => {
      console.log("Worker Error: ", err.message);
    });
    task.on("exit", (exitCode) => {
      if (exitCode !== 0) {
        console.log("Worker Error Code: ", exitCode);
      } else {
        console.log("Worker completed execution!!!");
      }
    });
    res.send("<h1>Blocking</h1>");
  });

  app.get("/*", (req, res) => {
    res.send(`
      <h1>Not Found</h1>
      `);
  });

  app.listen(PORT, () => {
    console.log(`Primary ${process.pid} is running`);
    console.log(`Listening on ${PORT}`);
  });
}
