// polymorphism

class Person {
  getSleep() {
    console.log(`I am a normal person and sleep for 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a student and sleep for 6 hours`);
  }
}

class Developer extends Person {
  getSleep() {
    console.log(`I am a developer and sleep for 4 hours`);
  }
}

const getSleepingHours = (person: Person) => {
  person.getSleep();
};

const person1 = new Person();
const student1 = new Student();
const developer1 = new Developer();

// getSleepingHours(person1);
// getSleepingHours(student1);
// getSleepingHours(developer1);

class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const getShapeArea = (shape: Shape) => {
  console.log(`Area: ${shape.getArea()}`);
};

const circle = new Circle(10);
const rectangle = new Rectangle(4, 6);

getShapeArea(circle);
getShapeArea(rectangle);
