const palindromes = function (palindrome) {

    palindrome = palindrome.replace(/\W/g, '').toLowerCase();
    
    const pArray = palindrome.split('');
    const cArray = pArray.reverse();
    const rev = cArray.join("");

    if (palindrome === rev){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
