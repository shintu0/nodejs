//Q1
// function fruit(){
//   console.log(name);
//   console.log(data)
//   console.log(price);
//   var name='apple';
//   data=1;
//   let price=100;
// }
// fruit();

//Q2
// for (var index = 0; index < 5; index++) {
//   setTimeout(()=>console.log(index),1000);
  
// }
// for (let index = 0; index < 5; index++) {
//   setTimeout(()=>console.log(index),1000);
  
// }

//Q3
// console.log(+true);
// console.log(+false);

// Q4

// function fruit(){
//   console.log("Mango");
// }
// // fruit.name="apple"; //readonly
// console.log(fruit());

// Q5
// function getAge(){
//   'use strict'
//   a=1
//   return a;
// }
// getAge()

// Q6
// for (let index = 0; index < 5; index++) {
//   if(index==3) continue;
//   console.log(index);
// }

// Q7
// const foo=()=>console.log("Foo")
// const bar=()=>setTimeout(()=>console.log("Bar"),0)
// const baz=()=>console.log("Baz")
// foo();
// bar();
// baz();

// Q8
// const numbers=[1,2,3];
// numbers[9]=numbers;
// console.log(typeof numbers);
// console.log( numbers[2]);
// console.log( numbers[7]);
// console.log( numbers[9]);
// console.log( numbers[9][2]);

// Q9
// console.log(setInterval(()=>console.log(1),1000))
// console.log(setInterval(()=>console.log(2),1000))
// console.log(setInterval(()=>console.log(3),1000))

// Q10
// const firstPromise=new Promise((res,rej)=>{
//   setTimeout(res,1000,"one")
// })
// firstPromise.then(resp=>console.log(resp)).catch(err=>console.log(err))

//Q11 //in Browser
// function Car(){
//   this.make="Tata"
//   return {make:"Kia"}
// }
// Car() //{make:"Kia"}
// new Car() //{make:"Kia"}

// function Car(){
//   this.make="Tata"
// }
// new Car() //{make:"Tata"}
// Car() //undefined

//Q11 //IN WEB ONLY
// (()=>{
//   let x= (y=10);
// })();
// // typeof x; //Undefined
// typeof y;

// Q11 IN WEB
// function hoisting happens with actual func body while var hoisted with undefined initially
// func();

// var func=function(){
//   console.log("First");
// }
// func();
// function func(){
//   console.log("Second")
// }

// func();

// Q12 
// var variable=10;

// console.log(variable,"a");
// (()=>{
//   variable=20;
// })();
// console.log(variable,"b");
// // var variable=30
// console.log(variable,"c");

// Q13
variable=10;

(()=>{
  foo=0;
  console.log(variable);
  var foo=10;
  variable=20;
  console.log(variable);
})();

console.log(foo)
console.log(variable)
var variable=30;