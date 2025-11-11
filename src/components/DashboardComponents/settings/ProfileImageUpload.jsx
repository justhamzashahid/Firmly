import React from 'react';

export default function ProfileImageUpload({ profileImage, onImageUpload, onImageDelete }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
      <div className="relative">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-gray-200"
          />
        ) : (
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
          />
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm sm:text-base">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Update image
          </span>
        </label>
        {profileImage && (
          <button
            onClick={onImageDelete}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm sm:text-base"
            type="button"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

