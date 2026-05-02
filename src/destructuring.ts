// object destructuring
const userProfile = {
  id: 1,
  name: {
    first: "John",
    middle: "William",
    last: "Doe",
  },
  gender: "male",
  age: 30,
  email: "john.doe@example.com",
};

const { age } = userProfile;
// console.log(age); // Output: 30
