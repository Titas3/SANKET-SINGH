function checkSubarrayWithSum0(arr) {
    /**
     * Time: O(n^2) Space: O(1)
     */
    // we try to generate all possible aubarrays
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) {
            sum += arr[j]; 
            if(sum == 0) return true;
        }
    }
    return false;
}

console.log(checkSubarrayWithSum0([5,2,1,-3]));