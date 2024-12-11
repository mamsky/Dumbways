class Dog {
  //Properties
  //   ownerName = "a";
  //   name = "a";
  //   color = "a";
  //   eyeColor = "a";
  //   height = 0;
  //   length = 0;
  //   weight = 0;

  constructor(
    ownerName = "no owner",
    name = "no name",
    color = "white",
    eyeColor = "black",
    height = 0,
    length = 0,
    weight = 0
  ) {
    this.ownerName = ownerName;
    this.name = name;
    this.color = color;
    this.eyeColor = eyeColor;
    this.height = height;
    this.length = length;
    this.weight = weight;
  }

  // Methods
  sit() {
    console.log(`${this.name} is sitting`);
  }
  layDown() {
    console.log(`${this.name} is laydown`);
  }
  shake() {
    console.log(`${this.name} is shaking hands with ${this.ownerName}`);
  }
  come() {
    console.log(`${this.name} is Coming`);
  }
}

// const brony = new Dog("Papoy", "Brony", "Black", "Blue", 50, 100, 15);
// brony.shake();
