/* 
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
 */

// loop through the array
// chech if the element === needke
// return message

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

function findNeedle2(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}
console.log(
  findNeedle2(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
