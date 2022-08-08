/* 10-->16-->20

let LinkedList = {
    head : {
        value : 10,
        next: {
            value : 16,
            next : {
                value : 20,
                next: null
            }
        }
    }
} */

class LinkedList{
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail=this.head,
        this.length = 1;
    }
}
const myList = new LinkedList(10);
console.log(myList);