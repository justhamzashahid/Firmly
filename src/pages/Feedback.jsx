import React from "react";
import FeedbackSteps from "../components/DashboardComponents/Feedback/FeedbackSteps";

export default function Feedback() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <div className="flex-1 bg-[#c7c7c7] p-6 overflow-hidden">
        <FeedbackSteps />
      </div>
    </div>
  );
}
