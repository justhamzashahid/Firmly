import React, { useState } from "react";
import OnboardingLayout from "../components/OnboardingComponents/OnboardingLayout";
import IntroCard from "../components/OnboardingComponents/IntroCard";
import PathwayCard from "../components/OnboardingComponents/PathwayCard";
import Screen3Card from "../components/OnboardingComponents/Screen3Card";
import Screen4Card from "../components/OnboardingComponents/Screen4Card";

const Onboarding = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      component: <IntroCard onNext={() => setCurrentScreen(1)} />,
    },
    {
      component: (
        <PathwayCard
          onPrevious={() => setCurrentScreen(0)}
          onNext={() => setCurrentScreen(2)}
        />
      ),
    },
    {
      component: (
        <Screen3Card
          onPrevious={() => setCurrentScreen(1)}
          onNext={() => setCurrentScreen(3)}
          onLogin={() => setCurrentScreen(3)}
        />
      ),
    },
    {
      component: <Screen4Card onBack={() => setCurrentScreen(2)} />,
    },
  ];

  return (
    <OnboardingLayout>{screens[currentScreen]?.component}</OnboardingLayout>
  );
};

export default Onboarding;
