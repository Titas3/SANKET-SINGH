/* PROBLEM 2: Book Allocation (30 minutes)
● We are given the ‘n’ number of books arranged in sorted order. Where each book has a different number of pages.
You have to allocate books to ‘s’ count of students so that the maximum number of pages allotted to a student is
minimum.
● Each student will be allotted at least one book and in contiguous order. Find the minimum possible number and if the
assignment is not valid, return -1.
Constraints:
● n(1 <= n <= 10^5)
● arr(1 <= arr[i] <= 10^5)
Input:
● Array of books(arr[])
● No of students(s)
Sample Input:
 [12, 34, 67, 90]
 2
Sample Output:
 113 */

 function canAllocateBooks(mid, books, s){
    //Time: O(n)
    //we will try to allocate books such that any student read atmost mid page
    let students = 1;
    let student = 1;
    let currAllocatedPages = 0; //this is the current page allocated to last student
    for(let i = 0; i < books.length; i++){
        if(currAllocatedPages + books[i] > mid){
            // we cannot allocate ith book to last student
            students++;// start allocating for the next student
            currAllocatedPages = books[i];// ith book goes to the new student
            if(students > s) return false; //we have less students
        } else{
            currAllocatedPages += books[i];// give the book to the last student
        }
    }
    //if we never returned false from above that means allocation is possible
    return true;
 }

 function getMaximisedMaxValue(books, s){
    // time : O(nlog(sum of all pages))
    let lo = books[books.length - 1];
    let hi = 0;
    for(let i = 0; i < books.length; i++) 
    hi += books[i];
    let ans = lo;
    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(canAllocateBooks(mid,  books, s)){
            ans = mid;
            hi = mid -1;
        }else {
            lo = mid + 1;
        }
    }
    return ans;
 }

 let books = [12, 34, 67, 90]
 let s = 2;
 console.log(getMaximisedMaxValue(books, s));