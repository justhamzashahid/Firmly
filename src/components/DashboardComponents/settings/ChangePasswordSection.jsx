import React from 'react';

export default function ChangePasswordSection({
  passwordInfo,
  onPasswordChange,
  onChangePassword
}) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
          Change password
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Your new password must be at least 8 characters long.
        </p>
      </div>

      {/* Password Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={passwordInfo.currentPassword}
            onChange={onPasswordChange}
            placeholder="Insert current password"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6664D3] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New password
          </label>
          <input
            type="password"
            name="newPassword"
            value={passwordInfo.newPassword}
            onChange={onPasswordChange}
            placeholder="Insert new password"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6664D3] focus:border-transparent"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={passwordInfo.confirmPassword}
            onChange={onPasswordChange}
            placeholder="Confirm new password"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6664D3] focus:border-transparent"
          />
        </div>
      </div>

      {/* Change Password Button */}
      <button
        onClick={onChangePassword}
        className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium text-sm sm:text-base"
        type="button"
      >
        Change password
      </button>
    </div>
  );
}

