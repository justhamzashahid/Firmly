import React from 'react';

const LeadershipPathwaySection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Leadership Pathway
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Your pathway to convert your Grow areas to Glow areas
          </p>
        </div>

        {/* Action Items Card */}
        <div className="relative">
          <div 
            className="relative bg-gray-100 rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden min-h-[250px] sm:min-h-[300px]"
            style={{
              backgroundImage: `url('/assets/images/dashtop.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.1
            }}
          >
            {/* Background Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('/assets/images/dashbottom.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between h-full">
              <div className="flex-1 mb-6 sm:mb-0 sm:mr-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Action items
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Amalia will share action items with you for your personalized Leadership Pathway
                </p>
              </div>

              {/* Floating Action Button */}
              <button className="relative z-20 w-14 h-14 sm:w-16 sm:h-16 bg-[#8A7BBF] hover:bg-[#9A8BCF] rounded-full flex items-center justify-center shadow-lg transition-colors flex-shrink-0">
                <img 
                  src="/assets/images/starpurple.png" 
                  alt="action icon" 
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPathwaySection;

