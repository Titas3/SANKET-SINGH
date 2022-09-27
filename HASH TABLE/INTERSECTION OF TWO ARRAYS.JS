/* You are given two integer arrays arr1 and arr2. Populate an array that includes the intersection of arr1 and
arr2.
Remember:
In the resultant array, every element should appear as many times as it is present in both the arrays, including
duplicate elements.
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
 */



// JavaScript program to find intersection of
// two sorted arrays

// Function prints Intersection of arr1[] and arr2[]
// m is the number of elements in arr1[]
// n is the number of elements in arr2[]
function printIntersection(arr1, arr2, m, n)
{
	var i = 0, j = 0;
	while (i < m && j < n)
	{
		if (arr1[i] < arr2[j])
			i++;
		else if (arr2[j] < arr1[i])
			j++;
		else
		{
			console.log(arr2[j++] + " ");
			i++;
		}
	}
}

// Driver code
var arr1 = [ 1, 2, 4, 5, 6 ];
var arr2 = [ 2, 3, 5, 7 ];

var m = arr1.length;
var n = arr2.length;

printIntersection(arr1, arr2, m, n);

