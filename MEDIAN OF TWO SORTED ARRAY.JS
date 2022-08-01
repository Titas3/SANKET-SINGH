/* PROBLEM 4: Median of two sorted arrays (30 minutes)
We are given with two sorted arrays a [ ] and b [ ], the task is to find the median of these two sorted arrays, where the
number of elements in the first array is n and the number of elements in the second array is m.
Constraints:
● a(1 <= n <= 100)
● b(1 <= m <= 100)
● Input:
● Array of numbers
● Array of numbers
Sample Input:
 [7, 12, 14, 15]
 [1, 2, 3, 4, 9, 11]
Sample Output:
 The median is 8. */


 var findMedianSortedArrays1 = function(nums1, nums2) {
    // To make sure first input array always shorter in length
        if(nums1.length > nums2.length){
            return findMedianSortedArrays1(nums2, nums1);
        }
        let x = nums1.length;
        let y = nums2.length;
        let start = 0;
        let end = x;
        
        while(start <= end){
            
            const posX = Math.floor(start + (end - start) / 2);
            const posY = Math.floor((x + y + 1) / 2) - posX;
            
            const maxLeftX = posX === 0 ? -Infinity : nums1[posX - 1];
            const minRightX = posX === x ? Infinity : nums1[posX];
            
            const maxLeftY = posY === 0 ? -Infinity : nums2[posY - 1];
            const minRightY = posY === y ? Infinity : nums2[posY];
            
            if(maxLeftX <= minRightY && maxLeftY <= minRightX){
                if((x + y) % 2 === 0){
                    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
                } else {
                    return Math.max(maxLeftX, maxLeftY);
                }
            } else if(maxLeftX > minRightY){
                end = posX - 1;
            } else {
                start = posX + 1;
            }
            
        }
    };

    // --------------------------------------->>>>>>>>>>>>>>>.

 var findMedianSortedArrays = function(nums1, nums2) {
    //find the smallest length array
    const len1 = nums1.length;
    const len2 = nums2.length;
    
    //swap if len1>len2
    if(len1 > len2) return findMedianSortedArrays(nums2, nums1);
    
    //find high and low
    let lo = 0;
    let hi = len1;
    
    while(lo <= hi) {
        
        //find cut1 and cut2
        let cut1 = Math.floor((lo+hi)/2);
        let cut2 = Math.floor((len1+len2)/2) - cut1;
        
        //find l1 , l2, r1, r2
        let l1 = (cut1 === 0 ? Number.NEGATIVE_INFINITY : nums1[cut1-1]);
        let l2 = (cut2 === 0 ? Number.NEGATIVE_INFINITY : nums2[cut2-1]);
        let r1 = (cut1 === len1 ? Number.MAX_VALUE : nums1[cut1]);
        let r2 = (cut2 === len2 ? Number.MAX_VALUE : nums2[cut2]);
        
        //loop again if l1>r2 || l2>r1
        if(l1>r2) hi = cut1-1;
        else if(l2>r1) lo = cut1+1;
        else {
    
            //return median for even and odd
            if((len1+len2)%2 === 0) return (Math.max(l1,l2) + Math.min(r1,r2))/2
            else return (Math.min(r1,r2))
        }
    }
    return -1;

};
let A = [7, 12, 14, 15];
let B = [1, 2, 3, 4, 9, 11];
console.log(findMedianSortedArrays(A,B));




