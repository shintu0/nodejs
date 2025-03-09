
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

// console.log(merge("Sintu","Tiwari"))


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



// // console.log(addSpace("AbccDeerrFajhdj"))

//ARRAY
let arr=[];
arr[9]=10;

// // console.log(arr.length)
arr=Array.from({length:10});
// // console.log(arr.length)

arr=new Array(4);
// // console.log(arr.length)

arr.fill(3,0,arr.length);
// arr=arr.map((e,i)=>i);

// // console.log(arr)
arr.shift(1) //delete first
arr.unshift(1) //add first
// // console.log(arr)

arr.splice(1,0,2) //add in between

// console.log(arr)

arr.pop();
// // console.log(arr)
arr[arr.length-1]=4;
// // console.log(arr)
// // console.log(arr.push(5))
// // console.log(arr)
// // console.log("---------------------")



//String
let str="Some String";

str=str.replaceAll("S","s");

// // console.log(str)
// // console.log(str.substring(0,4))
// // console.log(str.substring(0,4).length)

//slice to insert between by creating a new string

// -------------------------------------------------------------------------------------------------------
str="She is cool and funny";

let result =str.split(" ").map(e=>{
    let result="";
    for (let index = e.length-1; index >=0; index--) {
        result+=e[index].toLowerCase();
        
    }
    return result;
}).join(" ");

// console.log(result)
let reverseString=(str)=>{
    let res="";
    let n=str.length;
    while(n>0){
        res+=str[n-1];
        n--;
    }
    return res;
}



let isPalindrome=(str="")=>str==reverseString(str);


console.log(isPalindrome("aba"))
console.log(isPalindrome("abac"))

isPalindrome=(str="")=>{
    for(let i=0,j=str.length-1;i<j;i++,j--){
        if(str[i]!=str[j]) return false;
    }
    return true;
}

console.log(isPalindrome("aba"))
console.log(isPalindrome("abac"))

reverseString=(str="")=>{
    if(str.length>1){
        const strArr=str.split("");
        return strArr.pop()+reverseString(strArr.join(''));
    }
    else return str;
}
console.log(reverseString("sintu"));

const findMax=(arr=[])=>{
    let mx=Number.MIN_VALUE;
    arr.forEach(e=>{
        mx=mx<e?e:mx;
    });
    return mx;
}

console.log(findMax([1, 3, 7, 2, 5]));

const countVowels=(str="")=>{
    const vowels={a:0,e:0,i:0,o:0,u:0};
    let total=0;
    for (let index = 0; index < str.length; index++) {
        const element = str[index].toLowerCase();
        if(vowels[element]>=0) {
            vowels[element]++;
            total++;
        }
        
    }
    return {vowels,total};
}

console.log(countVowels("sintu tiwari"));
// console.log(countVowels("shivam tiwari"));
// console.log(countVowels("hello world"));

const firstNonRepChar=(str="")=>{
    const map={};
    for(let i=0;i<str.length;i++){
        const chr=str[i];
        if(map[chr]){
            return chr;
        }else{
            map[chr]=chr;
        }
    }
    return undefined;
}

console.log(firstNonRepChar("swiss"));
console.log(firstNonRepChar("abc"));

const findSumPair=function(arr=[],target=0){
    const pairs=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                pairs.push([arr[i],arr[j]]);
            }
        }
    }
    return pairs;
}

console.log(findSumPair([1, 2, 3, 4, 5],9))
console.log(findSumPair([1,5,3,2,4],6))
console.log(findSumPair([4,2,3,5,2,1],8))



