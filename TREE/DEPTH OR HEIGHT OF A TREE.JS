/* Assignment 1
Submission Date - 3rd Sep, 2022, 10 AM
"Problem Statement - Given a binary tree. Your task is to find the height of it.
 Height is the number of nodes present in the longest path of the tree." */

 


// JavaScript program to find height of tree

// A binary tree node
class Node
{
	constructor(item)
	{
		this.data=item;
		this.left=this.right=null;
	}
}

	let root;
	
	/* Compute the "maxDepth" of a tree -- the number of
	nodes along the longest path from the root node
	down to the farthest leaf node.*/
	function maxDepth(node)
	{
		if (node == null)
			return -1;
		else
		{
			/* compute the depth of each subtree */
			let lDepth = maxDepth(node.left);
			let rDepth = maxDepth(node.right);

			/* use the larger one */
			if (lDepth > rDepth)
				return (lDepth + 1);
			else
				return (rDepth + 1);
		}
	}
	
	/* Driver program to test above functions */
	
		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);
        root.left.left.left = new Node(6);

		console.log("Height of tree is : " +
									maxDepth(root));

