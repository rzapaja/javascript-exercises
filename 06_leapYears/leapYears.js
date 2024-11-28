const leapYears = function(year) {

    const leapCheck = year % 4 === 0;
    const centuryCheck = year % 100 === 0;
    const fourhundredCheck = year % 400 === 0;

    if (leapCheck && (!centuryCheck || fourhundredCheck)){
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
