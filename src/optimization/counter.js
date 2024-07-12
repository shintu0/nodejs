import {
  parentPort,
  isMainThread,
  workerData,
  threadId,
} from "node:worker_threads";

if (isMainThread) {
  console.log("Is Main thread: ", isMainThread);
} else {
  console.log("Thread ID: ", threadId);
}
let count = 0;
for (let index = 0; index < workerData.range; index++) {
  //do something
  count++;
}

parentPort.postMessage(count);
