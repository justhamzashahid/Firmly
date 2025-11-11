import React from 'react';

export default function SettingsHeader() {
  return (
    <div className="mb-6 sm:mb-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-gray-900 mb-2">
        Account settings
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-serif">
        Manage your personal account settings.
      </p>
    </div>
  );
}

