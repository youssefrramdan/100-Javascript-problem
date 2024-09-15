// Problem: Write a function that accepts an integer n and a string s as parameters, and returns the string s repeated exactly n times.
// Solution 1:
// 1. Create an empty string.
// 2. Use the number passed as an argument to loop through.
// 3. Append the string s to the empty string during each iteration.
//--------------------------------------------------------------------------
//Solution 2 : 
// 1. Use the built-in `repeat()` method available on the string object.
// 2. The `repeat()` method automatically repeats the string the specified number of times.
// 3. Return the result directly without the need for a loop.
//------------------------------------------------------------------------------
function StringRepeat(number , String) {
  let newString = "";
  for (let i = 0; i < number; i++) {
    newString += String ;
  }
  return newString
}
console.log(StringRepeat(5 , "yo"));
//---------------------------------------------
function StringRepeat2(number , String ){
  return String.repeat(number);
}
console.log(StringRepeat2(2,"youssef"));
