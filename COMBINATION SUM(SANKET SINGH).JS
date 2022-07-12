
function f(n, arr, output) {
  if(n == 0) {
      console.log(output);
      return 1;
  }
  let ans = 0;
  for(let i = 0; i < arr.length; i++) {
    let k = arr[i];
    if(n-k < 0) continue;
    ans += f(n-k, arr, output + k + " ");
  }
return ans; 
}

function g(n, arr, output) {
  let a = Array(n+1).fill(0);
  a[0] = 1;
  for(let j = 0; j < arr.length; j++) {
      for(let i = 1; i <= n; i++) {
          if(arr[j] > i) continue;
          a[i] = a[i] + a[i-arr[j]];
      }
  }
  console.log(a)
  return a[n];
}

console.log(g(8, [2,4,6,8], "")) 








 function unique_combination(l, sum, K, local, A) {

    if (sum == K) {
      var a = [];
    //   console.log("{");
      for (let i = 0; i < local.length; i++) {
  
        if (i != 0)
          console.log("");
        console.log(local[i]);
  
        a.push(local[i]);
        if (i != local.length - 1)
          console.log(",");
      }
      console.log("}");
      return;
    }
  
    for (let i = l; i < A.length; i++) {
  
      if (sum + A[i] > K)
        continue;
  
      if (i > l && A[i] == A[i - 1])
        continue;
  
      local.push(A[i]);
  
      unique_combination(i + 1, sum + A[i], K, local, A);
  
      local.pop();
    }
  }
  
  
  let arr = [2, 9, 10, 11, 2, 7, 6, 1, 5];
  arr.sort((a, b) => a - b);
  let s = 10;
  let local = [];
  
unique_combination(0, 0, s, local, arr); 
  
