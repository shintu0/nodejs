import EventEmitter from "events";

class MyEventEmitter extends EventEmitter {
  log() {
    console.log(this.eventNames());
  }
}

const myevent = new MyEventEmitter();

async function willGetUser() {
  const response = await fetch("https://next-ts-todo.vercel.app/api/users");
  const data = await response.json();
  console.log(data.names);
}

myevent.on("GET USER", willGetUser);
myevent.emit("GET USER");
myevent.log();


