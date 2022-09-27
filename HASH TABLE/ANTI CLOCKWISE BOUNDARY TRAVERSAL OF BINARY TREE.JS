
	
	// JavaScript program to print boundar	// traversal of binary tree
	
	class Node
	{
		constructor(item) {
		this.left = null;
		this.right = null;
		this.data = item;
		}
	}
	
	let root;

	function printLeaves(node)
	{
		if (node == null)
			return;

		printLeaves(node.left);
		// Print it if it is a leaf node
		if (node.left == null && node.right == null)
			console.log(node.data + " ");
		printLeaves(node.right);
	}

	function printBoundaryLeft(node)
	{
		if (node == null)
			return;

		if (node.left != null) {
	
			console.log(node.data + " ");
			printBoundaryLeft(node.left);
		}
		else if (node.right != null) {
			console.log(node.data + " ");
			printBoundaryLeft(node.right);
		}
		
	}

	function printBoundaryRight(node)
	{
		if (node == null)
			return;

		if (node.right != null) {
		
			printBoundaryRight(node.right);
			console.log(node.data + " ");
		}
		else if (node.left != null) {
			printBoundaryRight(node.left);
			console.log(node.data + " ");
		}
		
	}
	function printBoundary(node)
	{
		if (node == null)
			return;

		console.log(node.data + " ");

		
		printBoundaryLeft(node.left);

		printLeaves(node.left);

		printLeaves(node.right);

		printBoundaryRight(node.right);
	}
	
	root = new Node(20);
	root.left = new Node(8);
	root.left.left = new Node(4);
	root.left.right = new Node(12);
	root.left.right.left = new Node(10);
	root.left.right.right = new Node(14);
	root.right = new Node(22);
	root.right.right = new Node(25);
	printBoundary(root);

