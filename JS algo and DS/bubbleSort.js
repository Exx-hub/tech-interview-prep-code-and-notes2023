// bubble sort

// problem: given an array of integers, sort the array

// traverse through array, get arr[i] and next element arr[i + 1], compare them and swap if not in order.
// then move to 2nd item vs 3rd item
// use swap count to know if items have been swapped.
// if swap count did not change, meaning end the loop and the items have been sorted.

function bubbleSort(arr) {
  let swapCount;
  do {
    swapCount = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapCount++;
      }
    }
  } while (swapCount > 0);

  // if swap count is more than 1, to the loop again

  return arr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));
