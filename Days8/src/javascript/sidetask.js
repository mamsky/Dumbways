// 1. Buat sebuah class Book : title, author, isAvailable
// 2. Buat class Library untuk manage Book
// 3. Di dalam class Library, buat method addBook, lendBook, returnBook
// 4. untuk menambah item, gunakan push

// class Book {
//   constructor(title, author, isAvailable) {
//     this.title = title;
//     this.author = author;
//     this.isAvailable = isAvailable;
//   }
// }

// class Library extends Book {
//   arr = [];

//   constructor(title, author, isAvailable) {
//     super(title, author, isAvailable);
//   }

//   addBook(data) {
//     this.arr.push(data);
//   }

//   lendBook(title) {
//     for (let i = 0; i < this.arr.length; i++) {
//       if (title.includes(this.arr[i].title)) {
//         this.arr[i].isAvailable = false;
//       }
//     }
//   }

//   returnBook() {
//     return this.arr;
//   }
// }

// const book = new Book("Naruto", "ss", true);
// const book1 = new Book("One Piece", "ss", true);
// const book2 = new Book("One Punch Man", "ss", true);
// const book3 = new Book("Hinata", "ss", true);
// const library = new Library();

// library.addBook(book);
// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);

// library.lendBook("Naruto");

// console.log(library.returnBook());
