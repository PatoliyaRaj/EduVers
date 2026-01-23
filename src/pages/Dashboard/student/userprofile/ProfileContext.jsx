import React, { createContext, useContext, useState, useEffect } from 'react';
import { useGetUserDetailsQuery, useUpdateUserMutation } from '../../../../redux';
import { SuccessToster, ErrorToster } from "../../../../components/toster";
import { getAuth } from '../../../../utils/users';

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const { user } = getAuth();
  const email = user?.email;

  const { data: response, isLoading, error, refetch } = useGetUserDetailsQuery(email, {
    skip: !email,
  });
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  const userData = response?.user;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    campus: 'San Francisco Main',
    about: '',
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        email: userData.email || '',
        phoneNo: userData.phoneNo || '',
        campus: userData.campus || 'San Francisco Main',
        about: userData.about || '',
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateUser({
        email: userData?.email,
        id: userData?.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNo: formData.phoneNo,
        about: formData.about,
      }).unwrap();

      SuccessToster("Profile updated successfully!", 3000);
      refetch(); 
    } catch (err) {
      ErrorToster(err?.data?.message || 'Failed to update profile', 3000);
    }
  };

  const value = {
    user,
    userData,
    formData,
    setFormData,
    handleChange,
    handleSave,
    isLoading,
    isUpdating,
    error,
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
