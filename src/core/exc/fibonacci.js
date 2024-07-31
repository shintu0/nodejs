// 0 1 1 2 3 5 8 ....

console.time('Memo')

console.log('Fib[45]=',printFib(45)[44]);

console.timeEnd('Memo')
console.time('Normal')

console.log('Fib[45]=',fibonacci(45));

console.timeEnd('Normal')

function fibonacci(n){
  // console.log(n,new Date().toLocaleTimeString());
  if(n===1) return 0;
  if(n===2) return 1;
  else return fibonacci(n-2)+fibonacci(n-1);
}


//here we are calculating so much but not utilizing as we have to show the series

// so memoization will be required

function printFib(nth){
  const memo=[];
  function fib(n){
    if(memo[n-1]) return memo[n-1];
    if(n===1) return 0;
    if(n===2) return 1;
    else return fib(n-2)+fib(n-1);
  }
  for(let i=1;i<=nth;i++){
    memo.push(fib(i));
  }
  return memo;
}


