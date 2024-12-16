// class constructor
// class Person {
//   //   prototype
//   constructor(name) {
//     // instance
//     this.name = name;
//     // this.sayHello = function (name) {
//     //   console.log(`say hello ${name}`);
//     // };
//   }
//   sayHello(name) {
//     console.log(`Hello ${name}, My name is ${this.name} `);
//   }
// }

// const poy = new Person("Papoy");
// poy.sayHello("Adit");
// console.log(poy);

// const budi = new Person("Budi");
// budi.sayHello("Adit");
// console.log(budi);

// -----------------------------------------------------------------------------
// class inheritance
// class Employee {
//   sayHello(name) {
//     console.log(`Hello ${name}, my name is employee ${this.name}`);
//   }
// }
// class Manager extends Employee {
//   //   sayHello(name) {
//   //     console.log(`Hello ${name}, my name is Manager ${this.name}`);
//   //   }
// }

// const budi = new Employee();
// budi.name = "Budi";
// budi.sayHello("Joko");

// const poy = new Manager();
// poy.name = "Papoy";
// poy.sayHello("Budi");

// console.log(budi);
// console.log(poy);

// -------------------------------------------------------------------------------------
// super constructor
// class Employee {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
//   sayHello(name) {
//     console.log(`Hello ${name}, my name is employee ${this.firstName}`);
//   }
// }
// class Manager extends Employee {
//   constructor(firstName, lastName) {
//     super(firstName);
//     this.lastName = lastName;
//   }
//   sayHello(name) {
//     console.log(
//       `Hello ${name}, my name is Manager ${this.firstName} ${this.lastName}`
//     );
//   }
// }
// const budi = new Employee("Budi");
// budi.sayHello("Joko");

// const poy = new Manager("Papoy", "Gaming");
// poy.sayHello("Joko");

// console.log(budi);
// console.log(poy);
// ------------------------------------------------------------------------------------------

// super method
// class Shape {
//   paint() {
//     console.log(`Paint Shape`);
//   }
// }
// class Circle extends Shape {
//   paint() {
//     super.paint();
//     console.log(`Paint Cirle`);
//   }
// }

// const circle = new Circle();
// circle.paint();

// -----------------------------------------------------------------------------------------
// Getter dan Setter di class
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   set fullName(value) {
//     const result = value.split(" ");
//     this.firstName = result[0];
//     this.lastName = result[1];
//   }
// }

// const paste = new Person("Paste", "Prosmana");
// console.log(paste);
// console.log(paste.fullName);

// paste.fullName = "Papoy Gaming";
// console.log(paste);

// ------------------------------------------------------------------------------------------

//Public Class Field
// class Customer {
//   firstName;
//   lastName;
//   balance = 0;

//   constructor(firstName, lastName) {
//     //
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   sayHello() {
//     //
//   }
// }

// const papoy = new Customer("Paste", "Prosmana");
// console.log(papoy);

// ---------------------------------------------------------------------------------------------------
// privat field
// class Counter {
//   #counter = 0;

//   increment() {
//     this.#counter++;
//   }
//   decrement() {
//     this.#counter--;
//   }
//   get() {
//     return this.#counter;
//   }
// }

// const angka = new Counter();

// angka.increment();
// angka.increment();
// angka.increment();
// angka.increment();
// angka.increment();

// angka.decrement();
// angka.decrement();

// console.log(angka);

// console.log(angka.get());

// --------------------------------------------------------------------------------------------
// Operator instanceof
// class Employee {}
// class Manager {}
// const budi = new Employee();
// const papoy = new Manager();

// console.log(typeof budi);
// console.log(typeof papoy);

// console.log(budi instanceof Employee);
// console.log(budi instanceof Manager);
