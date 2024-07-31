/*
Debounce Function: Implement a debounce function that takes a function and a delay as input. 
The returned function, when called repeatedly within the delay period, only executes the original function once after the delay has passed.
This is useful for optimizing event handlers that might be triggered frequently.
*/

function debounce(func, delay) {
  // Your code here
}

const handleResize = debounce(() => {
  console.log("Window resized!");
}, 200);

window.addEventListener("resize", handleResize);