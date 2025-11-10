import React, { useState, useRef, useCallback, useEffect } from "react";

const ProgressBar = ({
  label,
  yourScore,
  peersScore = 67,
  color,
  initialVectorPosition,
}) => {
  const colorClasses = {
    green: "bg-[#378C78]",
    blue: "bg-[#4299CA]",
    purple: "bg-[#855CC9]",
    pink: "bg-[#CC66A9]",
    orange: "bg-[#C56A55]",
    lightBlue: "bg-cyan-400",
  };

  const barColor = colorClasses[color] || colorClasses.green;
  const isHigherThanPeers = yourScore > peersScore;
  // Set default vector position from prop or peers score, slightly offset to the right
  const [vectorPosition, setVectorPosition] = useState(() =>
    initialVectorPosition !== undefined
      ? Math.min(initialVectorPosition, 100)
      : Math.min(peersScore + 2, 100)
  );
  const [isDragging, setIsDragging] = useState(false);
  const barRef = useRef(null);

  const updateVectorPosition = useCallback((clientX) => {
    if (!barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setVectorPosition(percentage);
  }, []);

  // Mouse event handlers
  const handleMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(true);
      updateVectorPosition(e.clientX);
    },
    [updateVectorPosition]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        updateVectorPosition(e.clientX);
      }
    },
    [isDragging, updateVectorPosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch event handlers for mobile
  const handleTouchStart = useCallback(
    (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      setIsDragging(true);
      updateVectorPosition(touch.clientX);
    },
    [updateVectorPosition]
  );

  const handleTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      if (isDragging) {
        const touch = e.touches[0];
        updateVectorPosition(touch.clientX);
      }
    },
    [isDragging, updateVectorPosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global mouse and touch event listeners when dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return (
    <div className="mb-4 md:mb-6">
      {/* Label */}
      <div className="flex items-center justify-between mb-2 gap-4">
        <span className="text-sm md:text-base font-semibold text-[#3D3D3D] font-inter">
          {label}
        </span>

        {/* Scores above the bar */}
        <div className="flex items-center  gap-4">
          {isHigherThanPeers ? (
            <>
              <span className="text-xs md:text-sm font-semibold text-[#3D3D3D]/60 font-inter">
                Peers: {peersScore}
              </span>
              <span className="text-xs md:text-sm font-semibold text-[#6664D3] font-inter">
                You: {yourScore}
              </span>
            </>
          ) : (
            <>
              <span className="text-xs md:text-sm font-semibold text-[#6664D3] font-inter">
                You: {yourScore}
              </span>
              <span className="text-xs md:text-sm font-semibold text-[#3D3D3D]/60 font-inter">
                Peers: {peersScore}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div
        ref={barRef}
        className="relative h-3.5 bg-gray-100 rounded-full overflow-visible"
      >
        {/* Your score bar - full width colored bar */}
        <div
          className={`${barColor} h-full rounded-full`}
          style={{
            width: `${yourScore}%`,
            willChange: "auto",
            transform: "translateZ(0)",
          }}
        />

        {/* Vector image - draggable */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 cursor-grab active:cursor-grabbing touch-none select-none"
          style={{
            left: `${Math.min(vectorPosition, 100)}%`,
            willChange: "transform",
            transform: "translate(-50%, -50%) translateZ(0)",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <img
            src="/assets/images/dashboard/vector.png"
            alt="Vector"
            className="w-5 h-5 object-contain pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
