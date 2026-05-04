// Mapped types
const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
const arrayOfStrings: string[] = [];

const arrayOfStringUsingMap: string[] = arrayOfNumbers.map((num) => num.toString());

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"]; // number

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: string }> = {
  height: 10,
  width: "20",
};
