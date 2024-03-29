

// JavaScript program for reversing the linked list

var head;

	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	/* Function to reverse the linked list */
	function reverse(node) {
	var prev = null;
	var current = node;
	var next = null;
		while (current != null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		node = prev;
		return node;
	}

	// prints content of double linked list
	function printList(node) {
		while (node != null) {
			console.log(node.data + " ");
			node = node.next;
		}
	}

	// Driver Code
	
		head = new Node(85);
		head.next = new Node(15);
		head.next.next = new Node(4);
		head.next.next.next = new Node(20);

		console.log("Given Linked list");
		printList(head);
		head = reverse(head);
		
		console.log("Reversed linked list ");
		printList(head);

