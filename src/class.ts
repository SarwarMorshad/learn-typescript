// oop - class - object
class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`This ${this.name} is making sound ${this.sound}`);
  }
}

const dog = new Animal("Buddy", "Dog", "Woof");
const cat = new Animal("Whiskers", "Cat", "Meow");
console.log(dog.name); // Output: Buddy
console.log(cat.sound); // Output: Meow

dog.makeSound(); // Output: This Buddy is making sound Woof
