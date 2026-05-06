// type guard
type value = string | number;

function add(a: value, b: value) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

// in Guard
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: string;
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} and his role ${user.role}`);
  } else {
    console.log(`${user.name} and he is normal user`);
  }
};

getUserInfo({ name: "John" });
getUserInfo({ name: "Jane", role: "admin" });
