import React from "react";

export default function ChangePasswordSection({
  passwordInfo,
  onPasswordChange,
  onChangePassword,
}) {
  return (
    <div className="shadow-sm p-4 lg:p-6 bg-[#fafafa] border-[#f2f2f2] border lg:rounded-3xl rounded-2xl">
      <div className="mb-10">
        <h2 className="text-xl lg:text-2xl font-cormorant font-bold text-[#3D3D3D] mb-1">
          Change password
        </h2>
        <p className="text-sm sm:text-base text-[#3D3D3D]/60 font-inter font-medium">
          Your new password must be at least 8 characters long.
        </p>
      </div>

      {/* Password Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block  font-medium font-inter text-[#3D3D3D]/60 mb-2">
            Current password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={passwordInfo.currentPassword}
            onChange={onPasswordChange}
            placeholder="Insert current password"
            className="w-full px-4 py-3 bg-[#f7f7f7] border border-[#e8e8e8] rounded-2xl text-gray-900 focus:outline-none focus:ring-[1px] focus:ring-[#6664D3] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block  font-medium font-inter text-[#3D3D3D]/60 mb-2">
            New password
          </label>
          <input
            type="password"
            name="newPassword"
            value={passwordInfo.newPassword}
            onChange={onPasswordChange}
            placeholder="Insert new password"
            className="w-full px-4 py-3 bg-[#f7f7f7] border border-[#e8e8e8] rounded-2xl text-gray-900 focus:outline-none focus:ring-[1px] focus:ring-[#6664D3] focus:border-transparent"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block  font-medium font-inter text-[#3D3D3D]/60 mb-2">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={passwordInfo.confirmPassword}
            onChange={onPasswordChange}
            placeholder="Confirm new password"
            className="w-full px-4 py-3 bg-[#f7f7f7] border border-[#e8e8e8] rounded-2xl text-gray-900 focus:outline-none focus:ring-[1px] focus:ring-[#6664D3] focus:border-transparent"
          />
        </div>
      </div>

      {/* Change Password Button */}
      <button
        onClick={onChangePassword}
        className="px-6 py-3 bg-[#b0b0b0] text-[#F5F5F5] rounded-2xl transition-colors font-medium text-sm sm:text-base"
        type="button"
      >
        Change password
      </button>
    </div>
  );
}
