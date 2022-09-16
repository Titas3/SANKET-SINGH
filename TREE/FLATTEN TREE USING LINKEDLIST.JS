

// Javascript program to flatten a given
// Binary Tree into linked list

// A binary tree node
class Node
{
	constructor(key)
	{
		this.data = key;
		this.left = null;
		this.right = null;
	}
}

var root;

// Function to convert binary tree into
// linked list by altering the right node
// and making left node NULL
function flatten(node)
{
	
	// Base case - return if root is NULL
	if (node == null)
		return;
		
	// Or if it is a leaf node
	if (node.left == null &&
		node.right == null)
		return;
		
	// If root.left children exists then we have
	// to make it node.right (where node is root)
	if (node.left != null)
	{
		
		// Move left recursively
		flatten(node.left);
		
		// Store the node.right in
		// Node named tempNode
		var tempNode = node.right;
		node.right = node.left;
		node.left = null;
		
		// Find the position to insert
		// the stored value
		var curr = node.right;
		while (curr.right != null)
		{
			curr = curr.right;
		}
		
		// Insert the stored value
		curr.right = tempNode;
	}
	
	// Now call the same function
	// for node.right
	flatten(node.right);
}

// Function for Inorder traversal
function inOrder(node)
{
	
	// Base Condition
	if (node == null)
		return;
		
	inOrder(node.left);
	console.log(node.data + " ");
	inOrder(node.right);
}

// Driver code
/* 1
	/ \
2	 5
/ \	 \
3 4	 6 */
root = new Node(1);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.right = new Node(6);

console.log("The Inorder traversal after " +
			"flattening binary tree ");					
flatten(root);
inOrder(root);

