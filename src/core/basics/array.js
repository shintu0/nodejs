
// console.log("SLICE")
// //sub array with mutation
// var ar=[1,2,3,4,-1,-2,-3,2,3,9,7,8,9];
// console.log(ar);
// console.log(ar.slice(1,3))
// console.log(ar);

// console.log("SPLICE")
// var ar=[1,2,3,4,-1,-2,-3,2,3,9,7,8,9];
// console.log(ar);
// // 'In-between insertion '
// console.log(ar.splice(3,1,5));
// console.log(ar);

// 'Sorting'

var ar=[1,2,3,4,-1,-2,-3,2,3,9,7,8,9];
console.log(ar.sort());
console.log(ar.sort((a,b)=>{
  if(a<b) return -1;
  if(a>b) return 1;
  else return 0;
}));
console.log(ar);

let myArray = [
  {name: 'John', age: 30},
  {name: 'Jane', age: 25},
  {name: 'Bob', age: 40},
  // add more objects as needed
]

myArray.sort((a,b)=>{
  if(a.age<b.age) return -1;
  if(a.age>b.age) return 1;
  else return 0;
})
console.log(">>>>>>>>>>>>>>>>>>>>")
console.log(myArray)

console.log(myArray.reverse());

console.log(">>>>>>>>Searching>>>>>>>>>>>>")
const tempArray=Array.from("kaddbcd");
console.log(tempArray);
let result=tempArray.find(e=>e=="a");//return undefined if not found or return the element for the first and only occurrence
console.log(tempArray);
console.log(result);

console.log(">>>>>>Includes>>>>>>>>>")

result=tempArray.includes("c");//return if particular pattern not found

console.log("Includes:"+result); 

result=tempArray.indexOf("c")