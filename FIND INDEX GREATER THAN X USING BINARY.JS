function FindIndexGreaterThanX(arr, x){
    let start = 0; end = arr.length - 1;
    let ans = arr.length;
    while(start <= end){
let mid = Math.floor(start + (end - start)/2);
if(arr[mid]<= x){
    //discard left half
    start = mid + 1;
}else{
    //element at mid can be potential answer
    ans = mid;
    end = mid -1;// go and find something even better on left side
}
    }
    return ans;
}

let arr = [1,2,3,3,3,4,5,5,6,7], target = 4;
console.log(FindIndexGreaterThanX(arr,target));