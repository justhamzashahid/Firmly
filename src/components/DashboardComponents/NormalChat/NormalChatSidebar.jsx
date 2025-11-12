import React, { useState } from "react";

const NormalChatSidebar = ({ isCollapsed, onToggleCollapse }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const conversations = [
    {
      date: "JUN 09, 2025 - 11:18 am",
      title: "Cultivating Empathy",
      isActive: true,
    },
    {
      date: "JUN 08, 2025 - 03:52 pm",
      title: "Diagnostic Debrief",
      isActive: false,
    },
  ];

  return (
    <>
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onToggleCollapse}
        />
      )}
      {isCollapsed && (
        <button
          onClick={onToggleCollapse}
          className="hidden md:flex fixed left-0 top-4 z-50 bg-white border border-[#ECECEC] rounded-r-2xl p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
          aria-label="Open sidebar"
          title="Open sidebar to view all conversations"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
      <div
        className={`bg-white rounded-2xl transition-all duration-300 ${
          isCollapsed
            ? "w-0 overflow-hidden -translate-x-full md:translate-x-0"
            : "w-3/4 md:w-1/4 lg:w-1/5 translate-x-0 mr-4"
        } fixed md:relative z-50 md:z-auto flex flex-col h-full`}
        style={{ maxHeight: "100%" }}
      >
        <div className="px-5 py-3 flex items-center justify-between  mt-4">
          <h2 className="text-xl md:text-2xl font-semibold text-black font-cormorant ">
            All Conversations
          </h2>
          <button
            onClick={onToggleCollapse}
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isCollapsed ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
              />
            </svg>
          </button>
        </div>
        <div className="p-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search conversation"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 font-inter font-medium text-[#9E9CAE]  py-3 bg-transparent border-[1px] border-[#ECECEC] rounded-xl focus:outline-none focus:ring-[1px] focus:ring-[#6664D3] text-sm md:text-base pr-10"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9E9CAE] hover:text-gray-600 transition-colors"
              aria-label="New conversation"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-3 py-3 mb-2">
          <h3 className="text-xs md:text-sm font-inter font-semibold text-black/30 uppercase tracking-wide">
            Recent
          </h3>
        </div>
        <div className="flex-1 overflow-y-auto px-3 pb-4">
          {conversations.map((conv, index) => (
            <div
              key={index}
              className={`rounded-xl border border-[#ECECEC] p-3 mb-2 cursor-pointer transition-colors ${
                conv.isActive ? "bg-[#F5F5F5]" : "bg-white hover:bg-gray-50"
              }`}
            >
              <p className="text-xs text-[#3D3D3D]/60 mb-1">{conv.date}</p>
              <p className="text-sm md:text-base font-medium text-[#3D3D3D] font-inter">
                {conv.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NormalChatSidebar;
