function throttle(func, delay) {
  let lastCall;
  return function () {
    const now = Date.now();
    if (!lastCall || now - lastCall > delay) {
      lastCall = now;
      func.apply(this, arguments);
    }
  };
}

const scrollHandler = () => {
  console.log('Scrolling...');
};

let arr = [];
arr[10] = 0;

const throttledScrollHandler = throttle(scrollHandler, 0);

for (const e of arr) {
  console.log(e)
  throttledScrollHandler();
}

function debounce(func, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

const searchFunction = () => {
  console.log('Searching...');
};

const debouncedSearch=debounce(searchFunction, 500);

for (const e of arr) {
  console.log(e)
  debouncedSearch();
}
