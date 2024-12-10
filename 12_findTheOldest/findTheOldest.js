const findTheOldest = function(people) {

    let results = people.sort((one,two) => {

        let ageOne = (one.yearOfDeath - one.yearOfBirth);
        let ageTwo = (two.yearOfDeath - two.yearOfBirth);
console.log(one.name + two.name);
        if (ageOne<ageTwo){
            return 1;
        } else if (ageOne === ageTwo){
            return 0;
        } else{
            return -1;
        }    
    });

    console.log(results);
    return results.slice(0,1);


};

// Do not edit below this line
module.exports = findTheOldest;
