
// JavaScript program to reverse first
// k elements of a queue.

/* Function to reverse the first
K elements of the Queue */
function reverseQueueFirstKElements(k,Queue)
{
	if (Queue.length == 0 || k > Queue.length)
		return;
	if (k <= 0)
		return;

	let Stack = [];

	/* Push the first K elements
	into a Stack*/
	for (let i = 0; i < k; i++) {
		Stack.push(Queue.shift());
	}

	/* Enqueue the contents of stack
	at the back of the queue*/
	while (Stack.length > 0) {
		Queue.push(Stack.pop());
	}

	/* Remove the remaining elements and
	enqueue them at the end of the Queue*/
	for (let i = 0; i < Queue.length - k; i++) {
		Queue.push(Queue.shift());
	}
}

/* Utility Function to print the Queue */
function Print(Queue)
{
	while (Queue.length > 0) {
		console.log(Queue.shift()," ");
	}
}

// Driver code

let Queue = [];
Queue.push(10);
Queue.push(20);
Queue.push(30);
Queue.push(40);
Queue.push(50);
Queue.push(60);
Queue.push(70);
Queue.push(80);
Queue.push(90);
Queue.push(100);

let k = 5;
reverseQueueFirstKElements(k, Queue);
Print(Queue);

