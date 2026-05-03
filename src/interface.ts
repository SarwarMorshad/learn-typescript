type User = {
  name: string;
  age: number;
};

// interface only works with object type
interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user" | "guest";
};

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
  role: "admin" | "user" | "guest";
}

// Function type with interface
type add = (a: number, b: number) => number;

interface IAdd {
  (a: number, b: number): number;
}
const addNumbers: IAdd = (a, b) => a + b;
