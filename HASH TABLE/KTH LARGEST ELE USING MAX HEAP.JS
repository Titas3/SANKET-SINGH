var findKthLargest = function(nums, k) {
    const mid = Math.floor(nums.length/2);
    
    // by moving from the middle to the start bubble down smaller nums
    // to create max heap
    for(let i = mid; i >= 0; i--) bubbleDown(i);
    
    let result;
    
    // remove from the top of the heap k number of times
    while(k--) {
        swap(0, nums.length-1);
        result = nums.pop();
        bubbleDown(0);
    }
    
    function bubbleDown(idx) {
        const leftChild = 2 * idx + 1;
        const rightChild = 2 * idx + 2;
        let max = idx;
        
        if(leftChild < nums.length && nums[leftChild] > nums[max]) max = leftChild;
        if(rightChild < nums.length && nums[rightChild] > nums[max]) max = rightChild;
        
        if(max !== idx) {
            swap(idx, max);
            bubbleDown(max);
        }
    }
    
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    return result;
};
let nums = [3,2,3,1,2,4,5,5,6];
let k =4;
console.log(findKthLargest(nums,k));