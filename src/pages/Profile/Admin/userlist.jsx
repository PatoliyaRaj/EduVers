import React from "react";
import { Mail, Trash2, Shield } from "lucide-react";

function Userlist({
  name = "User Name",
  email = "user@example.com",
  role = "User ROLES",
  status = "Online",
  onDelete = (email) => {},
}) {
  const getRoleStyle = (role) => {
    return role.toLowerCase() === "teacher"
      ? "bg-amber-50 text-amber-800 border-amber-200"
      : "bg-blue-50 text-blue-800 border-blue-200";
  };

  const getStatusStyle = (status) => {
    return status.toLowerCase() === "online"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  return (
    <React.Fragment>
      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center flex-grow gap-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium bg-gradient-to-r from-[#343131] to-[#D8A25E]`}
            >
              {name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#343131]">{name}</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <Mail size={14} className="mr-2 text-[#D8A25E]" />
                {email}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-3 sm:mt-0">
            <div
              className={`flex items-center justify-center px-4 py-1 rounded-full border ${getRoleStyle(
                role
              )} `}
            >
              <Shield size={14} className="mr-1.5" />
              <span className="text-sm">
                {role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()}
              </span>
            </div>

            {/* Status Badge */}
            <div
              className={`flex items-center justify-center px-4 py-1 rounded-full ${getStatusStyle(
                status
              )}`}
            >
              <div
                className={`w-2 h-2 mr-1.5 rounded-full ${
                  status.toLowerCase() === "online"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              ></div>
              <span className="text-sm">{status}</span>
            </div>

            {/* Delete Button */}
            <button
              onClick={onDelete}
              className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-md border border-red-200 hover:border-red-300 transition-colors"
              title="Delete User"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Userlist;
