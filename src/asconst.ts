// as const assertion
const userRole = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

const canEdit = (role: (typeof userRole)[keyof typeof userRole]) => {
  if (role === userRole.Admin || role === userRole.Editor) {
    return true;
  } else return false;
};

const isEditPermission = canEdit(userRole.Admin);
