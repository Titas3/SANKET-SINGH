

// Javascript program to check if three
// sides form a triangle or not

// function to check if three sider
// form a triangle or not
/* Time Complexity: O(1)
Auxiliary Space: O(1) */
function checkValidity(a, b, c)
{
	// check condition
	if (a + b > c && a + c > b && b + c > a)
		return true;
	else
		return false;
}

// Driver function

	let a = 7, b = 10, c = 5;
	
	if (checkValidity(a, b, c))
		console.log("Valid");
	else
		console.log("Invalid");	
