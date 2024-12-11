class Animal {
  brain = true;
  legs = 0;
  name = "unknown Name";
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class Human extends Animal {
  legs = 4;
  eyesCount = 2;
  name = "Papoy";
}

class Pet extends Animal {
  legs = 4;
  fleas = 0;
}

class Cat extends Animal {
  fleas = 4;
}

// const kitty = new Cat();
// kitty.name = "Ameng";
// console.log(kitty);

// const unknownAnimal = new Animal();
// console.log("unknownAnimal:", unknownAnimal);

// const human = new Human();
// console.log("Human Brain", human.brain);
// human.sleep();
