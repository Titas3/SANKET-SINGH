let arr = [1,2,3,4,-1,5,2,6];

function calculatePrefixsum(arr){
    let prefixSum = [];
    prefixSum[0] = arr[0];
    for(let i = 1; i< arr.length; i++){
        prefixSum[i]= prefixSum[i-1] + arr[i];
    }
    return prefixSum;
}
console.log(calculatePrefixsum(arr));