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
