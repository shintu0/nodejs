function countChar(str, char) {
  // Your code here
  let count=0;
  for (const ch of str) {
    if(ch===char) count++;
  }
  return count
}

console.log(countChar("apple", "p")); // Output: 2
