import React from "react";
import AdminLayout from "../../../utils/Adminlayoute";
import Userlist from "./userlist";
import { useQuery } from "@tanstack/react-query";
import API from "../../../utils/axiosintence";
import { User2 } from "lucide-react";

function ActiveUsers() {
  const fetchusers = async () => {
    const response = await API.get("/User/getallusers");
    const Userdata = response.data;
    console.log("🚀 ~ fetchusers ~ Userdata:", Userdata);
    return Userdata;
  };

  const {
    data: Userdata,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchusers,
  });

  if (isLoading) {
    return (
      <AdminLayout
        pageTitle="Profile"
        showSearch={false}
        className="p-0"
        subheader="shadow-none"
      >
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D8A25E] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout pageTitle="Profile" showSearch={false}>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error: {error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#D8A25E] text-white rounded-md hover:opacity-90"
            >
              Retry
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (!Userdata || Userdata.length === 0) {
    return (
      <AdminLayout pageTitle="Profile" showSearch={false}>
        <div className="flex items-center justify-center h-96">
          <div className="text-center flex flex-col">
            <User2 size={48} className="text-gray-400 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              No Users Found
            </h2>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <React.Fragment>
      <AdminLayout showSearch={false} className="p-4 sm:p-6 md:p-8" pageTitle="Active Users" >
        <section>
          <div className="flex flex-col w-full bg-[#D8A25E]/10 ">
             <div className="mb-6 flex flex-col sm:flex-row sm:justify-between   sm:items-center gap-4 p-6">
               <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#343131]">
                  Manage Users
                </h1>
                <p className="text-sm text-gray-500">
                  Manage and view all user accounts
                </p>
              </div>
            </div>

            {/* ***********       User List Section *********** */}
            <div className=" userlists h-auto w-full  rounded-lg p-4 flex flex-col gap-2">
              {(Userdata.users).map((user) => (
                <Userlist
                  key={user._id}
                  name={`${user.firstName} ${user.lastName}`}
                  email={user.email}
                  role={user.userType}
                  status={user.isLogin ? "Online" : "Offline"}
                  statusColor={user.isLoading ? "bg-green-200" : "bg-white"}
                  onDelete={(email) => {console.log("Delete user with email:", email);}}
                />
              ))}
            </div>
          </div>
        </section>
      </AdminLayout>
    </React.Fragment>
  );
}

export default ActiveUsers;
