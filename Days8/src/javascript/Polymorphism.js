class Animal {
  speak() {
    console.log(`please define an animal to speak!`);
  }
}

class Duck extends Animal {
  speak() {
    console.log(`kwak kwak kwak`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`Meow meow meow`);
  }
}

const duck = new Duck();
duck.speak();

const cat = new Cat();
cat.speak();
