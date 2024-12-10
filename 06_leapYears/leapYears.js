const leapYears = function(year) {

    if (year % 4 == 0 && year % 1000 !== 0){
        return true;
    } else{
        return false;
    }


};

// Do not edit below this line
module.exports = leapYears;
