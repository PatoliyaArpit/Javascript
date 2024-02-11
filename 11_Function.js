// function

function avg(x, y) {
  return Math.round(1 + (x + y) / 2);
}
const sum = (p, q) => {
  return p + q;
};
const hello = () => {
  console.log("hello i am patoliya arpit");
  return "hi";
};
let a = 5;
let b = 4;
let c = 2;
let f = hello();
// hello();
console.log(f);
console.log("one plus average of a and b is", avg(a, b)); //use function
console.log("one plus average of b and c is", 1 + (b + c) / 2);
console.log("one plus average of a and c is", avg(a, c));
console.log(sum(a, b));
console.log(sum(2, 2));
