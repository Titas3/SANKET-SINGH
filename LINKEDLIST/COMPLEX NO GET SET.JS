class Complex {
    #real;
    #imag;
    constructor(r,i){
        this.#real = r;
        this.#imag = i;
    }
    getReal(){
        return this.#real;
    }
    getImag(){
        return this.#imag;
    }
    setReal(r){
        this.#real = r;
    }
    setImag(i){
        this.#imag = i;
    }
    display(){
        console.log(`${this.#real} + i${this.imag}`);
    }
}