/* The next lecture in a high school requires two topics to be discussed. The i-th topic is interesting by ai units for the teacher and by bi units for the students.

The pair of topics i and j (i<j) is called good if ai+aj>bi+bj (i.e. it is more interesting for the teacher).

Your task is to find the number of good pairs of topics.

Input
The first line of the input contains one integer n (2≤n≤2⋅105) — the number of topics.

The second line of the input contains n integers a1,a2,…,an (1≤ai≤109), where ai is the interestingness of the i-th topic for the teacher.

The third line of the input contains n integers b1,b2,…,bn (1≤bi≤109), where bi is the interestingness of the i-th topic for the students.

Output
Print one integer — the number of good pairs of topic.

Input:
5
4 8 2 6 2
4 5 4 1 3

Output:
7
 */

function upperBound(arr, x, st){
    let start = st, end = arr.length - 1;
    let ans = arr.length;
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);
        if(arr[mid] <= x){
            // discard left half
            start = mid + 1;
            
        } else {
            // elemnt at mid can be potential answer
            ans = mid;
            end = mid - 1;// go and find something even better on left side
        }
    }
    return ans;
}
let a = [4,8,2,6,2];
let b = [4,5,4,1,3];
let c = [];
for(let i = 0; i<a.length; i++){
    c.push(a[i] - b[i]);
}
c.sort((a,b)=> a-b);
let ans = 0;
for(let i = 0; i<c.length-1; i++){
    let ub = upperBound(c, -c[i], i+1);
    ans += c.length - ub;
}
console.log(ans);
