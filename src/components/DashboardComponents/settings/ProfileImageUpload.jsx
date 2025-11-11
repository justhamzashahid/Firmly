import { Trash } from "lucide-react";
import React from "react";

export default function ProfileImageUpload({
  profileImage,
  onImageUpload,
  onImageDelete,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
      <div className="relative">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-xl object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-xl bg-gray-200 flex items-center justify-center">
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
      <div className="flex flex-col  gap-2">
        <h2 className="font-inter font-medium text-[#3D3D3D]/60">
          Profile image
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={onImageUpload}
              className="hidden"
            />
            <span className="inline-flex items-center font-inter font-medium gap-2 px-4 py-2 border border-[#e8e8e8] bg-[#f7f7f7]  rounded-xl text-[#3D3D3D] transition-colors text-sm sm:text-base">
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
              className="inline-flex items-center gap-2 px-3 py-2 border border-[#e8e8e8] bg-[#f7f7f7]  rounded-xl transition-colors text-sm sm:text-base"
              type="button"
            >
              <Trash className="w-4 h-4 text-[#CC6A64]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
