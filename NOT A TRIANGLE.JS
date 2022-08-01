function countGreater(arr, n, k) {
  var lo = 0;
  var hi = n - 1;

  var leftGreater = n;
  while (lo <= hi) {
    var mid = lo + parseInt((hi - lo) / 2);

    if (arr[mid] > k) {
      leftGreater = mid;
      hi = mid - 1;
    } else lo = mid + 1;
  }

  return n - leftGreater;
}

function findTriplet(arr, n) {
  arr.sort((a, b) => a - b);
  var count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // console.log("(", arr[i], arr[j],")");
      if (countGreater(arr, n, arr[i] + arr[j]) > 0) {
        // console.log(countGreater(arr,n,arr[i]+arr[j]));
        count++;
      }
    }
  }

  console.log(count);
}

let arr = [5, 2, 9, 6];
let n = arr.length;

findTriplet(arr, n);
