/* 
! prpblem  --- >enny has written a function that returns a greeting for a user. However,
  * she's in love with Johnny, and would like to greet him slightly different. 
  * She added a special case to her function, but she made a mistake.
  ? Recorrect the code  */

function greet(name){
  if(name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}
console.log(greet("Johnny"));

//---------------------------------------------------

function greet2(name){
  return name !== "Johnny" ?  "Hello, " + name + "!" :  "Hello, my love!";
}
console.log(greet2("Johnny"));
