
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
//console.log(ar.splice(4,10,5,6,7,8,9,10,11,12,13)) //<start,delete counts,i,t,e,m,s,...>
// console.log(ar)

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

// -----------------------------------IN CASE- -------------------------------------------
//sorting array

let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    occupation: "Software Engineer"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 25,
    occupation: "Marketing Manager"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    age: 40,
    occupation: "Sales Representative"
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    age: 28,
    occupation: "Graphic Designer"
  },
  {
    id: 5,
    name: "Mike Davis",
    email: "mike.davis@example.com",
    age: 35,
    occupation: "Product Manager"
  }
];
console.log(users.sort());
let data=users.sort((a,b)=>{
  if(a.age>b.age) return 1;
  if(a.age<b.age) return -1;
  if(a.age=b.age) return 0;
}).map(user=>({name:user.name,age:user.age}))
console.log(data.reverse())

console.log(users.find(user=>user.id===1))
console.log(users.includes(users.find(user=>user.id===1)))
console.log(users.some(user=>user.age>25))
console.log(">>>>>>>>>>>>>>>>>>>>")
console.log(users.flat()) //just convert the nested array in one simple array
console.log(">>>>>>>>>>>>>>>>>>>>")