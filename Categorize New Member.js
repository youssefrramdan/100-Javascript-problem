/*
! problem :
  ? Club has two categories of membership, Senior and Open. 
  todo They would like your help with an application form that will tell prospective members which category they will be placed.
  * To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
  * In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
 */

function openOrSenior(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let [age, handicap] = arr[i];
    if (age >= 55 && handicap > 7) {
      newArray.push("Senior");
    } else {
      newArray.push("Open");
    }
  }
  return newArray;
}
console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);


function openOrSenior2(arr) {
  let newArray = [];
    arr.map(([age, handicap]) => {
    age >= 55 && handicap > 7 ? newArray.push("Senior") : newArray.push("Open");
  });
  return newArray
}

console.log(
  openOrSenior2([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);
