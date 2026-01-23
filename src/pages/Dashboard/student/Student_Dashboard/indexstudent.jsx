import React from "react";
import GretingPoster from "./GretingPoster";
import MyProgress from "./myProgress";
import RecommendedSection from "./recommended";
import ChartSection from "./chartsection";
import Instructures from "./instructures"; 
import AdminLayout from './../../../../utils/Adminlayoute';
import { getBreadcrumbs } from "../../../../utils/breadcrumbs";

function IndexStud() {
  const breadcrumbItems = getBreadcrumbs("DASHBOARD");
  return (
    <AdminLayout
      showSearch={false}
      className="p-0"
      breadcrumbItems={breadcrumbItems}
    >
      <GretingPoster />
      <MyProgress />
      <RecommendedSection/>
      <ChartSection/>
      <Instructures/>
    </AdminLayout>
  );
}

export default IndexStud;
