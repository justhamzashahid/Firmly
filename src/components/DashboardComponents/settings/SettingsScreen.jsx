import React, { useState } from 'react';
import SettingsSidebar from './SettingsSidebar';
import SettingsHeader from './SettingsHeader';
import PersonalInformationSection from './PersonalInformationSection';
import ChangePasswordSection from './ChangePasswordSection';

export default function SettingsScreen() {
  // Form state for Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'maya',
    lastName: 'maya@firmly.com',
    age: 'maya',
    email: 'maya@firmly.com',
    currentJobRole: 'Computing',
    yearsOfExperience: '2-5 years',
  });

  // Form state for Password Change
  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [profileImage, setProfileImage] = useState('/assets/images/dashboard/noti.png');

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setProfileImage(null);
  };

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log('Saving personal information:', personalInfo);
  };

  const handleChangePassword = () => {
    // Handle password change logic here
    console.log('Changing password:', passwordInfo);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full overflow-auto">
      {/* Left Sidebar Navigation */}
      <SettingsSidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto bg-[#f5f5f5] p-4 sm:p-6 lg:p-8 xl:p-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <SettingsHeader />

          {/* Personal Information Section */}
          <PersonalInformationSection
            personalInfo={personalInfo}
            profileImage={profileImage}
            onPersonalInfoChange={handlePersonalInfoChange}
            onImageUpload={handleImageUpload}
            onImageDelete={handleImageDelete}
            onSaveChanges={handleSaveChanges}
          />

          {/* Change Password Section */}
          <ChangePasswordSection
            passwordInfo={passwordInfo}
            onPasswordChange={handlePasswordChange}
            onChangePassword={handleChangePassword}
          />
        </div>
      </main>
    </div>
  );
}
