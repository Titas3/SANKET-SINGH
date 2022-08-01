/* 
SUBSUMS - Subset Sums
#binary-search #bitmasks
Given a sequence of N (1 ≤ N ≤ 34) numbers S1, ..., SN (-20,000,000 ≤ Si ≤ 20,000,000), determine how many subsets of S (including the empty one) have a sum between A and B (-500,000,000 ≤ A ≤ B ≤ 500,000,000), inclusive.

Input
The first line of standard input contains the three integers N, A, and B. The following N lines contain S1 through SN, in order.

Output
Print a single integer to standard output representing the number of subsets satisfying the above property. Note that the answer may overflow a 32-bit integer.

Example
Input:
3 -1 2
1
-2
3

Output:
5
The following 5 subsets have a sum between -1 and 2:

0 = 0 (the empty subset)
1 = 1
1 + (-2) = -1
-2 + 3 = 1
1 + (-2) + 3 = 2 */

// https://www.spoj.com/problems/SUBSUMS/



function lowerBound(arr, ele){
    /* Time : O(logn);
    Space: O(1); */
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;
    while(start <= end){
        let mid = start + Math.floor((end - start)/2);
        if(arr[mid]>= ele){
            // then the current index can be one of our possible ans
            ans = mid;
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return ans;
}
function upperBound(arr, ele){
    /* Time : O(logn);
    Space: O(1); */
    let start = 0, end = arr.length -1;
    let ans = arr.length;
    while(start <= end){
        let mid = start + Math.floor((end - start)/2);
        if(arr[mid] <= ele){
            //if the mid element is <= element, then jump right
            start = mid + 1;
        }else{
            //we found a potential ans, try to better one left side
            ans = mid;
            end = mid -1;
        }
    }
return ans;
}
 subsets = function(nums) {
         const results = [[]];
        
        for (const num of nums) {
             const newResults = [];
            
            for (let i = 0; i < results.length; i++) {
                 newResults.push([...results[i], num])
            }
            
            results.push(...newResults);
         }
        
         return results;
     };



let arr = [1,-2,3];
let A = -1, B = 2;
const left = arr.slice(0, arr.length/2);
const right = arr.slice(arr.length/2, arr.length);
const m = subsets(left); //implement subsets function
const n = subsets(right);

m.sort((a,b) => a-b);
n.sort((a,b) => a-b);
let ans = 0;
for(let i = 0; i < m.length; i++){
    let lb = lowerBound(n, A-m[i]);//implement lowerBound
    // console.log(lb)
    let ub = upperBound(n, B-m[i]);// implement upperbound
    // console.log(ub)
    ans += (ub - lb);
}
console.log(ans);