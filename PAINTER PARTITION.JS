/* PROBLEM 3: Painter partition (30 minutes)
You are provided with ‘n’ number of boards of length [b1, b2,..bn].There are ‘a’ painters available in the market and each painter
takes one(1) unit time to paint one(1) unit of board. We need to find the minimum time to get the job done under the constraints
that any painter will only paint contiguous sections of the board.
 Note: Two painters cannot share boards to paint.
Constraints:
● a(1 <= n <= 1000)
● arr(1 <= arr[i] <= 10^5)
Input:
● Array of boards(arr[])
● No of painters(a)
Sample Input:
 [10, 20, 30, 40]
 2
Sample Output:
 60 */



 function canAllocateBoard(mid, boards, p){
    //Time: O(n)
    //we will try to allocate books such that any student read atmost mid page
    let painters = 1;
   
    let currAllocatedBoards = 0; //this is the current page allocated to last student
    for(let i = 0; i < boards.length; i++){
        if(currAllocatedBoards + boards[i] > mid){
            // we cannot allocate ith book to last student
            painters++;// start allocating for the next student
            currAllocatedBoards = boards[i];// ith book goes to the new student
            if(painters > p) return false; //we have less students
        } else{
            currAllocatedBoards += boards[i];// give the book to the last student
        }
    }
    //if we never returned false from above that means allocation is possible
    return true;
 }

 function getMaximisedMaxValue(boards, s){
    // time : O(nlog(sum of all pages))
    let lo = boards[boards.length - 1];
    let hi = 0;
    for(let i = 0; i < boards.length; i++) 
    hi += boards[i];
    let ans = lo;
    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(canAllocateBoard(mid,  boards, p)){
            ans = mid;
            hi = mid -1;
        }else {
            lo = mid + 1;
        }
    }
    return ans;
 }

 let boards = [10, 20, 30, 40]
 let p = 2;
 console.log(getMaximisedMaxValue(boards, p));