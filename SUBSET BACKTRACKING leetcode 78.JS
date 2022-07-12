// var subsets = function(nums) {
//     const n = (1 << nums.length) - 1;
//     const ans = [];
//     for(let i = 0; i <= n; i++) {
//         let x = i, temp = [], j = 0;
//         while(x > 0) {
//             const isSet = x & 1;
//             if(isSet) temp.push(nums[j]);
//             j++;
//             x >>= 1;
//         }
//         ans.push(temp);
//     }
//     return ans;
// };



// var subsets = function(nums) {
//     const powerSet = [[]] // the included empty subset will also be iterated and appended to, inserting [num]
//     for (const num of nums) {
//         const fixedLength = powerSet.length // dont read what we are pushing
//         for (let i = 0; i < fixedLength; i++) powerSet.push([...powerSet[i], num]) // copying an array takes N time
//     }
//     return powerSet
// }; // on best run, beats 99%
// // n * 2^n time (2^n subsets, and each subset takes n time to add because of array copying)
// // output size is also n * 2^n, for 2^n subsets which may be up to n elements in length
// // if we exclude the output size (n * 2^n)
// // this solution is arguably O(1) memory because every subset we create is considered part of the output with no unnecessary duplication


// ar subsets = function(nums) {
//     const results = [[]];
    
//     for (const num of nums) {
//         const newResults = [];
        
//         for (let i = 0; i < results.length; i++) {
//             newResults.push([...results[i], num])
//         }
        
//         results.push(...newResults);
//     }
    
//     return results;
// };


// const getAllSubsets = 
//       theArray => theArray.reduce(
//         (subsets, value) => subsets.concat(
//          subsets.map(set => [value,...set])
//         ),
//         [[]]
//       );

// console.log(getAllSubsets([1,2,3]));


// recursive
const powerSetRecursive = (arr, prefix=[], set=[[]]) => {
    if(arr.length === 0) return// Base case, end recursion
    
    for (let i = 0; i < arr.length; i++) {
        set.push(prefix.concat(arr[i]))// If a prefix comes through, concatenate value

        powerSetRecursive(arr.slice(i + 1), prefix.concat(arr[i]), set)
        
        // Call function recursively removing values at or before i and adding  
        // value at i to prefix
    }
    return set
  }
  
  console.log(powerSetRecursive([1,2,3]))