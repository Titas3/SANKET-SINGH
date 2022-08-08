const bucketSort = (arr, n) => {

    let b = new Array(n);
    for (let i = 0; i < b.length; i++)
      b[i] = [];
  
    for (let i = 0; i < n; i++){
      let bi = Math.floor(n*arr[i]);
      b[bi].push(arr[i]);
    }
  
    for (let i = 0; i < n; i++)
      b[i] = b[i].sort();
  
    let index = 0;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < b[i].length; j++)
        arr[index++] = b[i][j];
  }
  
  const sortMixed = (arr, n) =>{
    let Neg = [];
    let Pos = [];
  
    for (let i = 0; i < n; i++)
    {
      if (arr[i] < 0)
  
        Neg.push(-1 * arr[i]) ;
      else
  
        Pos.push(arr[i]) ;
    }
    bucketSort(Neg, Neg.length);
    bucketSort(Pos, Pos.length);
    for (let i = 0; i < Neg.length; i++)
      arr[i] = -1 * Neg[ Neg.length -1 - i];
  
  
    for(let j = Neg.length; j < n; j++)
      arr[j] = Pos[j - Neg.length];
  }
  
  let arr = [-0.897, 0.565, 0.656,
                  -0.1234, 0, 0.3434];
  let n = arr.length;
  sortMixed(arr, n);
  
  console.log(arr);