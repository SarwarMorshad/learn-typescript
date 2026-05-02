// Spread Operators
const friends = ["Alice", "Bob", "Charlie"];
const schoolFriends = ["David", "Eve"];
const collegeFriends = ["Frank", "Grace"];

// Merging arrays using spread operator
friends.push(...schoolFriends, ...collegeFriends);
// console.log(friends); // Output: ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"]

const user = {
  name: "John",
  phoneNo: "1234567890",
};

const otherInfo = {
  hobby: "Reading",
  city: "New York",
};

const userInfo = { ...user, ...otherInfo };
// console.log(userInfo); // Output: { name: "John", phoneNo: "1234567890", hobby: "Reading", city: "New York" }

// Rest Operators
const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Inviting ${friend}`);
  });
};

sendInvite("Alice", "Bob", "Charlie"); // Output: Inviting Alice..., Inviting Bob..., Inviting Charlie...
