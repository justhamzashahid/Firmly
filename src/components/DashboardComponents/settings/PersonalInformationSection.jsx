import React from 'react';
import ProfileImageUpload from './ProfileImageUpload';

export default function PersonalInformationSection({
  personalInfo,
  profileImage,
  onPersonalInfoChange,
  onImageUpload,
  onImageDelete,
  onSaveChanges
}) {
  return (
    <div className="mb-6 shadow-sm p-4 lg:p-6 bg-[#fafafa] border-[#f2f2f2] border rounded-3xl">
      <div className="mb-6">
        <h2 className="text-xl lg:text-3xl font-cormorant font-bold text-[#3D3D3D] mb-1">
          Personal information
        </h2>
        <p className="text-sm sm:text-base text-[#3D3D3D]/60 font-inter font-medium">
          Add and update your personal information.
        </p>
      </div>

      {/* Profile Image Section */}
      <ProfileImageUpload
        profileImage={profileImage}
        onImageUpload={onImageUpload}
        onImageDelete={onImageDelete}
      />

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            value={personalInfo.firstName}
            onChange={onPersonalInfoChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6664D3] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            value={personalInfo.lastName}
            onChange={onPersonalInfoChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6664D3] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age
          </label>
          <input
            type="text"
            name="age"
            value={personalInfo.age}
            onChange={onPersonalInfoChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6664D3] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={onPersonalInfoChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6664D3] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current job role
          </label>
          <select
            name="currentJobRole"
            value={personalInfo.currentJobRole}
            onChange={onPersonalInfoChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6664D3] focus:border-transparent"
          >
            <option value="Computing">Computing</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Years of experience
          </label>
          <select
            name="yearsOfExperience"
            value={personalInfo.yearsOfExperience}
            onChange={onPersonalInfoChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6664D3] focus:border-transparent"
          >
            <option value="0-1 years">0-1 years</option>
            <option value="2-5 years">2-5 years</option>
            <option value="6-10 years">6-10 years</option>
            <option value="11+ years">11+ years</option>
          </select>
        </div>
      </div>

      {/* Save Changes Button */}
      <button
        onClick={onSaveChanges}
        className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium text-sm sm:text-base"
        type="button"
      >
        Save changes
      </button>
    </div>
  );
}

