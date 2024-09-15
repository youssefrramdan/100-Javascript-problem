//Problem :--> You get an array of numbers, return the sum of all of the positives ones.
//---------------------------------------------------------------------------------------
//frist Solution
// result = 0
// loop --> arr
// check if the number is positive or not
// Add the number to result if positive
// return the result of
//-------------------------------------------------------
// Another Solution With filiter
// --> step 1
/*The filter() method of an array creates a shallow copy of the original array
  based on a condition specified in a callback function.
  This method returns a new array containing only the elements that pass the test implemented by the callback function.
  -->we will use it to Filters the array, creating a new array that includes only elements greater than 0.
 */
// array.filter(function(currentValue, index, array) {
// Your logic here
// }, thisArg);

// --> step 2
// the reduce() method
/*-- >After filtering, this takes the resulting array and reduces it to a single value by adding all the elements together.
The acc (accumulator) keeps the running total, and current represents the current element being processed.
*/
/*
reduce(callbackFn)
reduce(callbackFn, initialValue)
 */
// ---------------------------------------------------------------------------------------
function PositiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}
// console.log(PositiveSum([1, -4, 3 , 7, 12]));

function SumOfpositiveWithFiltter(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current , 0);
}
console.log(SumOfpositiveWithFiltter([1, -4, 3, 7, 12]));
