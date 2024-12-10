const convertToCelsius = function(cel) {

  const convert = cel * (9/5) + 32;
  const far = num.toFixed(1);

  return far;


};

const convertToFahrenheit = function(far) {

  const convert = (far - 32) * (5/9);
  const cel = num.toFixed(1);

  return cel;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
