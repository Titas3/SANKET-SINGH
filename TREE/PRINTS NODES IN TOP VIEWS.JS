
// Javascript program to print top
// view of binary tree

class Node
{
	constructor(data)
	{
		this.data=data;
		this.left = this.right = null;
		this.hd = 0;
	}
}

// Driver Code
function topview(root)
{
	if(root == null)
		return;
	let q = [];
	let m = new Map();
	let hd = 0;
	root.hd = hd;
	q.push(root);
	
	while(q.length!=0)
	{
		root = q[0];
		hd = root.hd;
		if(!m.has(hd))
			m.set(hd,root.data);
		if(root.left)
		{
			root.left.hd = hd - 1;
			q.push(root.left);
		}
		if(root.right)
		{
			root.right.hd = hd + 1;
			q.push(root.right);
		}
		q.shift()
	}
	
	let arr = Array.from(m);
	arr.sort(function(a,b){return a[0]-b[0];})
	
	for (let [key, value] of arr.values())
	{
		console.log(value+" ");
	}
}
/* 
   1
 /   \
2      3
\   
  4  
    \
      5
       \
         6 */
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.right = new Node(4)
root.left.right.right = new Node(5)
root.left.right.right.right = new Node(6)
console.log("Following are nodes in top",
	"view of Binary Tree")
topview(root)
