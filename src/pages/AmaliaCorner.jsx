import React from "react";
import AmaliaCornerLayout from "../components/DashboardComponents/AmaliaCorner/AmaliaCornerLayout";
import Header2 from "../components/DashboardComponents/Dashboard/Header2";

export default function AmaliaCorner() {
  return (
    <div className="min-h-screen relative">
      <Header2 />
      <div className="bg-[#f5f5f5] px-4 py-4">
        <AmaliaCornerLayout />
      </div>
    </div>
  );
}
