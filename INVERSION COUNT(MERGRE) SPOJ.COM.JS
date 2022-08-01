/**
 * INVCNT - Inversion Count
#number-theory #sorting
Let A[0...n - 1] be an array of n distinct positive integers. 
If i < j and A[i] > A[j] then the pair (i, j) is called an inversion of A. 
Given n and an array A your task is to find the number of inversions of A.

Input
The first line contains t, the number of testcases followed by a blank space. Each of the t tests start with a number n (n <= 200000). Then n + 1 lines follow. In the ith line a number A[i - 1] is given (A[i - 1] <= 10^7). The (n + 1)th line is a blank space.

Output
For every test output one line giving the number of inversions of A.
 */
/**
 * https://www.spoj.com/problems/INVCNT/
 */




let invcnt = 0;
function merge(arr, start, mid, end){
    let m1 = mid - start + 1; // length of the first half
    let m2 = end - mid; // length of the first half
    let A = Array(m1);
    let B = Array(m2);

    for(let i = 0; i < m1; i++){
        A[i] = arr[start + 1]; // extracted the left half
    }
    for(let j = 0; j < m2; j++){
        B[j] = arr[mid + j + 1]; // extracted the right half
    }

    let n = A.length;
    let m = B.length;
    let i = 0, j = 0, k = start;
    // i -> A, j -> B, k -> C
    while(i < n && j < m) {
        if(A[i] < B[j]) {
            arr[k] = A[i];
            i++;
            k++;
        } else {
            // if(A[i] > 2*B[j]) condition for double inversion
            invcnt += (m1 - i);
            arr[k] = B[j];
            j++;
            k++;
        }
    }
    // if Array A is exhausted first and few elements are left in B
    while (j < m) {
        arr[k] = B[j];
        j++;
        k++;
    }
    // If array B is exhausted and few elements are left in A
    while (i < n) {
        arr[k] = A[i];
        i++;
        k++;
    }
}

function mergesort(arr, start, end) {
    // this function does merge sort on array from [start..end]
    /**
     * Time: O(nlogn)
     * Space: O(n)
     */
    if(start >= end) {
        return;
    }
    let mid = Math.floor((start + end)/2);
    mergesort(arr, start, mid);
    mergesort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}

let arr = [2,3,8,6,1];
mergesort(arr, 0, arr.length - 1);
// console.log(arr);
console.log(invcnt);

