function isPrime(n) {
  if (n < 2) {
    return false;
  }

  // i starts with 2, because all numbers are divisble by 1.
  // check if i < n only, <= n because, a number is always divisible by itself
  // so that's already divisble by 1 and itself. if condition passes, meaning number was divisble by at least
  // 1 more number, then it is not prime.
  // i <= MAth.sqrt(n) to reduce the loop into half
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
