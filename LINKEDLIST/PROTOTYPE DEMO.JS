/* function Product(n,p){
    this.name = n;
    this.price = p;
    this.display = function printProduct(){
        console.log(this.name, this.price);
    }
}
const p = new Product("Iphone", 100000);
p.display();
 */
 
function Product(n) {
    this.name = n;
}
Product.prototype.display = function (msg){
    console.log(this.name, msg);
}
let d = new Product("iphone");
d.display("in stock");


function Product(n, p) {
    this.name = n;
    this.price = p;
    
}

Product.prototype.display = function(msg) {
    console.log("prototype display",msg);
}
const p = new Product("iphone", 100000);
// p.display();

console.log(p.constructor === Product)
console.log(p.__proto__ === Product.prototype);

p.display = function (msg) {
    this.__proto__.display(msg.toUpperCase());
}

p.display("hello");