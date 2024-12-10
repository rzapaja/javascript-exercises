const fibonacci = function(num) {

    let fib = [0,1];
    let sum = 1;
    let numy= num+2;


    for (let loop = 1; loop <= numy; loop++){
        fib.push(sum);
        last = loop-1;
        last2 = loop-2;
        sum = fib[last2] + fib[last];
    }

    return sum;

};

// Do not edit below this line
module.exports = fibonacci;
