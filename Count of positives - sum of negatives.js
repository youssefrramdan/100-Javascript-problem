/* Problem :-
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

 */
function countPositivesSumNegatives(array) {
  if (!array || array.length === 0) return [];

  let positiveSum = array
    .filter((value) => value > 0).length;

  let negativeSum = array
    .filter((value) => value < 0)
    .reduce((acc, currentValue) => acc + currentValue, 0);

  return [positiveSum, negativeSum];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

//------------------------------------------------------------
function countPositivesSumNegatives2(array) {
  let positiveNumbers = [];
  let sumOfNegative = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveNumbers.push(array[i]);
    } else {
      sumOfNegative += array[i];
    }
  }
  return [positiveNumbers.length, sumOfNegative];
}

console.log(
  countPositivesSumNegatives2([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
