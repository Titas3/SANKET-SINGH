// 2.Given a linked list, move its last element to the front position

class ListNode {
    constructor(data) {
    this.data = data
    this.next = null
    }
    }
    class LinkedList {
    constructor(head = null) {
    this.head = head
    this.length=0;
    }
    addNode(node){
    if(this.head==null){
    this.head=node;
    return;
}
let temp = this.head;
while(temp.next!=null)
temp=temp.next;
temp.next = node;
this.length+=1;
}
printList(){
let data= []
let temp = this.head;
while(temp!=null){
data.push(temp.data);
temp = temp.next;
}
console.log(...data);
}
udpateLL() {
let current = this.head;
let prev_current = null;
while(current.next!=null){
prev_current = current;
current=current.next;
}
prev_current.next = null;
current.next = this.head;
this.head=current;
}
}
values = [1,2,3,4,5]
let ll = new LinkedList();
for(let idx=0;idx<values.length;idx++){
let node = new ListNode(values[idx]);
ll.addNode(node);
}
ll.printList();
ll.udpateLL();
ll.printList();