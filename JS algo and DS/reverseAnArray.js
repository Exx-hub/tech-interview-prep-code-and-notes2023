// Reverse an array
function reverseArrays(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    // do swap - SWAP just like in C, create a temporary variable
    const temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  return arr;
}
