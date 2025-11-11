import React from "react";
import AmaliaCornerLayout from "../components/DashboardComponents/AmaliaCorner/AmaliaCornerLayout";
import Header2 from "../components/DashboardComponents/Dashboard/Header2";
export default function AmaliaCorner() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header2 />
      <div className="flex-1 bg-[#f5f5f5] px-4 py-4 overflow-hidden">
        <AmaliaCornerLayout />
      </div>
    </div>
  );
}