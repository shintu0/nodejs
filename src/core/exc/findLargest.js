function findLargest(arr) {
  // Your code here
  let largest=-Infinity;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element>largest) largest=element;
  }
  return largest;
}

console.log(findLargest([1, 5, 2, 8])); // Output: 8
console.log(findLargest([-1, -5, -2, -8])); // Output: -1
