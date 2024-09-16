// !--- Problem --> Consider an array/list of sheep where some sheep may be missing from their place.
// ? We need a function that counts the number of sheep present in the array (true means present).

/* 
* Solution 1: Using a for loop
* This function iterates over the array using a for loop. It increments the count for each `true` value found.
*/
function countSheeps1(sheep) {
  let count = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i]) {
      count++;
    }
  }
  return count;
}

console.log(countSheeps1(
  [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]
));

/* 
* Solution 2: Using reduce method
* This function uses the `reduce` method to accumulate a count of `true` values. It adds to the accumulator only if the current value is `true`.
*/
function countSheeps2(sheep) {
  return sheep.reduce((acc, currentValue) => currentValue ? acc + 1 : acc, 0);
}

console.log(countSheeps2(
  [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]
));

/* 
* Solution 3: Using filter method
* This function filters the array to keep only the `true` values and then returns the length of the resulting array.
! Since the arrow function Value => Value returns the element itself, it will act as a filter to keep only the truthy values.

*/
let countSheeps3 = x => x.filter(Value => Value).length;

console.log(countSheeps3(
  [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]
));

/*
 * Solution 4: Using map method
 * This function uses the `map` method to iterate over the array, incrementing a counter for each element in the array.
 * Note: This solution does not correctly count `true` values, as it increments the counter for every element, not just `true` values.
 */
function countingSheep4(sheeps) {
  let counter = 0;
  sheeps.map((Sheep) => {
    counter++;
  });
  return counter; // Added return statement to output the result
}
