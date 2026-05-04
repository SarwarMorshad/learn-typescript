// dynamically generalize
// generics

const friends: string[] = ["Tom", "Jerry", "Mickey"];
const rollNumbers: number[] = [1, 2, 3, 4, 5];
const isEligibleList: boolean[] = [true, false, true];

type genericArray<T> = Array<T>;

// generic array type
const genericFriends: genericArray<string> = ["Tom", "Jerry", "Mickey"];
const genericRollNumbers: genericArray<number> = [1, 2, 3, 4, 5];
const genericIsEligibleList: genericArray<boolean> = [true, false, true];

// generic tuple type
type coordinatesType = [number, number];
const coordinates: coordinatesType = [10, 20];

type genericTuple<X, Y> = [X, Y];
const genericCoordinates: genericTuple<number, number> = [10, 20];

// generic object type
type user = { name: string; age: number };
const userList: genericArray<user> = [
  {
    name: "Alice",
    age: 30,
  },
  {
    name: "Bob",
    age: 25,
  },
];

// generics with Interface
interface Developer<T, X = null> {
  name: string;
  salary: number;
  devices: {
    brand: string;
    model: string;
    releaseYear: string;
  };
  smartWatch: T;
  Bike?: X;
}

interface poorSmartWatch {
  brand: string;
  model: string;
  releaseYear: string;
}
const poorDeveloper: Developer<poorSmartWatch, { brand: string; model: string }> = {
  name: "Mr Poor",
  salary: 50000,
  devices: {
    brand: "Samsung",
    model: "Galaxy S21",
    releaseYear: "2021",
  },
  smartWatch: {
    brand: "Samsung",
    model: "Galaxy Watch 4",
    releaseYear: "2021",
  },
  Bike: {
    brand: "Yamaha",
    model: "R15",
  },
};

interface richSmartWatch {
  brand: string;
  model: string;
  waterResistance: boolean;
}
const richDeveloper: Developer<richSmartWatch> = {
  name: "Mr Rich",
  salary: 150000,
  devices: {
    brand: "Apple",
    model: "iPhone 13 Pro",
    releaseYear: "2021",
  },
  smartWatch: {
    brand: "Apple",
    model: "Apple Watch Series 9",
    waterResistance: true,
  },
};
