/* Given an input array of unique elements, return a max-heap created out of the same elements. Expected
worst-case time complexity. O(n log(n))
example:
Input : [2,7,26,25,19,17,1,90,3,36]
Output : [90, 36, 17, 25, 26, 7, 1, 2, 3, 19] */

function heapify(inputArray) {
    //Initialize Heap array
    const heap = [];
    MainLoop:
        for (let element of inputArray) {
            //Push value to end of heap
            heap.push(element);
            //If first element do nothing
            if (!heap.length === 1) continue;
            //Calculating initial n
            let n = heap.length - 1;
            InnerLoop:
                while (n !== 0) {
                    //Calculate parent Index
                    const parentIndex = Math.floor((n - 1) / 2);
                    //If parent is greater than child, then all elements are in place
                    if (heap[parentIndex] > heap[n]) break InnerLoop;
                    //Swap parent with child
                    let temp = heap[parentIndex];
                    heap[parentIndex] = heap[n];
                    heap[n] = temp;
                    //parent becomes new n
                    n = parentIndex
                }
        }
    return heap;
}
console.log(heapify([2, 7, 26, 25, 19, 17, 1, 90, 3, 36]))