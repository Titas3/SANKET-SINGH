// var search = function(arr,x)
// {
//     let l = 0, r = arr.length - 1, mid
//     if(r>=l)
//     {
//         let mid1 = l + (r-l)/3;
//         let mid2 = r - (r-l)/3;
//         if(arr[mid1] == x)
//             return mid1;
//         if(arr[mid2] == x)
//             return mid2;
//         if(x<arr[mid1])
//             return ternary_search(l,mid1-1,x);
//         else if(x>arr[mid2])
//             return ternary_search(mid2+1,r,x);
//         else
//             return ternary_search(mid1+1,mid2-1,x);

//     }
//     return -1;
// }



// JavaScript program to illustrate the iterative
// approach to ternary search

// Function to perform Ternary Search
function ternarySearch(l, r, key, ar)

{
    while (r >= l) {
        
         let mid1 = l + parseInt((r - l) / 3 );// Find the mid1 and mid2
        let mid2 = r - parseInt((r - l) / 3 );
        
        if (ar[mid1] == key) {   // Check if key is present at any mid
            return mid1;
        }
        if (ar[mid2] == key) {
            return mid2;
        }

        // Since key is not present at mid,
        // check in which region it is present
        // then repeat the Search operation
        // in that region

        if (key < ar[mid1]) {

             r = mid1 - 1;// The key lies in between l and mid1
        }
        else if (key > ar[mid2]) {

        l = mid2 + 1;// The key lies in between mid2 and r
        }
        else {

            l = mid1 + 1; // The key lies in between mid1 and mid2
            r = mid2 - 1;
        }
    }

    return -1; // Key not found
}

let l, r, p, key;
// let ar = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let ar = [2,3,5,7,8,9,10,13,14];// Print the result // Sort the array if not sorted

l = 0;// Starting index
r = 9;// length of array

key = 5;// Checking for 5 // Key to be searched in the array

p = ternarySearch(l, r, key, ar);// Search the key using ternarySearch

console.log(`Index of ${key}  is   ${p} `);// Print the result

key = 50// Checking for 50 // Key to be searched in the array

p = ternarySearch(l, r, key, ar);// Search the key using ternarySearch

console.log(`Index of  ${key}   is  ${p}`); // Print the result


console.log(ternarySearch(l, r, key=8, ar))







