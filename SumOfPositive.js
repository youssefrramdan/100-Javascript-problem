// Problem: You get an array of numbers. Return the sum of all positive ones.
// ---------------------------------------------------------------------------------------
// First Solution
// - Initialize result to 0
// - Loop through the array
// - Check if the number is positive
// - Add the positive number to result
// - Return the result

function PositiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}
console.log(PositiveSum([1, -4, 3, 7, 12]));



// Another Solution with filter and reduce
// Step 1: Filter the array to include only positive numbers
// - The filter() method creates a shallow copy of the array with elements that are greater than 0

// Step 2: Reduce the filtered array to get the sum of its elements
// - The reduce() method adds all elements together, starting with an initial value of 0

function SumOfpositiveWithFilter(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}
console.log(SumOfpositiveWithFilter([1, -4, 3, 7, 12]));




// Another Solution with reduce only
// - The reduce() method is used directly to accumulate the sum of positive values
// - If the current value is positive, add it to the accumulator; otherwise, keep the accumulator unchanged

function positiveSum(arr) {
  return arr.reduce(function(acc, currentValue) {
    return currentValue > 0 ? acc
