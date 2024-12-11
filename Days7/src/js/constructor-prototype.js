// constructor
// function Person(firstName, lastName) {
//   this.nameOne = firstName;
//   this.nameTwo = lastName;
// }

// Person.prototype.getFullName = function () {
//   return `${this.nameOne} ${this.nameTwo}`;
// };

// let alfi = new Person("Alfi", "Nur");
// let paste = new Person("Paste", "Prosmana");

// console.log(alfi.getFullName());
// console.log(paste.getFullName());

// -----------------------------------------------------
// class constructor

// class Person {
//   constructor(firstName, lastName) {
//     this.nameOne = firstName;
//     this.nameTwo = lastName;
//   }
//   getFullName() {
//     console.log(this);
//     return `${this.nameOne} ${this.nameTwo}`;
//   }
// }

// let alfi = new Person("Alfi", "Nur");
// let paste = new Person("Paste", "Prosmana");

// console.log(alfi.getFullName());
// console.log(paste.getFullName());

// ------------------------------------------------------------

// class Counter {
//   angka = 0;

//   increment() {
//     this.angka++;
//   }
//   decrement() {
//     this.angka--;
//   }
//   getAngka() {
//     return this.angka;
//   }
// }

// const angka = new Counter();
// const handleClick = () => {
//   angka.increment();
//   console.log(angka.getAngka());
// };

// const handleClickMin = () => {
//   angka.decrement();
//   console.log(angka.getAngka());
// };
// -------------------------------------------------------------------
// class inheritance
class Employee {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  printData() {
    console.log(this.username);
  }
}

class Manager extends Employee {
  constructor(username, password, course) {
    super(username, password);

    this.course = course;
  }
  printData() {
    console.log("Child Class", this.username);
  }
}
const budi = new Employee("Budi", 1234);

const poy = new Manager("Papoy", 123, "JS");

console.log(budi);
budi.printData();
console.log(poy);
poy.printData();
