const nthFibonacci = function(n) {
  // TODO: Your code here!

  const fib = [];
  fib.push(0, 1);
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[n];
};
