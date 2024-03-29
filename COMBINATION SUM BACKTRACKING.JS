


// Given an array arr and sum s. Find all unique
//  combinations from an array whose sum is equal to s.



var combinationSum = function(candidates, target) {
    const results = [];
    const buffer = [];
    
    const run = (start, sum) => {
        if (sum === target) {
            results.push([...buffer]);
        } else {        
            for (let i = start; i < candidates.length; i++) {
                const newSum = sum + candidates[i];

                if (newSum <= target) {
                    buffer.push(candidates[i]);

                    run(i, newSum);

                    buffer.pop();
                }
            }
        }
    };
    
    run(0, 0);
    
    return results;
    
};

let candidates = [2,3,6,7];
let target = 7;
console.log(combinationSum(candidates,target));