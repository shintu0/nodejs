import {isMainThread, parentPort,workerData,threadId,} from 'node:worker_threads';

let count=0;
parentPort.start();
console.log('Is Main Thread: ',isMainThread)
console.log('Thread ID',threadId)
console.log('-------------------');
console.log(workerData);
parentPort.postMessage(count);
for (let i = 0; i < workerData.num; i++) {
  // console.log(i);
  count=i;
  parentPort.postMessage(count)
}
parentPort.postMessage(count)
