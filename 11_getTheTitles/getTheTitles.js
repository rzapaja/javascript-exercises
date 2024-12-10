const getTheTitles = function(books) {

    const titles = books.reduce((acc,book)=> {
        acc.push(book.title);
        return acc;
    }, []);

    return titles;
}

// Do not edit below this line
module.exports = getTheTitles;
