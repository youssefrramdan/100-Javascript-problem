//problem --- > Sum without highest and lowest number
// check if empty value return 0
// sort array
// delete frist and lastElement ---> (lower and higest)
// Sum all number in the array with reduce

function SumWithoutHighestandLowest(arr) {
  if (arr == null ) {
    return 0;
  }
  /*Using Slice instead of use pop()--> for remove last element and shift() for remove frist element*/
  return arr
    .sort((a, b) => a - b)
    .slice(1 , -1)
    .reduce((acc, currentValue) => acc + currentValue , 0);
}

console.log(SumWithoutHighestandLowest([1, 2, 3, 4, 5]));
