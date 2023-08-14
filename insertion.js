function insertionSort(arr) {
  let i = 1;
  while (i < arr.length) {
    if (arr[i] < arr[i - 1]) {
      for (let j = 0; j <= i; j++) {
        if (arr[i] < arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    i++;
  }
  return arr;
}

module.exports = insertionSort;
