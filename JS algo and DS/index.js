// insertion sort

// problem: given an array of integers, sort the array using insertion sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i];
    let j = i - 1; // j is sorted part

    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = nti;
  }
}
