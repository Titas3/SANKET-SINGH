/* class Product{
    // constructor will be the first function to be called for creating an object
    constructor(n,p){
        this.name = n;
        this.price = p;
    }
    //member function
    displayProduct(){

    }
    buyProduct(){

    }
}

// ------------------->>>>>>>>>>>>
const iphone = new Product("Iphone", 100000); //calls the constructor to create an object
console.log(iphone); // prints the product
console.log(typeof iphone); // typeof iphone is a object
 */
// =======================>>>>>>>>>>>

class Product {
    // constructor will be the first function to be called for creating an object
constructor(n,p){
    console.log("Constructor  called !!!");
    this.name = n;
    this.price = p;
}
//member function
displayProduct(){
    console.log("Name of the product is", this.name);
    console.log("price of the product is", this.price)
}
buyProduct(){
    
}
} 
const iphone = new Product("Iphone", 100000);
//member function can be called by. operator
iphone.displayProduct();