//! problem -->take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//  Solution: 1. Start by assuming the first element in the array is the largest.
// 2. Loop through the array, starting from the second element.
// 3. In each loop iteration, compare the current element to the largest value you have stored.
// 4. If the current element is bigger than the stored largest value, update the stored largest value.
// ? 5. After the loop finishes, return the largest value you found.

function descendingOrder(n) {
  return Number(
    String(n)
      .split("")
      .map(Number)
      .sort((a, b) => b - a) 
      .join("")
  );
}

console.log(descendingOrder(23423423423));
