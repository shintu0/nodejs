
console.log(typeof a);
var a=10;


let b=20;

const c=10;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

/*
works in browser
d=10;
let d=30;
*/

let obj1={
    a:10
}
let obj2=obj1;
console.log(obj1==obj2)
console.log(obj1===obj2)
obj2=Object.create(obj2);

console.log(obj1==obj2)
console.log(obj1===obj2)

function mulInf(a){
    return (b)=>(c)=>a*b*c;
}

console.log(mulInf(1)(2)(3));

console.log(greet)
// console.log(greet1)// error
// console.log(greet3)// error

function greet(){
    console.log("1");
}

const greet1=function (){
    console.log("2");
};

const greet3=()=>{
    console.log("3")
}

console.log(greet)
console.log(greet1)
console.log(greet3)