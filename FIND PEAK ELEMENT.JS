/* PROBLEM 5: Find Peak Element (30 minutes)
We are given an array of ‘n’ numbers .Our task is to find the peak element from the given array of numbers and return
its index .The array element is a peak element if it is not smaller than its neighbor element. Sometimes an array can
multiple peak element so return the index of first peak element of the array.
Constraints:
● arr(1 <= n <= 100)
Input:
● Array of numbers
Sample Input:
 [1, 2, 1, 3, 5, 6, 10, 15, 8]
Sample Output:
 15 */

//  BRUTE FORCE------->>>>
/* function peakElement(arr, n) {
  if (n == 1) return 0;
  else if (n == 2) {
    let x = (arr[0] >= arr[1]) ? 0 : 1;
    return x;
  } else {
    if (arr[0] >= arr[1]) {
      return 0;
    }
    if (arr[n - 1] >= arr[n - 2]) {
      return n - 1;
    }
    for (let i = 1; i < n - 1; i++) {
      if ((arr[i] >= arr[i - 1]) && (arr[i] >= arr[i + 1])) {
        return i;
      }
    }
  }
}
// let arr = [1, 2, 1, 3, 5, 6, 10, 15, 8];
// n = arr.length;
// console.log(peakElement(arr, n));
 */

// ----------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function peakElementFind(arr,n){
    let low = 0;
    let high = n-1;

    while(low<=high){
        let mid = low + parseInt((high - low)/2);
        if(
          (mid==0||arr[mid]>=arr[mid-1])  &&
          (mid == n-1 || arr[mid]>= arr[mid+1])
        ){
          return mid;
        }
        else if(arr[mid] <= arr[mid+1]){
          low = mid+1;
        }else{
          high = mid -1;
        }
        
    }
    return -1;
} 
let arr = [1, 2, 1, 3, 5, 6, 10, 15, 8];
n = arr.length;
 console.log("Index of a peak point is "+ peakElementFind(arr, n));

/*  Complexity Analysis:
 Time Complexity: O(log 2(n))
 Space Complexity: O(1)
 */

/* // A Javascript program to find a peak element
// using divide and conquer

// A binary search based function
// that returns index of a peak element
function findPeakUtil(arr, low, high, n)
{
	// Find index of middle element
	// low + (high - low) / 2
	var mid = low + parseInt((high - low) / 2);

	// Compare middle element with its
	// neighbours (if neighbours exist)
	if ((mid == 0 || arr[mid - 1] <= arr[mid]) &&
		(mid == n - 1 || arr[mid + 1] <= arr[mid]))
		return mid;

	// If middle element is not peak and its
	// left neighbour is greater than it,
	// then left half must have a peak element
	else if (mid > 0 && arr[mid - 1] > arr[mid])
		return findPeakUtil(arr, low, (mid - 1), n);

	// If middle element is not peak and its
	// right neighbour is greater than it,
	// then right half must have a peak element
	else
		return findPeakUtil(
			arr, (mid + 1), high, n);
}

// A wrapper over recursive function findPeakUtil()

function findPeak(arr, n)
{
	return findPeakUtil(arr, 0, n - 1, n);
}

// Driver Code
// /* var arr = [ 1, 3, 20, 4, 1, 0 ]; */





// let arr = [1, 2, 1, 3, 5, 6, 10, 15, 8];
// n = arr.length;
// console.log("Index of a peak point is "+ findPeak(arr, n));

// console.log(peakElementFind(arr, n)); */