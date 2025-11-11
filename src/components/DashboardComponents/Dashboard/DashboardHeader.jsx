import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Hero from "./Hero";
import NotificationPopup from "../notification/Notification";

const DashboardHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // initial selected tab from current path
  const [selectedTab, setSelectedTab] = useState(() => {
    if (location.pathname === "/amalia-corner") return "Amalia Corner";
    if (location.pathname === "/dashboard") return "Dashboard";
    return null;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLTDropdownOpen, setIsLTDropdownOpen] = useState(false);

  const menuRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const ltDropdownRef = useRef(null);

  // keep selected tab synced when route changes and close mobile menu
  useEffect(() => {
    if (location.pathname === "/amalia-corner") {
      setSelectedTab("Amalia Corner");
    } else if (location.pathname === "/dashboard") {
      setSelectedTab("Dashboard");
    } else {
      setSelectedTab(null);
    }

    // close menus on route change
    setIsMobileMenuOpen(false);
    setIsLTDropdownOpen(false);
  }, [location.pathname]);

  // click outside handler to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      // mobile menu: check both menu and toggle so clicking toggle doesn't immediately close
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        mobileToggleRef.current &&
        !mobileToggleRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }

      // LT dropdown
      if (
        isLTDropdownOpen &&
        ltDropdownRef.current &&
        !ltDropdownRef.current.contains(event.target)
      ) {
        setIsLTDropdownOpen(false);
      }
    };

    if (isMobileMenuOpen || isLTDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen, isLTDropdownOpen]);

  const goTo = (path, tabName = null) => {
    if (tabName) setSelectedTab(tabName);
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#6664D3] 2xl:px-16 xl:px-12 lg:px-8 md:px-6 sm:px-4 px-4 py-2 rounded-b-3xl relative overflow-visible">
      {/* top-left decorative image */}
      <img
        src="/assets/images/dashboard/dashtop.webp"
        alt="dashboard top background"
        className="absolute top-0 left-0 w-[613px] z-0 h-[515px] object-cover object-top pointer-events-none"
      />

      <div className="relative z-20 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center">
          <img
            src="/assets/images/dashboard/logowhite.webp"
            alt="firmly logo"
            className="h-10 w-auto"
          />
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => goTo("/dashboard", "Dashboard")}
            className={`px-6 py-2 rounded-xl transition-colors ${
              selectedTab === "Dashboard"
                ? "bg-[#7d7cd9] border border-white/20 text-white"
                : "text-white/70 hover:text-white"
            }`}
            type="button"
            aria-current={selectedTab === "Dashboard" ? "page" : undefined}
          >
            Dashboard
          </button>

          <button
            onClick={() => goTo("/amalia-corner", "Amalia Corner")}
            className={`px-6 py-2 rounded-xl transition-colors ${
              selectedTab === "Amalia Corner"
                ? "bg-[#7d7cd9] border border-white/20 text-white"
                : "text-white/70 hover:text-white"
            }`}
            type="button"
            aria-current={selectedTab === "Amalia Corner" ? "page" : undefined}
          >
            Amalia Corner
          </button>
        </nav>

        {/* right side controls */}
        <div className="flex items-center sm:space-x-4 relative z-[200]">
          {/* user status (hidden on very small screens) */}
          <div className="hidden sm:flex items-center space-x-2 text-white">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/images/dashboard/starwhite.webp"
                alt="user icon"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span className="text-white/70 text-sm sm:text-base">Amalia</span>
              <span className="text-sm flex items-center justify-center bg-[#7d7cd9] border border-white/20 text-white/70 px-2 py-0.5 rounded-full">
                • online
              </span>
            </div>
          </div>

          {/* notification button */}
          <button
            onClick={() => setIsNotificationOpen((s) => !s)}
            className="relative text-white hover:bg-[#7d7cd9] p-2 rounded-lg transition-colors"
            aria-expanded={isNotificationOpen}
            aria-label="Toggle notifications"
            type="button"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-1 right-2 h-2.5 w-2.5 bg-[#D46FA8] rounded-full" />
          </button>

          {/* LT dropdown */}
          <div className="relative z-[200]" ref={ltDropdownRef}>
            <button
              onClick={() => setIsLTDropdownOpen((s) => !s)}
              className="flex items-center space-x-2 text-white px-3 py-2 rounded-lg transition-colors"
              aria-expanded={isLTDropdownOpen}
              aria-haspopup="true"
              type="button"
            >
              <span className="text-sm lg:text-lg font-semibold bg-[#7d7cd9] border border-white/20 text-white/70 px-4 py-3 rounded-2xl">
                LT
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isLTDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLTDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-[300] overflow-hidden">
                <button
                  onClick={() => {
                    setIsLTDropdownOpen(false);
                    navigate("/dashboard/account-settings");
                  }}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  type="button"
                >
                  Account settings
                </button>
              </div>
            )}
          </div>

          {/* mobile menu toggle (visible on small screens) */}
          <div className="md:hidden relative" ref={menuRef}>
            <button
              ref={mobileToggleRef}
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              style={{
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
              }}
              className="text-white p-2 rounded-lg hover:bg-[#7d7cd9] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* mobile dropdown */}
            {isMobileMenuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-2 w-52 bg-white border border-white/20 rounded-lg shadow-lg z-50 overflow-hidden"
                style={{ top: "calc(100% + 8px)" }}
              >
                <button
                  onClick={() => goTo("/dashboard", "Dashboard")}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    selectedTab === "Dashboard" ? "text-[#6664D3]" : "text-gray-700"
                  }`}
                  type="button"
                >
                  Dashboard
                </button>

                <button
                  onClick={() => goTo("/amalia-corner", "Amalia Corner")}
                  className={`w-full text-left px-4 py-3 text-sm font-medium border-t transition-colors ${
                    selectedTab === "Amalia Corner" ? "text-[#6664D3]" : "text-gray-700"
                  }`}
                  type="button"
                >
                  Amalia Corner
                </button>

                <div className="border-t px-2 py-2">
                  <button
                    onClick={() => {
                      navigate("/dashboard/account-settings");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                    type="button"
                  >
                    Account settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero section (keeps positioned within header) */}
      <div className="relative z-20 mt-4">
        <Hero />
      </div>

      {/* bottom-right decorative image */}
      <img
        src="/assets/images/dashboard/dashbottom.webp"
        alt="dashboard bottom background"
        className="absolute bottom-0 right-0 w-[613px] z-0 h-[515px] object-cover object-bottom pointer-events-none"
      />

      {/* notification popup */}
      <NotificationPopup isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
    </header>
  );
};

export default DashboardHeader;