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