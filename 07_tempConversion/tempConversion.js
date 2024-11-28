const convertToCelsius = function(fahren) {

  const convert = (fahren - 32) * 5/9;
  const celcius = (Math.round(convert * 10)/10);

  console.log(celcius);
  return celcius;

};

const convertToFahrenheit = function(celc) {

  const convert = (celc * 1.8) + 32;
  const fahrenheit = (Math.round(convert * 10)/10);

  console.log(fahrenheit);
  return fahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
