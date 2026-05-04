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
const userList: genericArray<{ name: string; age: number }> = [
  {
    name: "Alice",
    age: 30,
  },
  {
    name: "Bob",
    age: 25,
  },
];
