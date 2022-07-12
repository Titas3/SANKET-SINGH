var longestConsecutive = function(nums) {
    let best = 0;
    const set = new Set(nums);
    for(const num of set) {
        if(!set.has(num-1)) {
            let y = num;
            while(set.has(y)) {
                y++;
            }
            best = Math.max(best, y-num);
        }
    }
    return best;
}
nums = [100,4,200,1,3,2];
console.log(longestConsecutive(nums));