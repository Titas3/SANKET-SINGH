const medianSlidingWindow = (nums = [], k) => {
    const result = []
    const window = nums.slice(0, k)
    window.sort((a, b) => a - b)
    const sortWindow = (removedNum, insertedNum) => {
      const removedIndex = window.findIndex(num => removedNum === num)
      window.splice(removedIndex, 1)
      const insertedIndex = window.findIndex(num => insertedNum < num)
      if (insertedIndex === -1) {
        window.push(insertedNum)
      } else {
        window.splice(insertedIndex, 0, insertedNum)
      }
    }
    const getMedian = () => {
      const middle = Math.floor((window.length - 1) / 2)
      if (window.length % 2 === 1) {
        return window[middle]
      }
      return (window[middle] + window[middle + 1]) / 2
    }
    result.push(getMedian(window))
    for (let i = 1; i < nums.length - k + 1; i++) {
      sortWindow(nums[i - 1], nums[i + k - 1])
      result.push(getMedian())
    }
    return result
  }
  

console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3));





/*   Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
Explanation: 
Window position                Median
---------------                -----
[1  3  -1] -3  5  3  6  7        1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7        3
 1  3  -1  -3 [5  3  6] 7        5
 1  3  -1  -3  5 [3  6  7]       6 */
 
  