let arr = [35, 3, 4, 88, 9, 10, 21, 5, 6, 7];
function LongestConsecutiveSequence(arr) {
  arr = arr.sort((a, b) => a - b);
  let maxCount = 1;
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 1;
    }
  }
  return maxCount;
}
console.log(
  "Length of the Longest consecutive sequence is : " +
    LongestConsecutiveSequence(arr)
);
