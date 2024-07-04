let str="sintu";
let result;

//splitting
console.log(">>>>>>>>>Splitting 1>>>>>>>>>");
result=str.split("");
console.log(str);
console.log([...str]);
console.log(result);
console.log(">>>>>>>>>Splitting 2>>>>>>>>>");
console.log((str+"intu").split('i',5))


console.log(">>>>>>Searching>>>>>>>>>>>>>>");
console.log(str.charAt(1));
console.log(str.indexOf('t'));
console.log(str.includes('n'));
console.log((str+"iii").search('i'))

console.log(">>>>>>>>>>Slicing>>>>>>>>>>>>");
// it accepts the negative index but you can't reverse you need to pass like a,b (a<b ie. a index should come before b even if it is negative)
console.log(str.slice(-4,2));
console.log(">>>>>>>>>>Substr>>>>>>>>>>>>.");
console.log(str.substring(0,2));
console.log((str+"iii").substring(0,2));

console.log(">>>>>>>>>>Replacing>>>>>>>>>>>");
console.log(str.replace('i','hi'))
console.log(('iii'+str).replaceAll(/[a-z]/ig,"sss"))

console.log(">>>>>>>>>Padding>>>>>>>>>>>>>>");

console.log(str.padEnd(12,"*"))
console.log(str.padStart(12,"*"))








