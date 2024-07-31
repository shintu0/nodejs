function isPalindrome(str) {
  // Your code here
  let flag=true;
  for (let i = 0,j=str.length-1; i<=j ; i++,j--) {
    if(str[i]!==str[j]){
      flag=false;
      break;
    }
  }
  return flag;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));  // Output: false