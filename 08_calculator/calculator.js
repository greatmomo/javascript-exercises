const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(inputArray) {
	let sum = 0;
  inputArray.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(inputArray) {
  let total = 1;
  inputArray.forEach(element => {
    total *= element;
  });
  return total;
};

const power = function(a, b) {
  let pow = a;
  if (b === 0) {
    return 1;
  }
	for (let i = 2; i <= b; i++) {
    pow *= a;
  }
  return pow;
};

const factorial = function(n) {
	let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
