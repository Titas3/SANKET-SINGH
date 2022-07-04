// "2. Write a program to rearrange the elements such like positive numbers 
// shift to the end and negative numbers to the start."

// function rearrange(arr, left, right)
// {
	
// 	while (left <= right)
// 	{
// 		if (arr[left] > 0 && arr[right] > 0)
// 			right -= 1;
		
// 		else if(arr[left] > 0 && arr[right] < 0)
// 		{
// 			let temp = arr[left];
// 			arr[left] = arr[right];
// 			arr[right] = temp;
// 			left += 1;
// 			right -= 1;
// 		}
		
// 		else if (arr[left] < 0 && arr[right] < 0)
// 			left += 1;
// 		else
// 		{
// 			left += 1;
// 			right -= 1;
// 		}
// 	}
// }

// function printArray(arr, right)
// {
	
// 	for(let i = 0; i < right; i++)
// 		console.log(arr[i] + " ");
// }

// let arr = [-5, 3, -4, 88, -9, -10, 21, 5, 6,-33];
// let size = arr.length;

// rearrange(arr, 0, size - 1);
// printArray(arr, size);


// ANOTHER APPROACH SAMEER

let arr = [1,-5,4,3,-15,-5,2,4,-1,5]

function swap(arr,l,r){
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

function sort(arr){
    let start = 0,end = arr.length-1
    while(start<= end){
        if(arr[start] > 0 && arr[end] < 0){
            swap(arr,start,end);
        }else if(arr[start] < 0){
            start ++;
        }else{
            end --;
        }
    }
    return arr;
}

console.log(sort(arr));
