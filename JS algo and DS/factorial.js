// factorial of a number
function factorial(n) {
  let num = 1;
  for (let i = n; i > 0; i--) {
    num = num * i;
  }

  return num;
}

// recursive factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
