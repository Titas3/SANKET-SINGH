// javascript implementation of MSD Radix Sort
// of MSD Radix Sort using counting sort()
 
    // A utility function to print an array
    function print(arr , n) {
        for (var i = 0; i < n; i++) {
            console.log(arr[i] + " ");
        }
        console.log();
    }
 
    // A utility function to get the digit
    // at index d in a integer
    function digit_at(x , d) {
        return parseInt( x / Math.pow(10, d - 1)) % 10;
    }
 
    // The main function to sort array using
    // MSD Radix Sort recursively
     function MSD_sort(arr , lo , hi , d) {
 
        // recursion break condition
        if (hi <= lo) {
            return arr;
        }
 
        var count = Array(10 + 2).fill(0);
 
        // temp is created to easily swap Strings in arr
        var temp = new Map();
 
        // Store occurrences of most significant character
        // from each integer in count
        for (var i = lo; i <= hi; i++) {
            var c = digit_at(arr[i], d);
            count++;
        }
 
        // Change count so that count now contains actual
        // position of this digits in temp
        for (var r = 0; r < 10 + 1; r++)
            count[r + 1] += count[r];
 
        // Build the temp
        for (i = lo; i <= hi; i++) {
            var c = digit_at(arr[i], d);
            if (temp.has(count + 1))
                temp.set(count++, arr[i]);
            else
                temp.set(count++, arr[i]);
        }
 
        // Copy all integers of temp to arr, so that arr now
        // contains partially sorted integers
        for (i = lo; i <= hi; i++)
            if (temp.has(i - lo))
                arr[i] = temp.get(i - lo);
 
        // Recursively MSD_sort() on each partially sorted
        // integers set to sort them by their next digit
        for (r = 0; r < 10; r++)
            arr = MSD_sort(arr, lo + count[r], lo + count[r + 1] - 1, d - 1);
        return arr;
    }
 
    // function find the largest integer
    function getMax(arr , n) {
        var mx = arr[0];
        for (i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
    }
 
    // Main function to call MSD_sort
     function radixsort(arr , n) {
        // Find the maximum number to know number of digits
        var m = getMax(arr, n);
 
        // get the length of the largest integer
        var d = parseInt( Math.floor(Math.log10(Math.abs(m)))) + 1;
 
        // function call
        return MSD_sort(arr, 0, n - 1, d);
    }
 
    // Driver Code
     
        // Input array
        var arr = [ 9330, 9950, 718, 8977, 6790, 95, 9807, 741, 8586, 5710 ];
 
        // Size of the array
        var n = arr.length;
 
        console.log("Unsorted array : ");
 
        // Print the unsorted array
        print(arr, n);
 
        // Function Call
        arr = radixsort(arr, n);
 
        console.log("Sorted array : ");
 
        // Print the sorted array
        print(arr, n);
 