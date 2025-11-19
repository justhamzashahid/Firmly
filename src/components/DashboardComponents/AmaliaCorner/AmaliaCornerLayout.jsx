import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ProgressBarsSection from "./ProgressBarsSection";
import TextBlock from "./TextBlock";
import ChatInputFooter from "./ChatInputFooter";
const AmaliaCornerLayout = () => {
  const navigate = useNavigate();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [messages, setMessages] = useState([]);
  const [showPathwayView, setShowPathwayView] = useState(false);
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

  useEffect(() => {
    // Check if user came from clicking "Generate my Leadership Pathway"
    const shouldShowPathway = sessionStorage.getItem("showLeadershipPathway");
    if (shouldShowPathway === "true") {
      setShowPathwayView(true);
      // Clear the flag after using it
      sessionStorage.removeItem("showLeadershipPathway");
    }
  }, []);
  const initialMessage = (
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
  const handleGeneratePathway = () => {
    const pathwayMessage = (
      <>
        Great! Let's work together to create your personalized Leadership
        Pathway. Based on your Glow and Grow areas, I'll help you develop a
        tailored plan to enhance your leadership skills and reach your full
        potential.
        <br />
        <br />
        Let's start by discussing your goals and priorities. What would you like
        to focus on first?
      </>
    );
    setMessages([...messages, pathwayMessage]);
  };
  const handleGoToDashboard = () => {
    // Set flag to indicate user has visited Amalia Corner and clicked "Go to Dashboard"
    // Use sessionStorage so it resets on page refresh
    sessionStorage.setItem("hasVisitedAmaliaCorner", "true");
    navigate("/dashboard");
  };

  const handleStartSession = () => {
    // Handle start session action
    console.log("Start Session clicked");
    // Add your logic here to start the session
  };
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
          {showPathwayView ? (
            <>
              {/* Leadership Pathway View */}
              <div className="mb-8">
                <p className="text-base md:text-lg text-[#3D3D3D] font-inter">
                  I'll create a personalized development plan focused on your
                  growth areas.
                </p>
              </div>

              {/* Three Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                {/* Common Understanding Card - Active */}
                <div className="bg-white border-2 border-[#3D3D3D]/10  rounded-2xl p-6 shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                            stroke="#6664D3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 2V8H20"
                            stroke="#6664D3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-inter-medium text-[#3D3D3D]">
                          Expert knowledge
                        </p>
                        <p className="text-xs font-inter text-[#3D3D3D]/60">
                          8 min
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-cormorant font-bold text-[#2B2B2B] mb-1">
                    Common Understanding
                  </h3>
                  <p className="text-sm text-[#2B2B2B] font-inter font-medium mb-6 leading-relaxed">
                    Introducing ideas that matter to women and their place at
                    work, based on research and industry reporting.
                  </p>
                  <button className="w-fit px-4 py-3 bg-[#3D3D3D] text-[#F5F5F5] rounded-xl font-inter-medium text-sm hover:bg-[#2D2D2D] transition-colors">
                    Start element
                  </button>
                </div>

                {/* Reflective Practice Card - Locked */}
                <div className="bg-white border-2 border-[#E5E5E5] rounded-2xl p-6 opacity-60">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-inter-medium text-[#9CA3AF]">
                          Workbook
                        </p>
                        <p className="text-xs font-inter text-[#9CA3AF]">
                          8 min
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-cormorant font-bold text-[#9CA3AF] mb-3">
                    Reflective Practice
                  </h3>
                  <p className="text-sm text-[#9CA3AF] font-inter mb-6 leading-relaxed">
                    Small description about the element contents. Lorem ipsum
                    sit dolor amet avec consect.
                  </p>
                  <button className="w-full px-4 py-3 bg-[#F5F5F5] text-[#9CA3AF] rounded-xl font-inter-medium text-sm flex items-center justify-center gap-2 cursor-not-allowed">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1V3M8 13V15M2.22 2.22L3.64 3.64M12.36 12.36L13.78 13.78M1 8H3M13 8H15M2.22 13.78L3.64 12.36M12.36 3.64L13.78 2.22"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Locked
                  </button>
                </div>

                {/* Application Card - Locked */}
                <div className="bg-white border-2 border-[#E5E5E5] rounded-2xl p-6 opacity-60">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-inter-medium text-[#9CA3AF]">
                          Workbook
                        </p>
                        <p className="text-xs font-inter text-[#9CA3AF]">
                          8 min
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-cormorant font-bold text-[#9CA3AF] mb-3">
                    Application
                  </h3>
                  <p className="text-sm text-[#9CA3AF] font-inter mb-6 leading-relaxed">
                    Small description about the element contents. Lorem ipsum
                    sit dolor amet avec consect.
                  </p>
                  <button className="w-full px-4 py-3 bg-[#F5F5F5] text-[#9CA3AF] rounded-xl font-inter-medium text-sm flex items-center justify-center gap-2 cursor-not-allowed">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1V3M8 13V15M2.22 2.22L3.64 3.64M12.36 12.36L13.78 13.78M1 8H3M13 8H15M2.22 13.78L3.64 12.36M12.36 3.64L13.78 2.22"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Locked
                  </button>
                </div>
              </div>

              {/* Pathway Details Section */}
              <div className="bg-[#F5F5F5] rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-base md:text-lg text-[#3D3D3D] font-inter mb-6">
                  We'll start with{" "}
                  <span className="font-semibold">Empathy</span>. For that, I've
                  scheduled 4 sessions for you:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#6664D3] font-bold mt-1">•</span>
                    <span className="text-base text-[#3D3D3D] font-inter">
                      Session 1: The Power of Empathetic Leadership (Common
                      Understanding)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6664D3] font-bold mt-1">•</span>
                    <span className="text-base text-[#3D3D3D] font-inter">
                      Session 2: Reflective Practice - Empathy in Action
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6664D3] font-bold mt-1">•</span>
                    <span className="text-base text-[#3D3D3D] font-inter">
                      Session 3: The Empathy Toolkit - Practical Applications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6664D3] font-bold mt-1">•</span>
                    <span className="text-base text-[#3D3D3D] font-inter">
                      Session 4: Integration and Forward Movement
                    </span>
                  </li>
                </ul>
                <p className="text-sm md:text-base text-[#3D3D3D]/70 font-inter mb-4 leading-relaxed">
                  Each session is designed to be conversational and practical,
                  building on real workplace scenarios. We'll work together to
                  develop your empathetic leadership skills through
                  evidence-based techniques.
                </p>
                <p className="text-sm md:text-base text-[#3D3D3D]/70 font-inter">
                  You would always have this pathway on the main dashboard so
                  you can work on all the points one by one.
                </p>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <button
                  onClick={handleStartSession}
                  className="flex-1 px-6 py-3 bg-[#F5F5F5] text-[#3D3D3D] rounded-xl font-inter-medium text-base hover:bg-[#E5E5E5] transition-colors"
                >
                  Start Session
                </button>
                <button
                  onClick={handleGoToDashboard}
                  className="flex-1 px-6 py-3 bg-[#3D3D3D] text-white rounded-xl font-inter-medium text-base hover:bg-[#2D2D2D] transition-colors"
                >
                  Go to Dashboard
                </button>
              </div>
            </>
          ) : (
            <>
              <ChatMessage message={initialMessage} />
              {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
              ))}
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
              <p className="text-sm md:text-base font-inter-regular text-black   bg-[#F5F5FF] p-4 rounded-xl">
                You can now view your Glow and Grow areas at all times on your
                dashboard. I will help you to work on them and improve your
                skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 my-6 md:my-8  max-w-2xl mx-auto">
                <button
                  onClick={handleGeneratePathway}
                  className="flex-1 px-5  py-3.5  bg-[#F5F5F5]  text-[#578DDD] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#E5E5E5]"
                >
                  Generate my Leadership Pathway
                </button>
                <button
                  onClick={handleGoToDashboard}
                  className="flex-1   py-3.5 px-5  bg-[#3D3D3D] text-[#F5F5F5] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#2D2D2D]"
                >
                  Go to Dashboard
                </button>
              </div>
              <div className="mb-8">
                <p className="text-sm md:text-base font-inter-regular text-black  mb-6 md:mb-8 bg-[#F5F5FF] p-4 rounded-xl">
                  I'll create a personalized development plan focused on your
                  growth areas.
                </p>
              </div>

              {/* Three Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                {/* Common Understanding Card - Active */}
                <div className="bg-white border-2 border-[#3D3D3D]/10 rounded-2xl p-6 ">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                            stroke="#6664D3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 2V8H20"
                            stroke="#6664D3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-inter-medium text-[#3D3D3D]">
                          Expert knowledge
                        </p>
                        <p className="text-xs font-inter text-[#3D3D3D]/60">
                          8 min
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-cormorant font-bold text-[#3D3D3D] mb-3">
                    Common Understanding
                  </h3>
                  <p className="text-sm text-[#3D3D3D]/70 font-inter mb-6 leading-relaxed">
                    Introducing ideas that matter to women and their place at
                    work, based on research and industry reporting.
                  </p>
                  <button className=" px-4 py-3 bg-[#3D3D3D] text-white rounded-xl font-inter-medium text-sm  transition-colors">
                    Start element
                  </button>
                </div>

                {/* Reflective Practice Card - Locked */}
                <div className="bg-white border-2 border-[#E5E5E5] rounded-2xl p-6 opacity-60">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-inter-medium text-[#9CA3AF]">
                          Workbook
                        </p>
                        <p className="text-xs font-inter text-[#9CA3AF]">
                          8 min
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-cormorant font-bold text-[#9CA3AF] mb-3">
                    Reflective Practice
                  </h3>
                  <p className="text-sm text-[#9CA3AF] font-inter mb-6 leading-relaxed">
                    Small description about the element contents. Lorem ipsum
                    sit dolor amet avec consect.
                  </p>
                  <button className="w-full px-4 py-3 bg-[#F5F5F5] text-[#9CA3AF] rounded-xl font-inter-medium text-sm flex items-center justify-center gap-2 cursor-not-allowed">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1V3M8 13V15M2.22 2.22L3.64 3.64M12.36 12.36L13.78 13.78M1 8H3M13 8H15M2.22 13.78L3.64 12.36M12.36 3.64L13.78 2.22"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Locked
                  </button>
                </div>

                {/* Application Card - Locked */}
                <div className="bg-white border-2 border-[#E5E5E5] rounded-2xl p-6 opacity-60">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-inter-medium text-[#9CA3AF]">
                          Workbook
                        </p>
                        <p className="text-xs font-inter text-[#9CA3AF]">
                          8 min
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-cormorant font-bold text-[#9CA3AF] mb-3">
                    Application
                  </h3>
                  <p className="text-sm text-[#9CA3AF] font-inter mb-6 leading-relaxed">
                    Small description about the element contents. Lorem ipsum
                    sit dolor amet avec consect.
                  </p>
                  <button className="w-full px-4 py-3 bg-[#F5F5F5] text-[#9CA3AF] rounded-xl font-inter-medium text-sm flex items-center justify-center gap-2 cursor-not-allowed">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1V3M8 13V15M2.22 2.22L3.64 3.64M12.36 12.36L13.78 13.78M1 8H3M13 8H15M2.22 13.78L3.64 12.36M12.36 3.64L13.78 2.22"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Locked
                  </button>
                </div>
              </div>

              {/* Pathway Details Section */}
              <div className="bg-[#F5F5FF] rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-base  text-black font-regular font-inter mb-2">
                  We'll start with Empathy. For that, I've scheduled 4 sessions
                  for you:
                </p>
                <ul className="space-y-1 mb-2">
                  <li className="flex items-center gap-3">
                    <span className="text-black font-bold ">•</span>
                    <span className="text-base text-black font-regular font-inter">
                      Session 1: The Power of Empathetic Leadership (Common
                      Understanding)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-black font-bold ">•</span>
                    <span className="text-base text-black font-regular font-inter">
                      Session 2: Reflective Practice - Empathy in Action
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-black font-bold ">•</span>
                    <span className="text-base text-black font-regular font-inter">
                      Session 3: The Empathy Toolkit - Practical Applications
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-black font-bold ">•</span>
                    <span className="text-base text-black font-regular font-inter">
                      Session 4: Integration and Forward Movement
                    </span>
                  </li>
                </ul>
                <p className="text-base text-black font-regular/70 font-inter mb-2 leading-relaxed">
                  Each session is designed to be conversational and practical,
                  building on real workplace scenarios. We'll work together to
                  develop your empathetic leadership skills through
                  evidence-based techniques.
                </p>
                <p className="text-base text-black font-regular/70 font-inter">
                  You would always have this pathway on the main dashboard so
                  you can work on all the points one by one.
                </p>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto">
                <button
                  onClick={handleStartSession}
                  className="flex-1 px-5  py-3  bg-[#F5F5F5]  text-[#578DDD] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#E5E5E5]"
                >
                  Start Session
                </button>
                <button
                  onClick={handleGoToDashboard}
                  className="flex-1 px-5 py-3 bg-[#3D3D3D] text-white rounded-2xl font-inter-medium text-base hover:bg-[#2D2D2D] transition-colors"
                >
                  Go to Dashboard
                </button>
              </div>
            </>
          )}
        </div>
        {!showPathwayView && (
          <div
            className={`absolute bottom-0  left-0 right-0 ${
              isSidebarCollapsed ? "z-50" : "z-50"
            } `}
          >
            <ChatInputFooter />
          </div>
        )}
      </div>
    </div>
  );
};
export default AmaliaCornerLayout;
