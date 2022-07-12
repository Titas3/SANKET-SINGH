function LinearSearch(arr, x){
    // thus function searches for the index on which x is present
    for(let i = 0; i<arr.length;i++){
        if(arr[i] == x) return i;
    }
    return undefined;
}
arr = [4,5,2,7,0,1,3,5,6];
target = 3;
console.log(LinearSearch(arr,target));



/* function globalLinearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            results.push(i)
        }
    }
    // If results array is empty, return -1
    if(!results){
        return -1
    }
 
    return results
} */