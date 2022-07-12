function FindIndexLessThanX(arr, x){
    let start = 0; end = arr.length - 1;
    let ans = arr.length;
    while(start <= end){
let mid = Math.floor(start + (end - start)/2);
if(arr[mid]>= x){

    end = mid - 1;

}else{
    ans = mid;
    start = mid+1

}
    }
    return ans;
}

let arr = [1,2,3,3,3,4,5,5,6,7], target = 6;
console.log(FindIndexLessThanX(arr,target));






/* 
int next(int arr[], int target, int end)
{
	// Minimum size of the array should be 1
	if(end == 0) return -1;
	// If target lies beyond the max element, than the index of strictly smaller
	// value than target should be (end - 1)
	if (target > arr[end - 1]) return end-1;

	int start = 0;

	int ans = -1;
	while (start <= end)
	{
		int mid = (start + end) / 2;

		// Move to the left side if the target is smaller
		if (arr[mid] >= target)
		{
			end = mid - 1;
		}

		// Move right side
		else
		{
			ans = mid;
			start = mid + 1;
		}
	}
	return ans;
}

// Driver code
int main()
{
	int arr[] = { 1, 2, 3, 5, 8, 12 };
	int n = sizeof(arr)/sizeof(arr[0]);
	cout << (next(arr, 5, n));
	return 0;
}
 */
// This code is contributed by d-dalal
