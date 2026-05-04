// Constraints
type Student = {
  name: string;
  id: number;
};

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "TypeScript 101",
    ...studentInfo,
  };
};

const student1 = addStudentToCourse({
  name: "Alice",
  id: 456,
  age: 20,
  grade: "A",
});
const student2 = addStudentToCourse({
  id: 123,
  name: "Bob",
  age: 22,
  grade: "B",
  hasCar: true,
});

// key of constraint with generic
// keyof: type operator
type RichPeopleVehicle = {
  car: string;
  bike: string;
  boat: string;
};

type myVehicle1 = "car" | "bike" | "boat";
type myVehicle2 = keyof RichPeopleVehicle;
