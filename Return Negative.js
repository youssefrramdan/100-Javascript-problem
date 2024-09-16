/*
 ! Problem: You are given a number and need to ensure it is negative.
 todo If the number is already negative, it should remain unchanged.
 */
// ? Solution
/*
* The function `makeNegative` takes a number as input and checks if it is greater than 0.
* If the number is positive, it returns the negative of the number.
* If the number is 0 or negative, it returns the number unchanged.
*/
function makeNegative(num) {
  return num > 0 ? -num : num;
}

console.log(makeNegative(0)); 
console.log(makeNegative(5));
console.log(makeNegative(-3)); 

