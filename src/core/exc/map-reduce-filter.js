const arr=[3,4,5,9,8,7,6];

const mx=arr.sort().reverse()[0];
console.log("-----------------------------------");
const newArr=arr.map(e=>e%mx);

console.log(newArr);
console.log("-----------------------------------");
console.log(arr.filter(e=>e%2==0));
const sumArr=(prev=[])=>prev.reduce((p,c,i,a)=>p+c,0);
console.log("-----------------------------------");
const result=arr.reduce((prev,current,index,arr)=>{
    // console.log(prev,current,index,arr);
    prev.push(sumArr(prev)+current);
    return prev;
},[]);
console.log(arr);
console.log(result);