function binarySearch(sortedArray, key){
    return binarySearchHelper(sortedArray, key, 0, sortedArray.length-1)
 }
 
 function binarySearchHelper(sortedArray, key, start, end){
     
     if(start > end) return -1;
     
     let middle = Math.floor((start + end) / 2);
 
     if (sortedArray[middle] === key) {
         // found the key
         return middle;
     } else if (sortedArray[middle] < key) {
         // continue searching to the right
         binarySearchHelper(sortedArray, key, mid+1, end)
         
     } else {
         // search searching to the left
         binarySearchHelper(sortedArray, key, mid, end-1)
     }
     
 
 }