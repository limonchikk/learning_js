const arrChanged = require('./my-function.js')
let  arr = [];

let fillArr = (arr) => {
  for (i = 0; i < 100; i++){
    arr[i] = i;
  }
}
fillArr(arr);
arrChanged(arr);

