//I LITERALLYT GIVE UP

const add = function(num1,...nums) {
	
  let sum = num1;
  for (i of nums){
    sum += i;
  }

  return sum;

};

const subtract = function(num1,...nums) {
	
  let subtract = num1;

  for (i of nums){
    subtract -= i;
  }

  return subtract;

};

const sum = function(array) {
  
return array.reduce((total, current) => total + current, 0);

};

const multiply = function(array) {

  return array.reduce((total, current) => total * current);

};

const power = function (a, b) {
  return Math.pow(a, b);
};


const factorial = function(number) {
	
  let product = 0;

  if (number === 0 || number === 1){
    return 1;
  } else{
      while (number >= 1){
        number = number * (number-1);
      }
  }

  return product;

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
