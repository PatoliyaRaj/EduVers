import React from "react";
import AdminProfile from "./Admin/AdminProfile";
import UserProfile from "./User/UserProfile";
import { getAuth } from "../../utils/users";
function Profile() {
  const user = getAuth().user;
  const userRole = user?.userType?.toLowerCase() || "student"; ;
  
  return (
    <React.Fragment>
      {userRole === "teacher" && <AdminProfile />}
      {userRole === "student" && <UserProfile />}
    </React.Fragment>
  );
}

export default Profile;
