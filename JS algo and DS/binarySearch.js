// -problem: given a sorted array of numbers and a target number, find index of target number in the array. using binary search
// return -1 if number is not found

// trick is to move the start and end indeces...

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const middleEl = arr[middleIndex];

    if (middleEl === target) {
      return middleIndex;
    }

    // search right
    if (middleEl < target) {
      leftIndex = middleIndex + 1;
    }

    // search left
    if (middleEl > target) {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 2));

function recursuveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  // 1st base case, if target does not exist in array
  if (leftIndex > rightIndex) {
    return -1;
  }

  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  const middleEl = arr[middleIndex];

  // 2nd base case, once target is found
  if (target === middleEl) {
    return middleIndex;
  }

  if (target < middleEl) {
    return search(arr, target, leftIndex, middleIndex - 1); // array becomes smaller because left and right indeces
  } else {
    return search(arr, target, middleIndex + 1, rightIndex); // array becomes smaller because left and right indeces
  }
}

console.log(recursuveBinarySearch([-5, 2, 4, 6, 10], 10));
