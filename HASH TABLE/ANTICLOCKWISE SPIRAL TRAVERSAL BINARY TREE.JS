
// JavaScript code to implement the above approach

class Node {

	constructor(data){
		this.data = data;
		this.left = null,this.right = null;
	}

}

function antiClockWiseSpiral(root){

	// Initialize the queue
	let q = [root]

	// Initialize the list
	let topone=[]

	// Until queue is not empty
	while (q.length>0){
		let l = q.length

		// l is greater than zero
		while (l > 0){
			let nd = q.shift()
			if (nd != null){
				topone.push(nd)
				if (nd.right != null)
					q.push(nd.right)
				if (nd.left != null)
					q.push(nd.left)
			}
			l-=1
		}
		
		topone.push(null)
	}

	let top = true
	let l = 0,r = topone.length - 2

	while (l < r){
		if (top){
			while (l < topone.length){
				let nd = topone[l]
				l+=1
				if (nd == null)
					break
				console.log(nd.data," ")
			}
		}
		else{
			while (r >= l){
				let nd = topone[r]
				r-=1
				if (nd == null)
					break
				console.log(nd.data," ")
			}
		}
		
		top = top^1
	}
	console.log("------>>>>");
}


// driver code
// Build Tree
    /*       1
           /  \
          2    3
         /   /   \
        4    5    7
       / \       / 
      10  11     8
          */
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.right.left = new Node(5)
root.right.right = new Node(7)
root.left.left.left = new Node(10)
root.left.left.right = new Node(11)
root.right.right.left = new Node(8)

antiClockWiseSpiral(root)

/* o/package;-->>  1  
10  
11  
8  
3  
2  
4  
5  
7  
------>>>>
 */