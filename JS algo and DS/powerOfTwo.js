// power of two

// --kinda like multiple of two

// 2 4 8 16 32 64 etc

function powerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}

// power of two BITWISE
function isPowerOfTwo(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(30));
