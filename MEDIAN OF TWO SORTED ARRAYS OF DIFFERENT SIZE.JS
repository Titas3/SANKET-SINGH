// let arr1=[1,3];
// let arr2=[2];
// for(let i =0;i<=arr1.length;i++){
    
// }

// Javascript program for the above approach

function Solution(arr, n)
{

	// If length of array is even
	if (n % 2 == 0)
	{
	var z = n / 2;
	var e = arr[z];
	var q = arr[z - 1];
	var ans = (e + q) / 2;
	return ans;
	}
	
	// If length if array is odd
	else
	{
	var z = Math.floor(n / 2);
	return arr[z];
	}
}

// Driver Code
// TODO Auto-generated method stub
// var arr1 = [ -5, 3, 6, 12, 15 ];
// var arr2 = [ -12, -10, -6, -3, 4, 10 ];
var arr1 = [ 1,3 ];
var arr2 = [ 2];

var i = arr1.length;
var j = arr2.length;

var l = i+j;
// Merge two array into one array
const arr3 = arr1.concat(arr2);

// Sort the merged array
arr3.sort(function(a, b) {
return a - b;
});

// calling the method
console.log("Median = " + Solution(arr3, l));


