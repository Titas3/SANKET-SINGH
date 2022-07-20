
function FindUniqueElementByBinarySearch(nums)
	{
	
		// A Binary Search based method to find the element
		// that appears only once
		var start = 0, end = nums.length - 1, mid;

		// For Edge Cases
		if (nums.length
			== 1) // If only one element is in the array
			return nums[0];

		if (nums[start]
			!= nums[start + 1]) // If the first element
								// is the element that
								// appears only once
			return nums[start];

		if (nums[end]
			!= nums[end
					- 1]) // If Last element is the element
						// that appears only once
			return nums[end];

		// Binary Search
		while (start <= end)
		{
			mid = start + (end - start) / 2;
			
			// CASE 1
			if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1])
				
				return nums[mid];
				
			// CASE 2 and CASE 3
			else if ((nums[mid] == nums[mid + 1]&& mid % 2 == 0)
                    || (nums[mid] == nums[mid - 1]&& mid % 2 != 0))	
                    	
				start = mid + 1;
				
			// CASE 4 and CASE 5
			else
				end = mid - 1;
		}
		
		// If no such element found
		return -1;
	}
	
		var arr = [ 1, 1, 3, 4, 4, 5, 5, 6, 6,7,7];
		var element = FindUniqueElementByBinarySearch(arr);
        console.log(`The required element is ${element}`);
        //console.log(element);
		// if (element = 8)
		// 	console.log(`The required element is ${element}`);
		// else
		// 	console.log("There is no such element");

