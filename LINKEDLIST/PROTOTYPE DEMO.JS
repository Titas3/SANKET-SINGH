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