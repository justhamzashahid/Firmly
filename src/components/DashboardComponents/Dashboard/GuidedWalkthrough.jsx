import React, { useState, useEffect, useRef } from "react";

const steps = [
    {
      id: "visual-summary",
      title: "Visual Summary",
      content: [
        "This visual summary displays your scores across six research-backed metrics.",
        "These metrics impact women's workplace effectiveness and leadership potential.",
        "Each metric represents a key area for targeted development.",
        "Focused improvement in these areas can accelerate your career growth.",
      ],
      targetSelector: '[data-tour="radar-chart"]',
      position: "bottom-right",
    },
    {
      id: "composite-score",
      title: "Composite Score",
      content: [
        "This is your composite score, averaging all six metrics to give you a snapshot of your current leadership development baseline.",
        "This number represents where you are today - your starting point for growth.",
        "Whether it's higher or lower than you expected, it's valuable data that helps me tailor your coaching journey to maximize your leadership potential.",
      ],
      targetSelector: '[data-tour="overall-score"]',
      position: "bottom-left",
    },
    {
      id: "grow-glow",
      title: "Grow & Glow Areas",
      content: [
        'Your "glow" areas are the strengths where you\'re already excelling - these are leadership capabilities to celebrate and leverage.',
        'Your "grow" areas represent your greatest opportunities for development - the metrics where focused attention can create the most significant impact on your leadership effectiveness.',
      ],
      targetSelector: '[data-tour="grow-glow"]',
      position: "top",
    },
    {
      id: "leadership-pathway",
      title: "Leadership Pathway",
      content: [
        "Based on your diagnostic results, I'll analyze your unique profile and create a personalized development plan tailored specifically to your needs.",
        "This plan breaks down your leadership growth into manageable, bite-sized action items that you can tackle at your own pace, ensuring your development journey is both effective and sustainable.",
      ],
      targetSelector: '[data-tour="leadership-pathway"]',
      position: "top",
    },
    {
      id: "amalia-corner",
      title: "Amalia Corner",
      content: [
        "You'll always find me here! Whenever you need guidance, have questions about your development plan, or want to discuss your leadership journey, just click here to connect with me.",
      ],
      targetSelector: '[data-tour="amalia-corner"]',
      position: "top-left",
    },
];

const GuidedWalkthrough = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [highlightedElement, setHighlightedElement] = useState(null);
  const [highlightRect, setHighlightRect] = useState(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Start walkthrough after 3-5 second delay
    const delay = Math.random() * 2000 + 3000; // 3000-5000ms
    const timer = setTimeout(() => {
      setIsActive(true);
      setCurrentStep(0);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isActive || currentStep === -1) {
      setHighlightedElement(null);
      setHighlightRect(null);
      return;
    }

    const step = steps[currentStep];
    if (!step) return;

    const updateHighlight = () => {
      const element = document.querySelector(step.targetSelector);
      if (element) {
        setHighlightedElement(element);
        const rect = element.getBoundingClientRect();
        setHighlightRect({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
        });
        // Scroll element into view smoothly
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    };

    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    window.addEventListener("scroll", updateHighlight, true);

    return () => {
      window.removeEventListener("resize", updateHighlight);
      window.removeEventListener("scroll", updateHighlight, true);
      setHighlightRect(null);
    };
  }, [currentStep, isActive]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setIsActive(false);
    setCurrentStep(-1);
    setHighlightedElement(null);
    if (onComplete) onComplete();
  };

  if (!isActive || currentStep === -1) return null;

  const currentStepData = steps[currentStep];
  if (!currentStepData) return null;

  const targetElement = highlightedElement;
  let modalStyle = {};
  let overlayStyle = {};
  let cutoutStyle = {};

  if (targetElement && highlightRect) {
    const rect = targetElement.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate cutout area with padding
    const padding = 8;
    const cutoutTop = rect.top - padding;
    const cutoutLeft = rect.left - padding;
    const cutoutRight = rect.right + padding;
    const cutoutBottom = rect.bottom + padding;
    const cutoutWidth = cutoutRight - cutoutLeft;
    const cutoutHeight = cutoutBottom - cutoutTop;

    // Create overlay style - we'll use multiple divs for the cutout effect
    overlayStyle = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9998,
      pointerEvents: "none", // Disable pointer events so clicks don't close modal
    };

    // Store cutout dimensions for rendering overlay divs
    cutoutStyle = {
      top: cutoutTop,
      left: cutoutLeft,
      width: cutoutWidth,
      height: cutoutHeight,
    };

    // Position modal based on step position preference
    const modalWidth = Math.min(550, window.innerWidth - 40);
    const modalHeight = 350;
    let top = 0;
    let left = 0;

    // Special positioning for step 2 (Composite Score)
    if (currentStep === 1 && currentStepData.id === "composite-score") {
      // Position modal next to the highlighted area (to the left of it)
      // Align vertically with the highlighted element
      left = rect.left - modalWidth - 20 + scrollX;
      top = rect.top + scrollY;
      
      // If there's not enough space on the left, position it to the left but adjust
      if (left < scrollX + 20) {
        // Position it on the left side of viewport, but align with highlighted element
        left = scrollX + 20;
        top = rect.top + scrollY;
      }
      
      // Ensure modal doesn't go above or below viewport
      if (top + modalHeight > viewportHeight + scrollY) {
        top = viewportHeight + scrollY - modalHeight - 20;
      }
      if (top < scrollY + 20) {
        top = scrollY + 20;
      }
    } else if (currentStep === 2 && currentStepData.id === "grow-glow") {
      // Position modal at the bottom-right of the screen
      left = viewportWidth - modalWidth - 20 + scrollX;
      top = viewportHeight - modalHeight - 20 + scrollY;
      
      // Ensure modal doesn't go above viewport
      if (top < scrollY + 20) {
        top = scrollY + 20;
      }
    } else {
      switch (currentStepData.position) {
        case "bottom-left":
          top = rect.bottom + 20 + scrollY;
          left = rect.left + scrollX;
          break;
        case "bottom-right":
          // Position next to the highlighted div (to the right side, aligned with bottom)
          // Try positioning to the right first
          if (rect.right + modalWidth + 20 <= viewportWidth + scrollX) {
            // Position to the right, aligned with bottom of highlighted element
            top = rect.bottom - modalHeight + scrollY;
            // Ensure it doesn't go above viewport
            if (top < scrollY + 20) {
              top = scrollY + 20;
            }
            left = rect.right + 20 + scrollX;
          } else {
            // If no space on right, position below the highlighted element, aligned to right
            top = rect.bottom + 20 + scrollY;
            left = Math.max(rect.right - modalWidth + scrollX, rect.left + scrollX);
            // Ensure it doesn't go beyond viewport
            if (left + modalWidth > viewportWidth + scrollX) {
              left = viewportWidth - modalWidth - 20 + scrollX;
            }
          }
          break;
        case "top":
          top = rect.top - modalHeight - 20 + scrollY;
          left = rect.left + (rect.width - modalWidth) / 2 + scrollX;
          break;
        case "top-left":
          top = rect.top - modalHeight - 20 + scrollY;
          left = rect.left + scrollX;
          break;
        default:
          top = rect.bottom + 20 + scrollY;
          left = rect.left + scrollX;
      }
    }

    // Ensure modal stays within viewport
    if (left + modalWidth > viewportWidth + scrollX) {
      left = viewportWidth - modalWidth - 20 + scrollX;
    }
    if (left < scrollX + 20) {
      left = scrollX + 20;
    }
    if (top + modalHeight > viewportHeight + scrollY) {
      top = Math.max(scrollY + 20, rect.top - modalHeight - 20 + scrollY);
    }
    if (top < scrollY + 20) {
      top = scrollY + 20;
    }

    modalStyle = {
      position: "absolute",
      top: `${top}px`,
      left: `${left}px`,
      width: `${modalWidth}px`,
      zIndex: 9999,
    };

    // Ensure highlighted element is above overlay
    if (targetElement) {
      targetElement.style.zIndex = "9997";
      if (getComputedStyle(targetElement).position === "static") {
        targetElement.style.position = "relative";
      }
    }
  }

  return (
    <>
      {/* Overlay with cutout */}
      <div
        ref={overlayRef}
        style={overlayStyle}
        className="fixed inset-0 z-[9998]"
      >
        {/* Top overlay */}
        {cutoutStyle && (
          <>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: `${cutoutStyle.top}px`,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />
            {/* Bottom overlay */}
            <div
              style={{
                position: "absolute",
                top: `${cutoutStyle.top + cutoutStyle.height}px`,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />
            {/* Left overlay */}
            <div
              style={{
                position: "absolute",
                top: `${cutoutStyle.top}px`,
                left: 0,
                width: `${cutoutStyle.left}px`,
                height: `${cutoutStyle.height}px`,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                
              }}
            />
            {/* Right overlay */}
            <div
              style={{
                position: "absolute",
                top: `${cutoutStyle.top}px`,
                left: `${cutoutStyle.left + cutoutStyle.width}px`,
                right: 0,
                height: `${cutoutStyle.height}px`,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />
          </>
        )}
      </div>

      {/* Modal */}
      <div
        style={modalStyle}
        className="bg-white rounded-3xl shadow-2xl p-6 z-[9999]"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-cormorant">
          {currentStepData.title}
        </h2>
        <div className="space-y-3 mb-6">
          {currentStepData.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm sm:text-base text-black/40 leading-relaxed font-inter"
            >
              {currentStep === 0 ? (
                <>
                  <span className="inline-block w-1.5 h-1.5 bg-gray-700 rounded-full mr-2 align-middle"></span>
                  {paragraph}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#4299CA] font-inter">
            {currentStep + 1}/{steps.length}
          </span>
          <button
            onClick={handleNext}
            className="bg-[#3D3D3D] text-white px-4 py-2 rounded-xl font-medium transition-colors font-inter flex items-center space-x-2"
          >
            <span>{currentStep === steps.length - 1 ? "Let's go" : "Next"}</span>
            {currentStep < steps.length - 1 && (
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default GuidedWalkthrough;

