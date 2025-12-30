import React from "react";
import AdminLayout from "../../utils/Adminlayoute";

function Help() {
  return (
    <AdminLayout
      pageTitle="Help"
      showSearch={false}
      className="p-0"
      subheader="shadow-none"
    >
      <div className="flex justify-center items-center h-[70vh]">
        <h1 className="text-3xl font-bold text-gray-700">
          Help Page Coming Soon...
        </h1>
      </div>
    </AdminLayout>
  );
}
export default Help;
