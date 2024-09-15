// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// with if statemnt
function EvenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(EvenOrOdd(5)); //odd number
console.log(EvenOrOdd(6)); //Even number

// with ternary operator
const EvenOrOdd2 = (number) => (number % 2 == 0 ? "even" : "odd");
console.log(EvenOrOdd2(5));
