function countingSortNegetiveElements(arr){
    let maxEl = Math.max(...arr);
    let minEl = Math.min(...arr);
    let range = maxEl - minEl + 1;
    let freq = new Array(range).fill(0);
    for(let i = 0; i < arr.length; i++){
        let currElement = arr[i];
        freq[currElement - minEl]++;
    }
    for(let i = 1; i < freq.length; i++){
        freq[i] += freq[i-1];
    }
    let output = new Array(arr.length);
    for(let i = arr.length-1; i>= 0; i--){
        let currelement = arr[i];
        let index = freq[currelement - minEl];
        output[index - 1] = currelement;
        freq[currelement - minEl]--;
    }
    return output;
}
console.log(countingSortNegetiveElements([2,1,-3,4,-3,-2,-1,5,6,10,6]));