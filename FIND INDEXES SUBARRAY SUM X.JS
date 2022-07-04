let arr = [2,9,4,2,20,1,-5];

function FindIndexesSubarray(arr,target){
    let firstIndex, secondIndex;
    let obj = {};
    for(let i = 0; i < arr.length;i++){
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
    }
    for(let i = 0; i < arr.length; i++){
        if(obj[target-arr[i]]){
            firstIndex = i;
            break;
        }
    }
    for(let j = 0; j < arr.length; j++){
        if(target - arr[firstIndex] === arr[j]){
            secondIndex = j;
        }
    }
    return [firstIndex,secondIndex]
}
console.log(FindIndexesSubarray(arr,15));