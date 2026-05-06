// inheritance
class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(sleepingHours: number) {
    console.log(`${this.name} is sleeping for ${sleepingHours} hours`);
  }
}

class Student extends Parent {}

const student1 = new Student("Alice", 20, "123 Main St");
student1.getSleep(8); // Output: Alice is sleeping for 8 hours

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(classHours: number) {
    console.log(`${this.name} is taking a class for ${classHours} hours`);
  }
}

const teacher1 = new Teacher("Mr. Smith", 40, "456 Elm St", "Math Teacher");
teacher1.takeClass(2); // Output: Mr. Smith is taking a class for 2 hours
