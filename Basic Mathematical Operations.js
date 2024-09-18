/* 
! Problem : Your task is to create a function that does four basic mathematical operations.

* The function should take three arguments - operation(string/char), value1(number), value2(number).
* The function should return result of numbers after applying the chosen operation.

 */

function BasicMathematicalOperations(operation, fristNum, SecondNum) {
  if (operation == "+") {
    return fristNum + SecondNum;
  } else if (operation == "-") {
    return fristNum - SecondNum;
  } else if (operation == "*") {
    return fristNum * SecondNum;
  } else {
    return fristNum / SecondNum;
  }
}
console.log(BasicMathematicalOperations("-", 15, 18));

function BasicMathematicalOperations2(operation, fristNum, SecondNum) {
  switch (operation) {
    case "+":
      return fristNum + SecondNum;
    case "-":
      return fristNum - SecondNum;
    case "*":
      return fristNum * SecondNum;
    case "/":
      return fristNum / SecondNum;
    default:
      return 0;
  }
}
console.log(BasicMathematicalOperations2("-", 15, 18));
