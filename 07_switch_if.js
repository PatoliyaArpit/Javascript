//const prompt = require("prompt-sync")();

//let age = prompt("enter no?");
//age = Number.parseInt(age); //converting to string to number
let age = 17;
console.log(age);
if (age > 0) {
  console.log("valid age");
} else {
  console.log("not valid");
}

console.log("you can", age < 18 ? "not drivve" : "drive");//ternary op use
//switch case
const exp = 1;

switch (exp) {
  case 1:
    console.log("pyaji");
    break;
  case 2:
    console.log("orange");
    break;
}
