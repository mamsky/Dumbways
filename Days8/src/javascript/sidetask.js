// 1. Buat sebuah class Book : title, author, isAvailable
// 2. Buat class Library untuk manage Book
// 3. Di dalam class Library, buat method addBook, lendBook, returnBook
// 4. untuk menambah item, gunakan push

class Book {
  constructor(title, author, qty, isAvailable) {
    this.title = title;
    this.author = author;
    this.qty = qty;
    this.isAvailable = isAvailable;
  }
}

class Library extends Book {
  arr = [];

  // constructor(title, author, qty, isAvailable) {
  //   super(title, author, qty, isAvailable);
  // }

  addBook(data) {
    this.arr.push(data);
  }

  lendBook(title) {
    for (let i = 0; i < this.arr.length; i++) {
      if (title.includes(this.arr[i].title)) {
        this.arr[i].qty -= 1;
        //
        if (this.arr[i].qty <= -1) {
          alert(`Tidak bisa meminjam buku ${title} karena sudah habis`);
        }
        //
        if (this.arr[i].qty <= 0) {
          this.arr[i].qty = 0;
          this.arr[i].isAvailable = false;
        }
      }
    }
  }

  returnBook() {
    console.log(this.arr);
    // return this.arr;
  }
}

const book = new Book("Naruto", "ss", 3, true);
const book1 = new Book("One Piece", "ss", 2, true);

const library = new Library();

library.addBook(book);
library.addBook(book1);

library.lendBook("Naruto"); // 2
library.lendBook("Naruto"); // 1
library.lendBook("Naruto"); // 0
// library.lendBook("Naruto"); // -1

library.lendBook("One Piece"); // 1
library.lendBook("One Piece"); // 0
// library.lendBook("One Piece"); // -1

console.log(library.__proto__);

// library.returnBook();

let arr = [1, 2, 3];
console.log(arr.__proto__);
