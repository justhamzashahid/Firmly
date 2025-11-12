import React, { useState, useEffect } from "react";
import NormalChatSidebar from "./NormalChatSidebar";
import NormalChatHeader from "./NormalChatHeader";
import NormalChatContent from "./NormalChatContent";
import NormalChatInput from "./NormalChatInput";

const NormalChatLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

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

  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden">
      <NormalChatSidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <div className="flex-1 flex flex-col overflow-hidden bg-white rounded-2xl border border-[#ECECEC] relative h-full">
        <NormalChatHeader
          onMenuClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        <div className="flex-1 overflow-hidden">
          <NormalChatContent />
        </div>
        <div className="flex-shrink-0">
          <NormalChatInput />
        </div>
      </div>
    </div>
  );
};

export default NormalChatLayout;

