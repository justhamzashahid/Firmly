import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header2 = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-[#6664D3] 2xl:px-16 xl:px-12 lg:px-8 md:px-6 sm:px-4 px-4 sticky top-0 z-50 relative overflow-visible md:overflow-hidden">
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/assets/images/dashboard/logowhite.webp"
            alt="firmly logo"
            className="h-auto w-20"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => {
              setSelectedTab("Dashboard");
              navigate("/dashboard");
            }}
            className={`px-6 py-2 rounded-xl transition-colors  ${
              selectedTab === "Dashboard"
                ? "bg-[#7d7cd9] border border-white/20 text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => {
              setSelectedTab("Amalia Corner");
              navigate("/amalia-corner");
            }}
            className={`px-6 py-2 rounded-xl transition-colors  ${
              selectedTab === "Amalia Corner"
                ? "bg-[#7d7cd9] border border-white/20 text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            Amalia Corner
          </button>
        </nav>
        <div className="flex items-center  sm:space-x-4 relative z-[200]">
          <div className="hidden sm:flex items-center space-x-2 text-white">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/images/dashboard/starwhite.webp"
                alt="user icon"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span className="text-white/70 text-sm sm:text-base">Amalia</span>
              <span className=" text-sm flex items-center justify-center bg-[#7d7cd9] border border-white/20 text-white/70 px-2 py-0.5 rounded-full">
                • online
              </span>
            </div>
          </div>
          <button className="relative text-white hover:bg-[#7d7cd9] p-2 rounded-lg transition-colors">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-1 right-2 h-2.5 w-2.5 bg-[#D46FA8] rounded-full"></span>
          </button>
          <button className="flex items-center space-x-2 text-white  px-3 py-2 rounded-lg transition-colors">
            <span className="text-sm lg:text-lg font-semibold bg-[#7d7cd9] border border-white/20 text-white/70 px-4 py-3 rounded-2xl ">
              LT
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div className="md:hidden relative z-[200]" ref={menuRef}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              style={{
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
              }}
              className="text-white p-2 rounded-lg hover:bg-[#7d7cd9] transition-colors relative z-[200] cursor-pointer"
              aria-label="Toggle menu"
              type="button"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            {isMobileMenuOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-44 bg-white border border-white/20 rounded-lg shadow-lg z-[200] overflow-hidden"
                style={{ position: "absolute", top: "100%", right: 0 }}
              >
                <button
                  onClick={() => {
                    setSelectedTab("Dashboard");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                    selectedTab === "Dashboard" ? " text-[#6664D3]" : ""
                  }`}
                  type="button"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    setSelectedTab("Amalia Corner");
                    setIsMobileMenuOpen(false);
                    navigate("/amalia-corner");
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors border-t border-[#6664D3] ${
                    selectedTab === "Amalia Corner" ? "text-[#6664D3]" : ""
                  }`}
                  type="button"
                >
                  Amalia Corner
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
