// Find the first element having a maximum frequency in a string “unacademy”

// const str = "unacademy";
// const chars = {};
// let maxFrequency = 0, element;
// for (let i of str){
//     chars[i] = chars[i] + 1 || 1;
//     // console.log(chars)
// }
// // console.log(chars)
// for(let key in chars){
//     if(chars[key] > maxFrequency){
//         maxFrequency = chars[key];
//         element=key;
//     }
// }
// console.log(element);



// ANOTHER APPROACH
let string = "unacademy";
function maxFrequency(string){
    string = string.split("");
    let obj = {}, maxFrequency = 0,element;
    for(let i = 0; i< string.length;i++){
        obj[string[i]] ? obj[string[i]]++ : obj[string[i]] =1;
    }
    for (let key in obj){
        if(obj[key]> maxFrequency){
            maxFrequency = obj[key];
            element = key;
        }
    }
    return element
    
}
console.log(maxFrequency(string));
