// enum
// set of fixed string lateral
enum userRole {
  Admin = "admin",
  editor = "editor",
  viewer = "viewer",
}

const canEdit = (role: userRole) => {
  if (role === userRole.Admin || role === userRole.editor) {
    return true;
  } else return false;
};

const isEditPermission = canEdit(userRole.Admin);

// Enum is not recommended for large codebase because it can lead to maintenance issues and can be less flexible than other alternatives like union types or string literals. Enums can also introduce additional complexity and may not be as performant as other options, especially when used in large applications. It's often better to use union types or string literals for better type safety and maintainability.
