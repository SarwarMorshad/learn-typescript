// Function : arrow function and Normal function

// Normal function
function addNormal(a: number, b: number) {
  return a + b;
}

addNormal(2, 3); // 5

const addArrow = (a: number, b: number): number => {
  return a + b;
};

// Object => function => method

const user = {
  name: "John",
  balance: 1000,
  addBalance(amount: number): number {
    return this.balance + amount;
  },
};

user.addBalance(500); // 1500

// Callback function

const arr: number[] = [1, 2, 3, 4, 5];

const sqrArr = arr.map((num: number): number => num * num);
