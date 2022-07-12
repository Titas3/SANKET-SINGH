function BinarySearch(arr,x){
    let start = 0, end = arr.length-1;
    while(start<=end){
        //let mid = Math.floor((satrt+end)/2);
        let mid = Math.floor(start + (end - start)/2);
        if(arr[mid]== x) return mid;
        if(arr[mid]> x){
            //reduce tt the left
            end = mid - 1;
        } else{
            //reduce to the right
            start = mid + 1;
        }
    }
    return undefined;
}

arr=[1,2,4,6,8,10,12,14,19];
target= 14;
console.log(BinarySearch(arr,target));