function modifyArray(arr1, arr2) {

  let concatArray = arr1.concat(arr2);

  concatArray.copyWithin(-2, 0, 2);

  concatArray.fill(0, -3);

  let firstElement = concatArray.shift();

  concatArray.unshift(10, 20);

   console.log(concatArray, firstElement);
}