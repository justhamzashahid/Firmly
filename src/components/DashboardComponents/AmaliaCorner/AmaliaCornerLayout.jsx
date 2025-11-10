import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ProgressBarsSection from "./ProgressBarsSection";
import TextBlock from "./TextBlock";
import SummaryCard from "./SummaryCard";
import ChatInputFooter from "./ChatInputFooter";

const AmaliaCornerLayout = () => {
  // Start collapsed on mobile, open on desktop
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  useEffect(() => {
    // Set initial state based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarCollapsed(false);
      } else {
        setIsSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const message = (
    <>
      Hi, Lily, <br /> I'm so glad you decided to dive deeper into your results
      with me. What I see in your diagnostic is really quite insightful - it
      paints a clear picture of who you are as a leader right now and where your
      greatest opportunities lie. Let's start by looking at your overall profile
      together.
      <br />
      The 'peers' benchmark shows you how your scores compare to other women in
      your organization who have completed this same diagnostic, giving you
      valuable context for understanding your results relative to your workplace
      environment.
    </>
  );

  const glowAreas = [
    "Goal Orientation - You excel at setting and pursuing objectives",
    "Workplace Belonging - You create strong connections with your team",
    "Resilience - You bounce back from challenges and setbacks",
  ];

  const growAreas = [
    "Empathy - Understanding and connecting with others' emotions",
    "Self-Belief - Confidence in your leadership abilities",
    "Engagement - Maintaining good motivation and involvement",
  ];

  const doingGreatItems = [
    { abbreviation: "GOA", label: "Goal Orientation", score: 96 },
    { abbreviation: "WOR", label: "Workplace Belonging", score: 89 },
    { abbreviation: "RES", label: "Resilience", score: 87 },
  ];

  const growthAreasItems = [
    { abbreviation: "EMP", label: "Empathy", score: 32 },
    { abbreviation: "ENG", label: "Engagement", score: 24 },
    { abbreviation: "SEL", label: "Self-belief", score: 22 },
  ];

  // Icons for summary cards - starburst/snowflake style
  const starIcon = (
    <svg
      className="w-12 h-12 md:w-16 md:h-16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.4 4.85L20 8l-3.5 3.4.8 4.9L12 16.5l-5.3 2.8.8-4.9L4 8l5.6-1.15L12 2zm0 2.8L9.8 7.5 5.5 8.2l2.8 2.7-.7 4.1L12 14.5l4.4 2.5-.7-4.1 2.8-2.7-4.3-.7L12 4.8z" />
      <path d="M12 6l1.2 2.4L16 9l-1.8 1.8.4 2.2L12 12.5l-2.6 1.5.4-2.2L8 9l2.8-.6L12 6z" />
    </svg>
  );

  // Brain/swirl icon
  const brainIcon = (
    <svg
      className="w-12 h-12 md:w-16 md:h-16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C8.5 2 6 4.5 6 8c0 2.2 1.1 4.1 2.8 5.3V16c0 .6.4 1 1 1h4.4c.6 0 1-.4 1-1v-2.7c1.7-1.2 2.8-3.1 2.8-5.3 0-3.5-2.5-6-6-6zm-2 11v-1h4v1c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1zm0-4h4v2h-4v-2z" />
      <path d="M10 10c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1 .4-1 1z" />
      <circle cx="9" cy="7" r="1" />
      <circle cx="15" cy="7" r="1" />
    </svg>
  );

  return (
    <div className="flex flex-col md:flex-row h-screen  overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content */}
      <div className="flex-1  flex flex-col overflow-hidden bg-white rounded-2xl border border-[#ECECEC]">
        {/* Chat Header */}
        <ChatHeader
          onMenuClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto  max-w-5xl mx-auto lg:px-0 px-4">
          {/* Chat Message */}
          <ChatMessage message={message} />

          {/* Progress Bars */}
          <ProgressBarsSection />

          {/* Glow Areas */}
          <TextBlock
            title="Based on your profile, I can see your Glow Areas (strengths) are:"
            items={glowAreas}
            bgColor="bg-purple-50"
          />

          {/* Grow Areas */}
          <TextBlock
            title="Your Grow Areas (development opportunities) are:"
            items={growAreas}
            bgColor="bg-purple-50"
          />

          {/* Summary Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <SummaryCard
              title="Doing great"
              subtitle="Your female talent is thriving in the following domains."
              items={doingGreatItems}
              bgColor="bg-teal-600"
              iconColor="text-teal-200"
              icon={starIcon}
            />
            <SummaryCard
              title="Growth areas"
              subtitle="These areas need your immediate attention to balance workplace wellbeing."
              items={growthAreasItems}
              bgColor="bg-orange-700"
              iconColor="text-orange-200"
              icon={brainIcon}
            />
          </div>

          {/* Dashboard Information */}
          <p className="text-sm md:text-base text-gray-800 mb-6 md:mb-8">
            You can now view your Glow and Grow areas at all times on your
            dashboard. I will help you to work on them and improve your skills.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
            <button className="flex-1 px-4 md:px-6 py-2 md:py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition-colors text-sm md:text-base">
              Generate my Leadership Pathway
            </button>
            <button className="flex-1 px-4 md:px-6 py-2 md:py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors text-sm md:text-base">
              Go to Dashboard
            </button>
          </div>
        </div>

        {/* Chat Input Footer */}
        <ChatInputFooter />
      </div>
    </div>
  );
};

export default AmaliaCornerLayout;
