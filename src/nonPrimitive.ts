// array, Object, tuple

let shoppingList: string[] = ["milk", "bread", "eggs"];

let mixedArr: (string | number)[] = ["John", 25];

let coordinates: [number, number] = [40, -74];

let couple: [string, string] = ["John", "Jane"];

let mixedTuple: [string, number, boolean] = ["John", 30, true];

// reference type: object

const user: {
  organization: "OpenAI"; // literal type
  firstName: string;
  middleName?: string; // optional property
  lastname: string;
} = {
  organization: "OpenAI",
  firstName: "John",
  middleName: "Doe",
  lastname: "Smith",
};
