function bucketSort(arr) { // implementation to support decimal sorting from 0-1
	let buckets = Array(arr.length);
    for(let i = 0; i < buckets.length; i++) buckets[i] = [];
	for(let i = 0; i < arr.length; i++) {
		let bucketIndex = Math.floor(arr[i]*10);
        // console.log(bucketIndex);
		buckets[bucketIndex].push(arr[i]);
	}
	for(let i = 0; i < buckets.length; i++) {
		buckets[i].sort((a, b) => a-b);
	}
	let output = [];
	for(let i = 0; i < buckets.length; i++) { // n
		for(let j = 0; j < buckets[i].length; j++) {
			output.push(buckets[i][j]);
		}
	}
    return output;
}

console.log(bucketSort([0.21, 0.17, 0.33, 0.18, 0.47]))

console.log(bucketSort([0.29, 0.34, 0.19, 0.39, 0.21, 0.41])); 

/* const bucketSort = (givenArray, numberOfBucket) => {

    let bucket = new Array(numberOfBucket);
    for (let i = 0; i < numberOfBucket; i++){
    bucket[i] = [];
    }
   
    for (let i = 0; i < givenArray.length; i++) {
    let index = Math.floor(10 * givenArray[i]);
    bucket[index].push(givenArray[i]);
    }
   
    console.log("Before Sorting Each Bucket");
    console.log(bucket);
   
    for (let i = 0; i < numberOfBucket; i++)
    bucket[i].sort();
    console.log("After Sorting Each Bucket");
    console.log(bucket);
   
    let index = 0;
    for (let i = 0; i < numberOfBucket; i++)
    for (let j = 0; j < bucket[i].length; j++)
    givenArray[index++] = bucket[i][j];
   }
   let givenArray = [0.29, 0.34, 0.19, 0.39, 0.21, 0.41];
   let numberOfBucket = 10;
   bucketSort(givenArray, numberOfBucket);
   console.log(givenArray); */
   