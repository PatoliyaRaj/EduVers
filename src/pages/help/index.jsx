import React from "react";
import AdminLayout from "../../utils/Adminlayoute";
import Poster from "./poster";
import HelpTopics from "./HelpTopics";
import HelpInfoAndContect from "./HelpInfoAndContect";
import { getBreadcrumbs } from "../../utils/breadcrumbs";
function Help() {
  const breadcrumbItems = getBreadcrumbs("HELP");
  return (
    <AdminLayout
      showSearch={false}
      className="p-0"
      breadcrumbItems={breadcrumbItems}
    >
      <Poster />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-6 lg:px-8 mt-12 pb-12">
        <HelpTopics />
        <HelpInfoAndContect />
      </div>
    </AdminLayout>
  );
}
export default Help;

