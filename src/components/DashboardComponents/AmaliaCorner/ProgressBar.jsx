import React from "react";

const ProgressBar = ({ label, yourScore, peersScore = 67, color }) => {
  const colorClasses = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    orange: "bg-orange-500",
    lightBlue: "bg-cyan-400",
  };

  const barColor = colorClasses[color] || colorClasses.green;

  return (
    <div className="mb-4 md:mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm md:text-base font-medium text-gray-900">
          {label}
        </span>
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-xs md:text-sm text-gray-600">Peers: {peersScore}</span>
          <span className="text-xs md:text-sm font-semibold text-gray-900">
            You: {yourScore}
          </span>
        </div>
      </div>
      <div className="relative h-6 md:h-8 bg-gray-100 rounded-full overflow-hidden">
        {/* Your score bar */}
        <div
          className={`${barColor} h-full rounded-full transition-all duration-500`}
          style={{ width: `${yourScore}%` }}
        />
        {/* Peers marker */}
        <div
          className="absolute top-0 bottom-0 w-8 md:w-10 flex items-center justify-center bg-gray-800 text-white text-xs font-semibold rounded-full transform -translate-x-1/2"
          style={{ left: `${peersScore}%` }}
        >
          {peersScore}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

