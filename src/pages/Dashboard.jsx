import React from "react";
import GrowAndGlowSection from "../components/DashboardComponents/Dashboard/GrowAndGlowSection";
import LeadershipPathwaySection from "../components/DashboardComponents/Dashboard/LeadershipPathwaySection";
import DashboardHeader from "../components/DashboardComponents/Dashboard/DashboardHeader";

export default function Dashboard() {
  return (
    <div className="min-h-screen relative">
      <DashboardHeader />
      <GrowAndGlowSection />
      <LeadershipPathwaySection />
    </div>
  );
}
