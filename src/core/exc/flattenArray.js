function wrapper(ipArr){
  const flatArray=[]
  function flattenArray(arr) {
    // Your code here
    for (const ele of arr) {
      if ( ele instanceof Array ){
        flattenArray(ele);
      }else{
        flatArray.push(ele);
      }
    }
  }
  flattenArray(ipArr)
  return flatArray;
}

// console.log(wrapper([1, [2, [3]], 4, [5, 6]])); // Output: [1, 2, 3, 4, 5, 6]


console.log(wrapper([1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11, 12], 13, 14, 15])); 
console.log(wrapper( [1, [], [2, [3, []], 4], 5])); 