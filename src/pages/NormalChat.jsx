import React from "react";
import Header2 from "../components/DashboardComponents/Dashboard/Header2";
import NormalChatLayout from "../components/DashboardComponents/NormalChat/NormalChatLayout";

export default function NormalChat() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header2 />
      <div className="flex-1 bg-[#f5f5f5] 2xl:px-16 xl:px-12 lg:px-8 md:px-6 sm:px-4 px-4 py-8 overflow-hidden">
        <NormalChatLayout />
      </div>
    </div>
  );
}
