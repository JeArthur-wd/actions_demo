function addTwoNumbers(a, b) {
  return a + b;
}

function subtractTwoNumbers(a, b) {
  return a - b;
}

let result = addTwoNumbers(1, 2);
console.log(result); // Output: 3

module.exports = {
  addTwoNumbers,
  subtractTwoNumbers,
};