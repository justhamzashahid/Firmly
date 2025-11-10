import React from 'react';

const GrowAndGlowSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Grow & Glow
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Get insights on where you shine and what needs to be improved
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Doing Great Card */}
          <div 
            className="relative bg-gray-100 rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden min-h-[300px] sm:min-h-[350px]"
            style={{
              backgroundImage: `url('/assets/images/DoingGreattop.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Background Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url('/assets/images/DoingGreatbottom.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                Doing Great
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                These are the domains you're thriving in
              </p>
            </div>
          </div>

          {/* Growth Areas Card */}
          <div 
            className="relative bg-gray-100 rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden min-h-[300px] sm:min-h-[350px]"
            style={{
              backgroundImage: `url('/assets/images/GrowthAreastop.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Background Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url('/assets/images/GrowthAreasbottom.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                Growth Areas
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                These areas need your attention for wellbeing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowAndGlowSection;

