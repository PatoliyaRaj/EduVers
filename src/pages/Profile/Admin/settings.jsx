import React from "react";
import AdminLayout from "../../../utils/Adminlayoute";
import { getBreadcrumbs } from "../../../utils/breadcrumbs";

function Settings() {
  const breadcrumbItems = getBreadcrumbs("SETTINGS");

  return (
    <React.Fragment>
      <AdminLayout
        showSearch={false}
        className="p-0"
        breadcrumbItems={breadcrumbItems}
      >
        <div className="flex justify-center items-center h-[70vh]">
          <h1 className="text-3xl font-bold text-gray-700">
            Settings Page Coming Soon...
          </h1>
            </div>
        </AdminLayout>
    </React.Fragment>
  );
}

export default Settings;
