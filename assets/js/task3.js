function Book(author, name, year, edition, price) {
    this.author = author;
    this.name = name;
    this.year = year;
    this.edition = edition;
    this.price = price;
}

Book.prototype.getBookAge = function() {
    return new Date().getFullYear() - this.year;
}
Book.prototype.changePrice = function(newPrice) {
    this.price = newPrice;
}

const book = new Book(
    "Test Testovich", 
    "Javascript basics", 
    2015, 
    { 
        city: 'Kiev', 
        name: 'Edition1'
    },
    230);

console.log('Book:', book);
book.changePrice(250);
console.log('Book with new price:', book);
console.log('Book age:', book.getBookAge());