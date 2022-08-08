class A  {
     #y// declare private variable outside the constructor
    constructor(){
        this.x = undefined;
        this.#y = null;//private // inside the constructor set its value
    }
    display(){
        console.log(this.x);
    }
    getY(){
        console.log(this.#y);
    }
    putY(el){
        if(typeof el != 'string'){
            return;
        }
        this.#y = el;
    }
}
const aObj = new A();
console.log(aObj);

aObj.x = 10;
aObj.y = 9;
// aObj.#y = 93;
console.log(aObj);
// aObj.putY("Titas")
aObj.putY(23)
aObj.getY();
