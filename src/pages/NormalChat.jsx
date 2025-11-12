import React from "react";
import Header2 from "../components/DashboardComponents/Dashboard/Header2";
import NormalChatLayout from "../components/DashboardComponents/NormalChat/NormalChatLayout";

export default function NormalChat() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header2 />
      <div className="flex-1 bg-[#f5f5f5] px-4 py-4 overflow-hidden">
        <NormalChatLayout />
      </div>
    </div>
  );
}
