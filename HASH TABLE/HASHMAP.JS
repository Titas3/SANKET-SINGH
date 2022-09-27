class Node {
    constructor(k,v){
        this.key = k;
        this.value = v;
        this.next = null;
    }
}
class Hashmap {
    constructor(){
        this.currSize = 2; // current size of the array
        this.arr =[];
        this.lambda = 0.5;
        this.elements = 0;// no of elements inserted in the hashmap

        for(let i =0; i < this.currSize; i++){
            this.arr.push(null);
        }
    }

hash(key){
    let ans = 0;
    let c = 101;// we can take any prime number
    let m = this.currSize;
    let x = 1;
    for(let i = 0; i < key.length; i ++){
        ans = ((ans%m) + (key.charCodeAt(i)*x)%m)%m;
        x = x*c;
        // console.log(ans);
    }
    return ans;
}

insert(k, v){
    let bucketIndex = this.hash(k);
    let newNode = new Node(k, v);
    //add at head in ll
    newNode.next = this.arr[bucketIndex];
    this.arr[bucketIndex] = newNode;
    this.elements++;
   // check load factor
    let currLoadFactor = this.elements / this.currSize;
    if(currLoadFactor > this.lambda)
    {
        this.rehash();
    }
}

rehash(){
    this.elements = 0;
    let oldSize = this.currSize;
    this.currSize = 2*oldSize;
    let oldArray = this.arr;
    this.arr = [];
    for(let i=0; i < this.currSize; i ++){
        this.arr.push(null);
    }
    for(let i = 0; i < oldArray.length; i++){
        let temp = oldArray[i];
        while(temp != null){
            this.insert(temp.key, temp.value);
            temp = temp.next;
        }
    }

}

search(key){
    let bucketIndex = this.hash(key);
    let temp = this.arr[bucketIndex];
    while(temp != null){
        if(temp.key == key) return temp.value;
    }
    return undefined;
}

display(){
    console.log(this.arr)
}
}

let hm = new Hashmap();
hm.insert("Titas", 1);
console.log("------->>")
hm.display()
hm.insert("Suman", 2);
console.log("------->>")
hm.display()
hm.insert("Sunny", 3);
console.log("------->>")
hm.display()
hm.insert("Sam", 4);
console.log("------->>")
hm.display()

// console.log(hm.search("varun"));
// console.log(hm.search("Sameer"));