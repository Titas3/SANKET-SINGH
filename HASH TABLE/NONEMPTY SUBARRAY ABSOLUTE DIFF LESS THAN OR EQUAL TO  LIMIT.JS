var longestSubarray = function(nums, limit) {
    const maxQueue = [];
    const minQueue = [];
    let start = 0;
    let res = 0;
    for(let end = 0; end < nums.length; end ++) {
        const num = nums[end];
        while(maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < num) {
            maxQueue.pop();
        }
        
        while(minQueue.length > 0 && minQueue[minQueue.length - 1] > num) {
            minQueue.pop();
        }
        maxQueue.push(num);
        minQueue.push(num);
        if(maxQueue[0] - minQueue[0] > limit) {
            if(maxQueue[0] === nums[start]) {
                maxQueue.shift();
            }
            
            if(minQueue[0] === nums[start]) {
                minQueue.shift();
            }
            
            start +=1;
        }
        res = Math.max(res, end - start + 1);
    }
    
    return res;
};

console.log(longestSubarray([8,2,4,7],4));
console.log(longestSubarray([10,1,2,4,7,2],5));
console.log(longestSubarray([4,2,2,2,4,4,2,2],0));




/* Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2. */