import React from "react";

// all the app types
interface onboardingSliderType {
  image: string;
  title: string;
}

interface authButtonPropsType {
  icon?: React.ReactNode;
  name?: string;
  onPressAction: () => void;
  type: string;
}

export type { onboardingSliderType, authButtonPropsType };
