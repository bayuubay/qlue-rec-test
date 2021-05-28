function numFactor(arr) {
  if (arr.length != 1) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i] + " ");
    }
    console.log("------------");
  }
}

function findFactor(arr, i, n) {
  if (n == 0) numFactor(arr);
  for (let j = i; j <= n; j++) {
    arr.push(j);
    findFactor(arr, j, n - j);
    arr.pop();
  }
}

// input integer
let n = 10;
let arr = [];
// Call the function
findFactor(arr, 1, n);
