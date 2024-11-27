const sumAll = function(num1,num2) {

    let small;
    let big;

    if (num1 < num2){
        small = num1;
        big = num2;
    } else if (num1 > num2){
        small = num2;
        big = num1;
    } else {
        // for when num1 = num2
    };

    let counter = small;
    let sum = small;
    
    while (counter < big){
        ++counter;
        sum += counter;
    }

    
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }else if (!(typeof num1 === 'number' || typeof num2 === 'number')){
        return "ERROR";
    } else{
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
