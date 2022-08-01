// https://www.spoj.com/problems/ABCDEF/ 
// You are given a set S of integers between -30000 and 30000 (inclusive).

// Find the total number of sextuples  
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

let arr = [3,2];
let lhs = [], rhs = [];
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        for(let k = 0; k < arr.length; k++){
            lhs.push((arr[i]*arr[j] + arr[k]));
            if(arr[i] != 0){
                rhs.push((arr[i]*(arr[j] + arr[k])));
            }
        }
    }
}
lhs.sort((a,b)=> a-b);
rhs.sort((a,b)=>a-b);
let ans = 0;
for(let i = 0;i<lhs.length;i++){
    let ub = upperBound(rhs, lhs[i]);
    let lb = lowerBound(rhs, lhs[i]);
    ans += (ub - lb);
}
console.log(ans);

// Time: O(n*n*n*logn)
// Space: O (n*n*n) 