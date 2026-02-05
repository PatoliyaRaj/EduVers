import React from "react";
import IndexStud from "./Student_Dashboard/indexstudent";
import { getAuth } from "../../../utils/users";
import { Navigate } from "react-router-dom";
import { ErrorToster } from "../../../components/toster";

function Dashboard() {
  const { isAuthenticated } = getAuth();
  if (!isAuthenticated) {
    setTimeout(() => {
      ErrorToster("Please login first to access your dashboard.", 2000);
    }, 1000);
    return <Navigate to="/Login" />;
  }
  return <IndexStud />;
}

export default Dashboard;
