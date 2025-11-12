import React from "react";
import AmaliaCornerLayout from "../components/DashboardComponents/AmaliaCorner/AmaliaCornerLayout";
import Header2 from "../components/DashboardComponents/Dashboard/Header2";
export default function AmaliaCorner() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header2 />
      <div className="flex-1 bg-[#f5f5f5]  py-6 overflow-hidden 2xl:px-16 xl:px-12 lg:px-8 md:px-6 sm:px-4">
        <AmaliaCornerLayout />
      </div>
    </div>
  );
}