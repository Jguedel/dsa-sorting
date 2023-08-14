function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (small > arr[j]) {
        arr[i] = arr[j];
        arr[j] = small;
        small = arr[i];
      }
    }
  }
  return arr;
}

module.exports = selectionSort;
