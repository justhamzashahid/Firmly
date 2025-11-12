import React, { useState } from "react";
import GrowAndGlowSection from "../components/DashboardComponents/Dashboard/GrowAndGlowSection";
import LeadershipPathwaySection from "../components/DashboardComponents/Dashboard/LeadershipPathwaySection";
import DashboardHeader from "../components/DashboardComponents/Dashboard/DashboardHeader";
import StartConversationModal from "../components/DashboardComponents/Dashboard/StartConversationModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartChat = (mode) => {
    console.log(`Starting ${mode} chat`);
  };

  return (
    <div className="min-h-screen relative">
      <DashboardHeader />
      <div className="bg-[#f5f5f5] 2xl:px-16 xl:px-12 lg:px-8 md:px-6 sm:px-4 px-4">
        <GrowAndGlowSection />
        <LeadershipPathwaySection />
      </div>
      <button
        data-tour="amalia-corner"
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-16 h-16 sm:w-24 sm:h-24 bg-[#6664D3]  active:scale-95 rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#8A7BBF]/50 transition-all duration-300 flex-shrink-0 group"
      >
        <img
          src="/assets/images/dashboard/helpbtn.webp"
          alt="action icon"
          className="h-8 w-8 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-110"
        />
      </button>
      <StartConversationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStartChat={handleStartChat}
      />
    </div>
  );
}