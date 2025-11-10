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
    selector: "[data-tour='radar-chart']",
    position: "right-center",
  },
  {
    id: "composite-score",
    title: "Composite Score",
    content: [
      "This is your composite score, averaging all six metrics to give you a snapshot of your current leadership development baseline. This number represents where you are today - your starting point for growth. Whether it's higher or lower than you expected, it's valuable data that helps me tailor your coaching journey to maximize your leadership potential.",
    ],
    selector: "[data-tour='overall-score']",
    position: "left-center",
  },
  {
    id: "grow-glow",
    title: "Grow & Glow Areas",
    content: [
      'Your "glow" areas are the strengths where you\'re already excelling - these are leadership capabilities to celebrate and leverage.',
      'Your "grow" areas represent your greatest opportunities for development - the metrics where focused attention can create the most significant impact on your leadership effectiveness.',
    ],
    selector: "[data-tour='grow-glow']",
    position: "right-center",
  },
  {
    id: "leadership-pathway",
    title: "Leadership Pathway",
    content: [
      "Based on your diagnostic results, I'll analyze your unique profile and create a personalized development plan tailored specifically to your needs. This plan breaks down your leadership growth into manageable, bite-sized action items that you can tackle at your own pace, ensuring your development journey is both effective and sustainable.",
    ],
    selector: "[data-tour='leadership-pathway']",
    position: "bottom-right",
  },
  {
    id: "amalia-corner",
    title: "Amalia Corner",
    content: [
      "You'll always find me here! Whenever you need guidance, have questions about your development plan, or want to discuss your leadership journey, just click here to connect with me.",
    ],
    selector: "[data-tour='amalia-corner']",
    position: "top-right",
  },
];

const GuidedTour = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedElement, setHighlightedElement] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [highlightRect, setHighlightRect] = useState(null);
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const retryCountRef = useRef(0);

  useEffect(() => {
    retryCountRef.current = 0;

    const updatePosition = () => {
      const element = document.querySelector(steps[currentStep].selector);
      if (element) {
        // Force a reflow to ensure element is in DOM
        void element.offsetHeight;
        setHighlightedElement(element);
        const rect = element.getBoundingClientRect();
        setHighlightRect(rect);
        scrollToElement(element);
        // Use requestAnimationFrame to ensure DOM is updated before positioning
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              updateModalPosition(element, steps[currentStep].position);
              // Update rect after scroll
              const newRect = element.getBoundingClientRect();
              setHighlightRect(newRect);
            }, 500);
          });
        });
        retryCountRef.current = 0;
      } else {
        // Retry if element not found (max 15 retries)
        if (retryCountRef.current < 15) {
          retryCountRef.current += 1;
          setTimeout(updatePosition, 150);
        } else {
          console.warn(`Element not found: ${steps[currentStep].selector}`);
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(updatePosition, 200);

    const handleResize = () => {
      if (highlightedElement) {
        const rect = highlightedElement.getBoundingClientRect();
        setHighlightRect(rect);
        updateModalPosition(highlightedElement, steps[currentStep].position);
      }
      updatePosition();
    };

    const handleScroll = () => {
      if (highlightedElement) {
        const rect = highlightedElement.getBoundingClientRect();
        setHighlightRect(rect);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [currentStep, highlightedElement]);

  const scrollToElement = (element) => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const updateModalPosition = (element, position) => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const modalWidth = 400;
    const modalHeight = 350;
    const highlightPadding = 20; // Match the padding used in highlight
    const gapBetweenHighlightAndModal = 40; // Space between highlight and modal

    let top = 0;
    let left = 0;

    switch (position) {
      case "right-center":
        // Position modal to the right of element, vertically centered
        left =
          rect.right + scrollX + highlightPadding + gapBetweenHighlightAndModal;
        top = rect.top + scrollY + rect.height / 1 - modalHeight / 3;
        break;
      case "left-center":
        // Position modal at bottom-left of viewport, overlapping the section
        top = window.innerHeight + scrollY - modalHeight - 40;
        left = 240;
        break;
      case "bottom-left":
        top = rect.bottom + scrollY + 20;
        left = rect.left + scrollX;
        break;
      case "bottom-right":
        top = rect.bottom + scrollY + 20;
        left = rect.right + scrollX - modalWidth;
        break;
      case "top-right":
        top = rect.top + scrollY - modalHeight - 20;
        left = rect.right + scrollX - modalWidth;
        break;
      default:
        top = rect.bottom + scrollY + 20;
        left = rect.left + scrollX;
    }

    // Ensure modal stays within viewport
    if (left + modalWidth > window.innerWidth) {
      left = window.innerWidth - modalWidth - 20;
    }
    if (left < 20) {
      left = 20;
    }
    if (top + modalHeight > window.innerHeight + scrollY) {
      top = window.innerHeight + scrollY - modalHeight - 20;
    }
    if (top < scrollY + 20) {
      top = scrollY + 20;
    }

    setModalPosition({ top, left });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    localStorage.setItem("dashboard-tour-completed", "true");
    onComplete();
  };

  const currentStepData = steps[currentStep];

  if (!highlightedElement || !highlightRect) {
    return (
      <div className="fixed inset-0 bg-black/50 z-[9998] flex items-center justify-center">
        <div className="bg-white rounded-2xl p-6">
          <p className="text-gray-700">Loading tour...</p>
        </div>
      </div>
    );
  }

  const rect = highlightRect;
  const padding = 20; // Padding around the highlighted element

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300"
        onClick={(e) => {
          // Don't close on overlay click - require button click
          e.stopPropagation();
        }}
      >
        {/* Highlighted area */}
        <div
          className="absolute  transition-all duration-300 pointer-events-none"
          style={{
            top: rect.top + window.scrollY - padding,
            left: rect.left + window.scrollX - padding,
            width: rect.width + padding * 2,
            height: rect.height + padding * 2,
            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.6)",
            borderRadius: "1rem",
          }}
        />
      </div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed z-[9999] bg-white rounded-3xl shadow-2xl p-6 w-[90%] max-w-xl transition-all duration-300"
        style={{
          top: `${modalPosition.top}px`,
          left: `${modalPosition.left}px`,
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 font-cormorant">
          {currentStepData.title}
        </h2>
        <div className="space-y-3 mb-6">
          {currentStepData.content.map((paragraph, index) =>
            currentStepData.id === "visual-summary" ? (
              <div key={index} className="flex items-start">
                <span className="text-black/50 mr-2 ">•</span>
                <p className="text-sm sm:text-base text-black/50 leading-relaxed font-inter flex-1">
                  {paragraph}
                </p>
              </div>
            ) : (
              <p
                key={index}
                className="text-sm sm:text-base text-black/50 leading-relaxed font-inter"
              >
                {paragraph}
              </p>
            )
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#4299CA] font-inter">
            {currentStep + 1}/{steps.length}
          </span>
          <button
            onClick={handleNext}
            className="bg-[#3D3D3D]  text-[#F5F5F5] px-6 py-2 rounded-xl  transition-colors font-inter"
          >
            {currentStep === steps.length - 1 ? "Let's go" : "Next >"}
          </button>
        </div>
      </div>
    </>
  );
};

export default GuidedTour;
