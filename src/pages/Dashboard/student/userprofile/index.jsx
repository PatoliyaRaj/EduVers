import React from 'react'
import AdminLayout from '../../../../utils/Adminlayoute'
import { getBreadcrumbs } from '../../../../utils/breadcrumbs';
import Display from './display';
import AcademicCredentials from './AcademicCredentials';
import ProficiencyMetrics from './ProficiencyMetrics';
import AcademicHonors from './AcademicHonors';
import VerifiedCertifications from './VerifiedCertifications';
import { ProfileProvider } from './ProfileContext';

const breadcrumbItems = getBreadcrumbs("USER_PROFILE");

function Userprofile() {
  return (
    <AdminLayout
      showSearch={false}
      className="p-0 "
      breadcrumbItems={breadcrumbItems}
    >
      <ProfileProvider>
        <Display/>
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          <div className="lg:col-span-7 space-y-10">
            <AcademicCredentials />
            <ProficiencyMetrics />
          </div>
          
          <div className="lg:col-span-5 space-y-10">
            <AcademicHonors />
            <VerifiedCertifications />
          </div>
        </div>
      </ProfileProvider>
    </AdminLayout>
  )
}

export default Userprofile