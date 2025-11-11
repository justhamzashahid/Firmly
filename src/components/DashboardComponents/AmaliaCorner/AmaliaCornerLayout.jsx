import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ProgressBarsSection from "./ProgressBarsSection";
import TextBlock from "./TextBlock";
import SummaryCard from "./SummaryCard";
import ChatInputFooter from "./ChatInputFooter";

const AmaliaCornerLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  useEffect(() => {
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

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile && !isSidebarCollapsed) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isSidebarCollapsed]);

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

  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <div className="flex-1  flex flex-col overflow-hidden bg-white rounded-2xl border border-[#ECECEC] relative">
        <ChatHeader
          onMenuClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        <div className="flex-1 overflow-y-auto max-w-5xl mx-auto  px-4 pb-24">
          <ChatMessage message={message} />
          <ProgressBarsSection />
          <TextBlock
            title="Based on your profile, I can see your Glow Areas (strengths) are:"
            items={glowAreas}
            bgColor="bg-[#F5F5FF]"
          />
          <TextBlock
            title="Your Grow Areas (development opportunities) are:"
            items={growAreas}
            bgColor="bg-[#F5F5FF]"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <SummaryCard
              title="Doing great"
              subtitle="Your female talent is thriving in the following domains."
              items={doingGreatItems}
              bgColor="bg-[#378C78]"
              iconImage="/assets/images/dashboard/doing.webp"
            />
            <SummaryCard
              title="Growth areas"
              subtitle="These areas need your immediate attention to balance workplace wellbeing."
              items={growthAreasItems}
              bgColor="bg-[#C56A55]"
              iconImage="/assets/images/dashboard/growth.webp"
            />
          </div>
          <p className="text-sm md:text-base font-inter-regular text-black  mb-6 md:mb-8 bg-[#F5F5FF] p-4 rounded-xl">
            You can now view your Glow and Grow areas at all times on your
            dashboard. I will help you to work on them and improve your skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 max-w-2xl mx-auto">
            <button className="flex-1 px-5  py-4  bg-[#F5F5F5]  text-[#578DDD] rounded-xl font-medium transition-colors text-sm md:text-base">
              Generate my Leadership Pathway
            </button>
            <button className="flex-1   py-3  bg-[#3D3D3D] text-[#F5F5F5] rounded-xl font-medium transition-colors text-sm md:text-base">
              Go to Dashboard
            </button>
          </div>
        </div>
        <div
          className={`absolute bottom-0  left-0 right-0 ${
            isSidebarCollapsed ? "" : ""
          } `}
        >
          <ChatInputFooter />
        </div>
      </div>
    </div>
  );
};

export default AmaliaCornerLayout;
