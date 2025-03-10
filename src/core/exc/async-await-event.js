import EventEmitter from "events";


async function asynchronusExec(){
    setImmediate(()=>{
        console.log("setImmediate: when next event loop starts");
    });
    
    setTimeout(()=>{
        console.log("setTimeout");
    },0);
    
    process.nextTick(()=>{
        console.log("just at the end of this event loop will end: process.nextTick");
    });
    
    const p1=Promise.resolve("Promise");
    
    p1.then(data=>console.log("Promise Chaining: ",(data)));
    
    const res=await p1;
    
    console.log("Async await:",res);
    
    console.log("Normal");
}

class MyEVentEmiitter extends EventEmitter{
    log() {
        console.log("Exiting ",this.eventNames());
      }

}


const mee=new MyEVentEmiitter();

mee.on('start',asynchronusExec);

mee.emit('start');

mee.log();
mee.removeAllListeners();
mee.log();



