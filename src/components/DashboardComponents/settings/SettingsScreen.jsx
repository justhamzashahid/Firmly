import React, { useState } from "react";
import SettingsSidebar from "./SettingsSidebar";
import SettingsHeader from "./SettingsHeader";
import PersonalInformationSection from "./PersonalInformationSection";
import ChangePasswordSection from "./ChangePasswordSection";

export default function SettingsScreen() {
  // Form state for Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "maya",
    lastName: "maya@firmly.com",
    age: "maya",
    email: "maya@firmly.com",
    currentJobRole: "Computing",
    yearsOfExperience: "2-5 years",
  });

  // Form state for Password Change
  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [profileImage, setProfileImage] = useState(
    "/assets/images/dashboard/avatar.png"
  );

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordInfo((prev) => ({
      ...prev,
      [name]: value,
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
    console.log("Saving personal information:", personalInfo);
  };
  

  const handleChangePassword = () => {
    // Handle password change logic here
    console.log("Changing password:", passwordInfo);
  };

  return (
    <div className="py-8">
      <SettingsHeader />
      <main className="grid lg:grid-cols-12 bg-white gap-7 rounded-3xl shadow-md lg:p-8 p-5 items-stretch">
        <div className="lg:col-span-3 flex">
          <SettingsSidebar />
        </div>
        <div className="lg:col-span-9 ">
          <PersonalInformationSection
            personalInfo={personalInfo}
            profileImage={profileImage}
            onPersonalInfoChange={handlePersonalInfoChange}
            onImageUpload={handleImageUpload}
            onImageDelete={handleImageDelete}
            onSaveChanges={handleSaveChanges}
          />
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
