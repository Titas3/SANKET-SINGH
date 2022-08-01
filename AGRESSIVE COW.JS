/* PROBLEM 1: Aggressive Cows (30 minutes)
Farmer Vijay has a larger barn, with ‘n’ stalls. The stalls are located at the position from ‘b1…….bn’ along a straight line. His cows
‘c’ are not interested in his barn layout and become aggressive towards each other once put into a stall, to avoid the cows
getting hurt each other. The Farmer wishes to assign the cows to stalls, such that the minimum distance between any two of
them is as large. Find the largest minimum distance.
 Constraints:
● n(2 <= n <= 100000)
● b1…..bn(0 <= ai <= 1000000)
● c(2 <= c <= N)
 Input:
● No of stalls (n)
● Array of stalls (arr[n])
● No of cows(c)
 Sample Input:
 5
 [1 2 4 8 9]
 3
 Sample Output: 3 */

 function canPlaceCows(c, mid, stalls){
    //Time: O(n)
    let lastPlacedPosition = 0;
    c--; // as first cow is already placed
    for(let i = 1; i < stalls.length; i++){
        if(stalls[i] - stalls[lastPlacedPosition] >= mid){
            c--;// place one more cow
            lastPlacedPosition = i;
        }
        if(c == 0) return true; // we placed all the cows
    }
    //if we didnt place all the cows, then we will never return true from above
    return false;
 }
 function getMaximisedMinDist(stalls, c){
    // time : O(nlogn) Space : O(1)
    stalls.sort((a,b) => a-b); // sorting the stalls to itterate easily
    let lo = 1, hi = stalls[stalls.length-1];
    let ans = 1;
    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(canPlaceCows(c, mid, stalls) == true){
            //if we are able to place the cows with atleast mid distance,
            //the mid is possible ans, but we can find something greater than mid also
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid -1;
        }
    }
    return ans;
 }
 let stalls = [1,2,4,8,9];
 let c = 3;
 console.log(getMaximisedMinDist(stalls, c));