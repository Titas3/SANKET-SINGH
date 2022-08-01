/* https://codepen.io/Titas1/pen/mdxqNpQ

https://jsfiddle.net/2vqyotzh/ */



function countSub(arr, n, x)
{


	var st = 0;


	var end = 0;

	var sum = 0;

	var cnt = 0;

	
	while (end < n) {

	
		sum += arr[end];

		
		while (st <= end && sum >= x) {
			sum -= arr[st];
			st++;
		}

		
		cnt += (end - st + 1);
		end++;
	}

	return cnt;
}


function findSubSum(arr, n, L, R)
{

	
	var Rightcnt = countSub(arr, n, R);

	
	var Leftcnt = countSub(arr, n, L - 1);

	return Rightcnt - Leftcnt;
}

var arr = [2, 3, 5, 8];
var n = arr.length;
var L = 4;
var R = 13;
console.log( findSubSum(arr, n, L, R));

