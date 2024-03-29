

	// JavaScript program to print Bottom View of Binary Tree
	class Node {
		
		constructor(key) {
		this.data = key; 
		this.hd = 99999; 
		this.left = null; 
		this.right = null;
		}
	}
	class Tree {
		
		constructor(node) {
		
		this.root = node;
		}	
		bottomView() {
		if (this.root == null) return;	
		var hd = 0;	
		var map = {};
		var queue = [];
		this.root.hd = hd;
		queue.push(this.root);

		while (queue.length != 0) {
			var temp = queue.shift();

			hd = temp.hd;

			map[hd] = temp.data;

			if (temp.left != null) {
			temp.left.hd = hd - 1;
			queue.push(temp.left);
			}

			if (temp.right != null) {
			temp.right.hd = hd + 1;
			queue.push(temp.right);
			}
		}

		for (const [key, value] of Object.entries(map).sort(
			(a, b) => a[0] - b[0]
		)) {
			console.log(value + " ");
		}
		}
	}
	var root = new Node(20);
	root.left = new Node(4);
	root.right = new Node(22);
	root.left.left = new Node(6);
	root.left.right = new Node(3);
	root.right.left = new Node(7);
	root.right.right = new Node(25);
	root.left.right.left = new Node(12);
	root.left.right.right = new Node(14);
	var tree = new Tree(root);

	console.log("Bottom view of the given binary tree:");
    tree.bottomView();
