//problem --> Convert number to reversed array of digits
// Solution 1 :-
// Convert the number into a string to work with each digit separately.
// Split the string into an array where each element is a single digit.
// Sort the array in descending order.
// Join the sorted digits back together to form a new number.
// Convert the result back to a number and return it.
//-----------------------------------------------------------
// Solution 2:-
// Convert to String: The number is first converted to a string so that its individual digits can be accessed.
// Split the String into an Array: The string is split into an array where each element represents a digit of the number as a string.
// Reverse the Array: The array of digits is reversed to change the order of the digits.
// Convert the Digits to Numbers: Using map(Number), each digit in the reversed array is converted back into a number.
// Return the Result: The final output is an array of digits, reversed and converted back into numbers.

function digitize1(number) {
  let initialArray = String(number).split("");
  let reversadArray = [];
  
  for (let i = initialArray.length - 1; i >= 0; i--) {
    
    reversadArray.push(Number(initialArray[i]));
  }
  return reversadArray
}
console.log(digitize1(1234566789));



function digitize2(number) {
  return String(number).split("").reverse().map(Number);
}
console.log(digitize2(1234566789));

function digitize3(number) {
  return number.toString().split().map((currentValue)=>Number(currentValue)).reverse();
}