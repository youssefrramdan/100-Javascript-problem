/*
! problem : Given a string, you have to return a string in which each character is repeated once.

*/

function doubleChar(str) {
  return str
    .split("")
    .map((value) => value.repeat(2))
    .join("");
}
console.log(doubleChar("String"));

//-------------------------------
function doubleChar2(str) {
  let stringsSplited = str.split("");
  for (let i = 0; i < stringsSplited.length; i++) {
    stringsSplited[i] += stringsSplited[i];
  }
  return stringsSplited.join("");
}

console.log(doubleChar2("String"));
