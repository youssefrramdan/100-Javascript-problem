/* 
! problem : Write a method, that will get an integer array as parameter and will process every number from this array.

* Return a new array with processing every number of the input-array like this:

? If the number has an integer square root, take this, otherwise square the number.
 */

function SquareRootOrNotSquare(arr) {
  return arr.map((value) =>
    Number.isInteger(Math.sqrt(value)) ? Math.sqrt(value) : value * value
  );
}
console.log(SquareRootOrNotSquare([4, 3, 9, 7, 2, 1]));

//-------------------------------------------------------
function squareOrSquareRoot(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(Math.sqrt(arr[i]))) {
      newArray.push(Math.sqrt(arr[i]));
    } else {
      newArray.push(arr[i] * arr[i]);
    }
  }
  return newArray;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 16, 25])); 

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
