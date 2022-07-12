let arr = [3, 88, 21, 5, 6]
function CyclicallyRotateArray(arr){
    let temp = arr[0];
    arr.shift();
    //end = arr.length-1
    let end = temp;
    arr.push(end);
    return arr;


}
console.log(CyclicallyRotateArray(arr));

SANKET

function cycleRotate(arr) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let n = arr.length;
    let x = arr[n-1];
    for(let i = n-1; i >= 1; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = x;
}

arr = [1,2,3,4];
cycleRotate(arr);
console.log(arr)

// GEEKS FOR GEEKS
// let temp=arr.pop();
// arr.unshift(temp);
// return arr;


// function shiftCyclically(arr, n){
//     var i = 0
//     var j = n-1
//     while(i != j){
//         let temp;

//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j]= temp;
//         i =i+1
//     }
// }

// var arr = [1, 2, 3, 4, 5];
// var n = arr.length;

// console.log("Given array is <br>");
// for(var i = 0; i< n; i++)
//     console.log(arr[i] + " ");
    
// shiftCyclically(arr, n);

// console.log("<br> Output array is <br>");
// for(var i = 0; i < n; i++)
//     console.log(arr[i] + " ");