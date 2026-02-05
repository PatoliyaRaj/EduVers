// Breadcrumb configurations and paths

export const breadcrumbPaths = {
  DASHBOARD: [{ label: "Dashboard", to: "/dashboard" }],

  MANAGE_COURSES: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Manage Courses" },
  ],
  EXPLORE_COURSES: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Explore Courses" },
  ],

  PROFILE: [{ label: "Dashboard", to: "/dashboard" }, { label: "Profile" }],

  USER_PROFILE: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "User Profile" },
  ],

  ADMIN_PROFILE: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Admin Profile" },
  ],

  COURSES: [{ label: "Dashboard", to: "/dashboard" }, { label: "Courses" }],

  COURSE_DETAILS: (courseTitle = "Course Details") => [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Courses", to: "/courses" },
    { label: courseTitle },
  ],
  MY_LEARNING: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "My Learning", to: "/mylearning" },
  ],

  ABOUT: [{ label: "Home", to: "/" }, { label: "About" }],

  CONTACT_US: [{ label: "Home", to: "/" }, { label: "Contact Us" }],

  HELP: [{ label: "Dashboard", to: "/dashboard" }, { label: "Help" }],

  RESOURCES: [{ label: "Dashboard", to: "/dashboard" }, { label: "Resources" }],

  SCHEDULE: [{ label: "Dashboard", to: "/dashboard" }, { label: "Schedule" }],

  LOGIN: [{ label: "Login" }],

  SIGNUP: [{ label: "Sign Up" }],

  EDIT_COURSE: (courseTitle = "Edit Course") => [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Manage Courses", to: "/admin/manage-courses" },
    { label: courseTitle },
  ],

  DELETE_COURSE: (courseTitle = "Delete Course") => [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Manage Courses", to: "/admin/manage-courses" },
    { label: courseTitle },
  ],

  MANAGE_COURSES_ADMIN: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Manage Courses" },
  ],

  USER_COMMENTS: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "User Comments" },
  ],

  ACTIVE_USERS: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Active Users" },
  ],

  ADD_COURSE: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Courses", to: "/managecourses" },
    { label: "Add Course" },
  ],

  SETTINGS: [{ label: "Dashboard", to: "/dashboard" }, { label: "Settings" }],
};

export const getBreadcrumbs = (key, ...params) => {
  const breadcrumb = breadcrumbPaths[key];

  if (typeof breadcrumb === "function") {
    return breadcrumb(...params);
  }

  return breadcrumb || [];
};

// Custom breadcrumb builder
export const buildBreadcrumb = (items) => {
  return items.map((item, index) => ({
    ...item,
    isCurrent: index === items.length - 1,
  }));
};
