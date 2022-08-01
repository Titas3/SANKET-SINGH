// file:///C:/Users/user/Downloads/Advanced_Sorting_Algorithm.pdf


function countingSort(arr){
    let maxElement = Math.max(...arr); // O(n)
    let freq = Array(maxElement + 1).fill(0); // O(1)
    for(let i = 0; i < arr.length; i++){ // O(n)
    freq[arr[i]]++;
    }
    let k = 0;
    for(let i = 0; i < freq.length; i++){// O(maxElement + n)
        while(freq[i]>0){
            arr[k] = i;
            k++;
            freq[i]--;
        }

    }
    return arr;
}
let arr = [2,3,1,1,2,4,56,7,3,2,8,1,2];
console.log(countingSort(arr));