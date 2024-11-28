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

const sum = function(...nums) {
  
  let sum = 0;
  console.log(nums);

    for (i of nums){
      sum += Number(i);
      console.log(sum);
    };

  return sum;

};

const multiply = function(num1,...nums) {

  let product = num1;
  for (i of nums){
    product *= i;
  }

};

const power = function() {
	
};

const factorial = function() {
	
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
