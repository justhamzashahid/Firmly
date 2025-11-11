import React from "react";
export default function SettingsHeader() {
  return (
    <div className="lg:my-8 my-4">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-bold text-[#3D3D3D] mb-2">
        Account settings
      </h1>
      <p className="text-sm sm:text-base lg:text-xl text-[#3D3D3D]/60 font-inter-medium">
        Manage your personal account settings.
      </p>
    </div>
  );
}