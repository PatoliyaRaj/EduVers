import React from "react";
import AdminProfile from "./Admin/AdminProfile";
import UserProfile from "./User/UserProfile";

function Profile() {
  const userRoll = localStorage.getItem("UserType") || "Student";
  return (
    <React.Fragment>
      {userRoll.toLowerCase() === "teacher" && <AdminProfile />}
      {userRoll.toLowerCase() === "student" && <UserProfile />}
    </React.Fragment>
  );
}

export default Profile;
