/* 2. Given a stack, find the max and minimum value stored inside it
CODE: */
const maxMin=(s)=>{
let k = s;
let max = k[k.length-1];
let min = k[k.length-1];
while(k.length>0){
max=Math.max(k[k.length-1],max);
min = Math.min(k[k.length-1],min);
k.pop();
}
return {"max":max,"min":min}
}
let s = [1,2, 4];
console.log(maxMin(s));