const nthFibonacci = function(n) {
  // TODO: Your code here!

  const fib = [];
  fib.push(0, 1);
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[n];
};

// #2
function iterativeFibo(n) {
    const cache = [0,1];
    for(let i = 2 ; i <= n ; i++) {
        cache[i] = cache[i-2] + cache[i-1];
    }
    return cache[n];
}
console.log(iterativeFibo(20));
