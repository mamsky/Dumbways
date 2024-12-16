// 1. Buat sebuah class Book : title, author, isAvailable
// 2. Buat class Library untuk manage Book
// 3. Di dalam class Library, buat method addBook, lendBook, returnBook
// 4. untuk menambah item, gunakan push
// let books = [];
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
}
class Library extends Book {
  books = [];
  addBook(book) {
    return this.books.push(book);
  }
  lendBook(title) {
    const objIndex = this.books.findIndex((book) => book.title == title);
    if (this.books[objIndex].isAvailable == true) {
      this.books[objIndex].isAvailable = false;
      return console.log(
        `the lending processs of book with title ${this.books[objIndex].title} and the author of ${this.books[objIndex].author} is sucsess`
      );
    } else {
      return console.log("books is not available");
    }
  }
  returnBook(title) {
    const objIndex = this.books.findIndex((book) => book.title == title);
    if (this.books[objIndex].isAvailable == true) {
      return console.log(
        ` Cannot return book with title ${this.books[objIndex].title} and the author of ${this.books[objIndex].author} when already in library`
      );
    } else {
      this.books[objIndex].isAvailable = true;
      return console.log(
        ` book with title ${this.books[objIndex].title} and the author of ${this.books[objIndex].author} returned sucessfully`
      );
    }
  }
}

const bukuBaru = new Book("Ready", "randy");
const sapien = new Book("sapiens", "yuval");
const library = new Library();
library.addBook(bukuBaru);
library.addBook(sapien);
library.lendBook("sapiens");
library.lendBook("Ready");
library.lendBook("sapiens");
library.lendBook("Ready");
library.returnBook("Ready");
library.returnBook("sapiens");
library.returnBook("Ready");
