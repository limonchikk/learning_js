let arrChanged = (arr) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
      if (arr[i] % 3 == 0) {
        arr[i] = "foo";
      } else arr[i] = "bar";
    }
  }
  console.log(arr);
};
module.exports = arrChanged;
