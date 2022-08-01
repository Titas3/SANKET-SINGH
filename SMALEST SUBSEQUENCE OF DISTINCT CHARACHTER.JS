/* var smallestSubsequence = function(text) {
    let stk=new Array();
    let map=new Map();    
    text.split('').map((item)=>{
        let t=(map.get(item))||0;
        map.set(item,t+1);
    });
    let ignore=new Map();
    for(let char of text){
        let t=map.get(char);
        map.set(char,t-1);
        if(ignore.has(char))
            continue;
        
        while(stk.length>0&&stk[stk.length-1]>char&&(map.get(stk[stk.length-1]))>0){
            ignore.delete(stk[stk.length-1]);
            stk.pop();            
        }
        
        stk.push(char);
        ignore.set(char,true);    
    }
    return stk.join('');
};
let string = "cbacdcbc";
console.log(smallestSubsequence(string));
console.log(smallestSubsequence("GEEKSGEEKSFOR")); */


// -------------------------->>>>>>>>>>
var smallestSubsequence = function(s) {
    let stack = [];
  for(let i = 0; i < s.length; i++){
      if(stack.includes(s[i])) continue;
   while(stack[stack.length-1]>s[i] && s.substring(i).includes(stack[stack.length-1])) stack.pop();
      stack.push(s[i]);
  }
  return stack.join("");
};
let string = "cbacdcbc";
console.log(smallestSubsequence(string));
console.log(smallestSubsequence("GEEKSGEEKSFOR"));
console.log(smallestSubsequence("RELEVEL"));
console.log(smallestSubsequence("AABBBCBBAC"));