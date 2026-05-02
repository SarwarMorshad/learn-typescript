// Union

type userRole = "admin" | "user" | "guest";

const getDashboard = (role: userRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

getDashboard("admin"); // Admin Dashboard

// Intersection
type employee = {
  id: number;
  name: string;
  phoneNo: string;
};

type manager = {
  designation: string;
  teamSize: number;
};

type managerEmployee = employee & manager;

const manager1: managerEmployee = {
  id: 1,
  name: "John",
  phoneNo: "1234567890",
  designation: "Project Manager",
  teamSize: 10,
};
