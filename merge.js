function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length && arr2.length) {
    // Insert the smallest item into sortedArr
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sorted, ...arr1, ...arr2];
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, mid));
  let arr2 = mergeSort(arr.slice(mid));
  return merge(arr1, arr2);
}

module.exports = { merge, mergeSort };
