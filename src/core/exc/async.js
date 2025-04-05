const p1 = new Promise((res, rej) => {
    res("Ok");
});

setImmediate(() => {
    console.log('SETIMMEDIATE: Running before the timeout => number 3');
});
setTimeout(() => {
    console.log('SETTIMEOUT: The timeout running last => number 4');
}, 0);
process.nextTick(() => {
    console.log('NEXTTICK Running at next tick => number 2');
});

p1.then(e => console.log("Promise", e)).catch(err => console.log(err));
console.log("Normal");

try {
    const resultPromise = await p1;

    console.log("async await: ", resultPromise);
} catch (error) {
    console.log(error.message);

}


//new 



console.log('Start');

process.nextTick(() => {
  console.log('Next Tick 1'); 
  process.nextTick(() => {
    console.log('Next Tick 2');
  });
  queueMicrotask(() => {
    console.log('Microtask 1');
  });
});

new Promise((resolve) => {
  console.log('Promise 1'); 
  resolve();
}).then(() => {
  console.log('Promise Callback 1'); 
  process.nextTick(() => {
    console.log('Next Tick inside Promise');
  });
  queueMicrotask(() => {
    console.log('Microtask 2'); 
  });
});

setImmediate(() => {
  console.log('setImmediate 1');
  process.nextTick(() => {
    console.log('Next Tick inside setImmediate');
  });
  queueMicrotask(() => {
    console.log('Microtask inside setImmediate');
  });
});

console.log('End');
