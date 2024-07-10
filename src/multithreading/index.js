import express from "express";
import { isMainThread, Worker, parentPort } from "node:worker_threads";

const PORT = 7000;
const app = express();

//non-blocking
app.get("/non-blocking", (req, res) => {
  res.send("<h1>Hello</h1>");
});

//blocking
app.get("/blocking", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();
  console.log("Start 0: ", new Date().toLocaleTimeString());
  console.log("Is Main thread: ", isMainThread);
  const task = new Worker("./counter.js", {
    workerData: { num: 10**3 },
  });
  task.on("message", (result) => {
    console.log("Start 1: ", new Date().toLocaleTimeString());
    console.log("Message :", result);
    res.write(`data:${result}\n\n`);
  });
  console.log("Start 2: ", new Date().toLocaleTimeString());
  task.on("error", (err) => {
   
    res.status(500).end(`Worker error: ${err.message}`);
  });
  task.on("complete", (result) => {
  });
  console.log("Start 3: ", new Date().toLocaleTimeString());
  task.on("exit", (code) => {
    if (code !== 0) {
      res.status(500).end(`Worker stopped with exit code ${code}`);
    } else {
      res.end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Process ID: ${process.pid}`);
  console.log(`Listening on ${PORT}`);
});
