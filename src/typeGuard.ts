// type guard
type value = string | number;

function add(a: value, b: value) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

// in Guard
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: string;
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} and his role ${user.role}`);
  } else {
    console.log(`${user.name} and he is normal user`);
  }
};

// getUserInfo({ name: "John" });
// getUserInfo({ name: "Jane", role: "admin" });

// instanceof Guard
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(hours: number) {
    console.log(`${this.name} is sleeping for ${hours} hours`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numberOfHours: number) {
    console.log(`${this.name} is studying for ${numberOfHours} hours`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(numberOfHours: number) {
    console.log(`${this.name} is taking class for ${numberOfHours} hours`);
  }
}

// function Guard
const isStudent = (user: Person) => {
  return user instanceof Student;
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo1 = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(5);
  } else if (isTeacher(user)) {
    user.takeClass(3);
  } else {
    user.getSleep(8);
  }
};

const student1 = new Student("Alice");
const teacher1 = new Teacher("Bob");
const person1 = new Person("Charlie");
getUserInfo1(student1);
getUserInfo1(teacher1);
getUserInfo1(person1);
