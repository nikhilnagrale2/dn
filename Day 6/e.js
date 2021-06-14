function frequency(arr) {
  let dict = new Map();
  let maxCount = 0;
  let maxElement;
  for (var i = 0; i < arr.length; i++) {
    if (dict[arr[i]] == null) {
      dict[arr[i]] = 1;
    } else {
      dict[arr[i]] = 1 + dict[arr[i]];
    }
    if (dict[arr[i]] > maxCount) {
      maxElement = arr[i];
      maxCount = dict[arr[i]];
    }
  }
  console.log(maxElement + " ( " + maxCount + " times ) ");
}

var arr1 = [3, 3, 3, 3, 3, 3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
frequency(arr1);
