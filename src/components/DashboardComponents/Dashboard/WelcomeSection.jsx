import React, { useState } from 'react';

const WelcomeSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    {
      name: 'Goal Orientation',
      description: 'The tendency to set goals and make plans. People with high levels of goal orientation tend to think about their goals in advance and consider how they can achieve those goals.'
    },
    {
      name: 'Self-Belief',
      description: 'Confidence in one\'s own abilities and judgment. People with high self-belief trust their capabilities and make decisions with conviction.'
    },
    {
      name: 'Resilience',
      description: 'The capacity to recover quickly from difficulties. Resilient individuals adapt well to adversity and maintain their performance under stress.'
    },
    {
      name: 'Empathy',
      description: 'The ability to understand and share the feelings of others. Empathetic individuals build stronger relationships and create inclusive environments.'
    },
    {
      name: 'Workplace Belonging',
      description: 'The sense of being accepted and valued in the workplace. High belonging leads to increased engagement and retention.'
    },
    {
      name: 'Engagement',
      description: 'The level of involvement and enthusiasm in work. Engaged employees are more productive and contribute positively to organizational goals.'
    }
  ];

  const nextMetric = () => {
    setCurrentMetric((prev) => (prev + 1) % metrics.length);
  };

  const prevMetric = () => {
    setCurrentMetric((prev) => (prev - 1 + metrics.length) % metrics.length);
  };

  return (
    <section 
      className="relative py-8 sm:py-12 lg:py-16 overflow-hidden"
      style={{
        backgroundImage: `url('/assets/images/dashboard/dashtop.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/assets/images/dashboard/dashtop.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Welcome Message - Left */}
          <div className="lg:col-span-4 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white font-sans">
              Welcome, Lily
            </h1>
            <p className="text-base lg:text-lg text-white mb-4 leading-relaxed font-sans">
              This visual summary displays your scores across six research-backed metrics that impact women's workplace effectiveness and leadership potential.
            </p>
            <div className="flex items-center text-white text-sm font-sans">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              Today
            </div>
          </div>

          {/* Radar Chart - Center */}
          <div className="lg:col-span-4 flex items-center justify-center my-6 lg:my-0">
            <div className="w-full max-w-sm">
            </div>
          </div>

          {/* Scorecards - Right */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            {/* Overall Score Card */}
            <div className="bg-[#6B5BA8] rounded-2xl p-6 sm:p-8">
              <p className="text-white/80 text-sm sm:text-base mb-2">Your overall score</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Balanced</h2>
              <div className="flex items-baseline">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">65</span>
                <span className="text-2xl sm:text-3xl text-white/80 ml-2">/100</span>
              </div>
            </div>

            {/* Metric Explanation Card */}
            <div className="bg-[#6B5BA8] rounded-2xl p-6 sm:p-8">
              <p className="text-white/80 text-sm sm:text-base mb-2">Understanding your metrics</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {metrics[currentMetric].name}
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                {metrics[currentMetric].description}
              </p>
              
              {/* Start a Debrief Button */}
              <button className="w-full bg-[#8A7BBF] hover:bg-[#9A8BCF] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors mb-4">
                <img 
                  src="/assets/images/dashboard/starwhite.png" 
                  alt="star icon" 
                  className="h-5 w-5"
                />
                <span>Start a Debrief</span>
              </button>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevMetric}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                  aria-label="Previous metric"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextMetric}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                  aria-label="Next metric"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

