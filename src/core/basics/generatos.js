function* dequeue(queue){
  const itr=queue.length
  for (let index = 0; index < itr; index++) {
    yield queue.shift();
  }
}
Promise.resolve('Promise').then(data=>console.log(data));
const result=dequeue([1,2,3,4,5])
console.log("Normal 1")
setImmediate(()=>console.log("Immediate "))
console.log(result.next())
console.log("Normal 2")
process.nextTick(()=>console.log("NextTick"))
console.log(result.next())
console.log(result.next())
setTimeout(()=>console.log("Timeout "),0)
console.log(result.next())
console.log(result.next())