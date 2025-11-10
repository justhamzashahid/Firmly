import React from "react";

const SummaryCard = ({
  title,
  subtitle,
  items,
  bgColor,
  iconColor,
  icon,
}) => {
  return (
    <div
      className={`${bgColor} rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 relative overflow-hidden`}
    >
      {/* Icon */}
      <div className={`${iconColor} absolute top-4 left-4 md:top-6 md:left-6 opacity-30`}>
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
          {title}
        </h3>
        <p className="text-sm md:text-base text-white mb-4 md:mb-6 opacity-90">
          {subtitle}
        </p>

        {/* Items List */}
        <div className="space-y-3 md:space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 md:gap-4 bg-white bg-opacity-20 rounded-lg p-2 md:p-3"
            >
              <span className="text-xs md:text-sm font-semibold text-gray-800 bg-gray-200 px-2 md:px-3 py-1 rounded">
                {item.abbreviation}
              </span>
              <span className="text-sm md:text-base text-white flex-1">
                {item.label}
              </span>
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                {item.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

