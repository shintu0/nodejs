import { Worker, isMainThread } from "node:worker_threads";


const countWorker = new Worker("./counter-worker.js", {
    workerData: { range: 100000 },
});

countWorker.on("message", (data) => {
    console.log("From Worker: ", data);
});
countWorker.on("error", (err) => {
    console.log("Worker Error: ", err.message);
});
countWorker.on("exit", (exitCode) => {
    if (exitCode !== 0) {
        console.log("Worker Error Code: ", exitCode);
    } else {
        console.log("Worker completed execution!!!");
    }
});

if (isMainThread) {
    console.log("Is Main thread: ", isMainThread);
} else {
    console.log("Is Main thread: ", threadId);
}