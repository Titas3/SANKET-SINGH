// O(n)

/*  function checkDuplicate1(arr,x){
    for(let i = 1; i<arr.length;i++){
        if(arr[i] == x && arr[i-1] == x) return true;
    }
    return false;
}
function checkDuplicate2(arr, x){
    for(let i = 0; i<arr.length;i++){
        if(arr[i] == x && arr[i+1] == x) return true;
    }
    return false;
}
let arr= [1,2,3,3,4,5,5,6,7,7,8,8,8,9,11,13,13];
target = 13; 
console.log(checkDuplicate1(arr,target));
console.log(checkDuplicate(arr,target)); 
 */


// Binary search O(logn)

 function checkDuplicationOptimized(arr,x){
    let lo = 0, hi = arr.length-1;
    while(lo<=hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] == x){
            return true;
        } else if (arr[mid] > x){
            hi = mid - 1;
        } else{
            lo = mid +1;
        }
        }
        return false;
    }

let arr= [1,2,3,3,4,5,5,6,7,7,8,8,8,9,11,13,13];
target = 13; 
console.log(checkDuplicationOptimized(arr,target)); 