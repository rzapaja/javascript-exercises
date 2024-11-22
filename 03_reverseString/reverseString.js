const reverseString = function(string) {

    const stringSource = string.split('');
    let stringDestination = '';

    while (stringSource.length > 0){
        stringDestination += stringSource.pop();
    }

    return stringDestination;

};

// Do not edit below this line
module.exports = reverseString;
