
//array string methods
//tricky questions
//read chat

// Problem set 
// merge two strings 

function merge(s1,s2){
    let n=s1.length>s2.length?s1.length:s2.length;
    let res="";
    for(let i=0;i<n;i++){
        const mergedChar=(s1[i] || "")+(s2[i]||"");

        res+=(mergedChar);
    }
    return res;
}

console.log(merge("Sintu","Tiwari"))


// AbccDeerrFajhdj => abcc deerr fajhdj

// function addSpace(str){
//     const capsMap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let result="";
//     str.split("").forEach(e=>{
//         if(capsMap.includes(e)){
//             result+=" ";
//             result+=e.toLocaleLowerCase()
//         }
//         else result+=e
//     })
//     return result;
// }

// function addSpace(str){
//     let result="";
//     str.split("").forEach(e=>{
//         if(e.charCodeAt(0)>=65 && e.charCodeAt(0)<91){
//             result+=" ";
//             result+=e.toLocaleLowerCase()
//         }
//         else result+=e
//     })
//     return result;
// }

// function addSpace(str){
//     let result=str.split(/[A-Z]/).join(" ").toLocaleLowerCase();
//     return result;
// }

const addSpace=(str)=>str.split(/(?=[A-Z])/).join(" ").toLocaleLowerCase();



console.log(addSpace("AbccDeerrFajhdj"))

//ARRAY
let arr=[];
arr[9]=10;

console.log(arr.length)
arr=Array.from({length:10});
console.log(arr.length)

arr=new Array(4);
console.log(arr.length)

arr.fill(3,0,arr.length);
// arr=arr.map((e,i)=>i);

console.log(arr)
arr.shift(1) //delete first
arr.unshift(1) //add first
console.log(arr)

arr.splice(1,0,2) //add in between

console.log(arr)

arr.pop();
console.log(arr)
arr[arr.length-1]=4;
console.log(arr)
console.log(arr.push(5))
console.log(arr)
console.log("---------------------")



//String
let str="Some String";

str=str.replaceAll("S","s");

console.log(str)
console.log(str.substring(0,4))
console.log(str.substring(0,4).length)

//slice to insert between by creating a new string


