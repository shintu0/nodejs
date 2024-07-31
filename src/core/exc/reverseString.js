function reverseString(str) {
  // Your code here
  let op='';
  for (let index = str.length-1; index>=0; index--) {
    op+=str[index];
    
  }
  return op;
}

console.log(reverseString("hello")); // Output: "olleh"