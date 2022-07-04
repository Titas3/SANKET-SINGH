let arr = [2, 4, -1, -2, 4, -5, 5]
function sumX(arr,target){
    let obj = {};
    for(let i =0; i < arr.length;i++){
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }
    for(let i = 0; i< arr.length; i++){
        if(obj[target-arr[i]]){
            return true;
        }
    }
    return false;
}
console.log(sumX(arr,6));