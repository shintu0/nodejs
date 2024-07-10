import express from "express";
import { Stream } from "node:stream";
import { isMainThread, Worker, parentPort } from "node:worker_threads";

const PORT = 7000;
const app = express();

//non-blocking
app.get("/non-blocking", (req, res) => {
  res.send("<h1>Hello</h1>");
});

//blocking
app.get("/blocking", (req, res) => {
  console.log("Start 0: ", new Date().toLocaleTimeString());
  console.log("Is Main thread: ", isMainThread);
  const task = new Worker("./counter.js", {
    workerData: { num: 10**2 },
  });
  const readStream = new Stream.Readable({
    read() {},
    highWaterMark: 20,
  });
  task.on("message", (result) => {
    console.log("Start 1: ", new Date().toLocaleTimeString());
    console.log("Message :", result);
    readStream.push(result + "\n\n ");
  });
  console.log("Start 2: ", new Date().toLocaleTimeString());
  task.on("error", (err) => {
    res.status(500).end(`Worker error: ${err.message}`);
  });

  console.log("Start 3: ", new Date().toLocaleTimeString());
  task.on("exit", (code) => {
    if (code !== 0) {
      res.status(500).end(`Worker stopped with exit code ${code}`);
    } else {
      readStream.push(null);
    }
  });
  readStream.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Process ID: ${process.pid}`);
  console.log(`Listening on ${PORT}`);
});
