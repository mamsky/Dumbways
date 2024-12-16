// method constructor function
// function Person(myName, school) {
//   this.myName = myName;
//   this.school = school;
//   this.sayHello = function (name) {
//     console.info(`Hello ${name}, my name is ${this.myName}`);
//   };
// }

// const poy = new Person("Papoy", "Smansa");
// poy.sayHello("Adam");
// console.log(poy);

// const adam = new Person("Adam", "SMAN 1");
// adam.sayHello("Papoy");
// console.log(adam);

// -----------------------------------------------------------------
// constrtuctor inheritance ==>> Pelajari Lagi
// function Employee(myFirstName, myLastName) {
//   this.myFirstName = myFirstName;
//   this.myLastName = myLastName;
//   this.sayHello = function (name) {
//     console.info(`Hello ${name}, my name is ${this.lastName}`);
//   };
//   this.callManager = `Name Manager: ${this.firstName}`;
// }

// function Manager(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   //memanggil isi employee
//   Employee.call(this, firstName, lastName);
// }

// const poy = new Manager("p", "Prosmana");

// poy.sayHello("Papoy");
// console.log(poy);
// ------------------------------------------------------------------------

// constructor inheritence
// function Employee(firstName) {
//   this.firstName = firstName;
//   this.sayHello = function (name) {
//     console.info(`Hello, ${name}, My name is ${this.firstName}`);
//   };
// }

// function Manager(firstName, lastName) {
//   this.lastName = lastName;
//   Employee.call(this, firstName);
// }

// const papoy = new Manager("Paste", "Prosmana");
// console.log(papoy);

// -----------------------------------------------------------------------------
// konsep prototype inheritance
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.sayHello = function (name) {
//     console.info(`Hello ${name}, my name is ${this.firstName}`);
//   };
// }

// Person.prototype.sayBye = function () {
//   console.log("GoodBye");
// };

// Person.prototype.run = function () {
//   console.log(`${this.firstName} is Running`);
// };

// const john = new Person("John", "Lenon");
// // john.sayBye = function () {
// //   console.log("Good Bye");
// // };
// const doe = new Person("Doe", "Rut");
// console.log(john);
// console.log(doe);
// //memanggil daari prototype
// john.sayBye();
// john.run();
// ----------------------------------------------------------------------------------

// prototype inheritance
function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// prototype inheritance yang salah X
// salah => sama aja seperti mengubah manager menjadi employe
// Manager.prototype = Employee.prototype;

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, my name is Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, my name is Employee ${this.name}`);
};

const employee = new Employee("Budi");
employee.sayHello("Joko");

const manager = new Manager("Eko");
manager.sayHello("Joko");

console.log(employee);
console.log(manager);
