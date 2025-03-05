const person={
    name:"John",
    age:21
}

function greet(age){
    console.log(arguments);
    console.log(`Hi ${this.name}, you are ${age || this.age}`)
}

greet.bind(person)();
greet.call(person,22);
greet.apply(person,[23]);

