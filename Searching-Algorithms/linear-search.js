function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -i;
}

console.log(linearSearch(["El", "Faith", 1, 3], 3));
