function OptimisedSubarraySum(arr){
    // Time : O(n)
    //space: O(1)
    for(let i = 1; i<arr.length; i++){
        arr[i]=arr[i-1]+arr[i];
    }
    let obj={};
    for(let i =0; i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1
        }else obj[arr[i]]=1;
    }

for(let key in obj){
    if(obj[key]>=2|| key == 0){
        return true;
    }
}
return false;
}
console.log(OptimisedSubarraySum([3,4,-7,3,1,3,1,-4,-2,-2]));
