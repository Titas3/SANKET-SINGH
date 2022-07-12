// O(logn) time and O(1) space
var searchRange = function (nums, target) {
    const res = [];
    let firstOccurence = -1,
      lastOccurence = -1;
  
    let left = 0,
      right = nums.length;
    // Get firstOccurence
    while (left <= right && left < nums.length) {
      const mid = Math.floor(left + (right - left) / 2);
      const val = nums[mid];
  
      if (target === val) firstOccurence = mid;
      if (target <= val) {
        right = mid - 1;
      } else if (target > val) {
        left = mid + 1;
      }
    }
    if (firstOccurence === -1) {
      return [-1, -1];
    }
  
    res.push(firstOccurence);
  
    // Get last occurence
    (left = 0), (right = nums.length - 1);
    while (left <= right) {
      const mid = Math.floor(left+(right - left) / 2);
      const val = nums[mid];
  
      if (target === val) lastOccurence = mid;
      if (target < val) {
        right = mid - 1;
      } else if (target >= val) {
        left = mid + 1;
      }
    }
    res.push(lastOccurence);
    return res;
  };

  nums = [5,7,7,8,8,10], target = 8;
  console.log(searchRange(nums,target));