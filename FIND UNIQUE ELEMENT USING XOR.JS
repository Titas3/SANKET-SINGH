function findUnique(arr){
    //Time: O(n) Space : O(1)
    let ans = 0;
    for(let i = 0; i<arr.length; i++){
        ans = ans^arr[i]
    }
    return ans;
}
let arr = [1,1,4,4,5,5,11,17,17]
console.log(findUnique(arr));


// BRUTE FORCE....----->>>>>>>>>>>>>>


// JavaScript program to find the element that
// appears only once

// A Linear Search based function to find
// the element that appears only once
function search(arr, n)
{
	let ans = -1;
	for (let i = 0; i < n; i += 2) {
		if (arr[i] != arr[i + 1]) {
			ans = arr[i];
			break;
		}
	}

	if (arr[n - 2] != arr[n - 1])
			ans = arr[n-1];

	// ans = -1 if no such element is present.
	console.log(`The required element is ${ans}`);
}

// Driver code
	let ar = [ 1, 1, 2, 4, 4, 5, 5, 6, 6 ];
	let len = ar.length;

	search(ar, len);

	