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

interface textInputElementProps {
  value: any;
  onChangeValue: any;
  placeholder: string;
  keyboardType: "numeric" | "default" | "email-address" | "phone-pad";
  multiline?: true;
  numberOfLines?: number;
  type: string;
  password?: true;
  error?: boolean;
  required: boolean;
}

interface authCheckElementProps {
  check: boolean;
  checkAction: () => void;
  label: string;
  error?: boolean;
}

interface buttonPropsType {
  name: string;
  color: string;
  bgColor: string;
  icon?: React.ReactNode;
  onPressAction: () => void;
  type?: string;
  focusedColor: string;
}

interface bottomButtonPropsType {
  name: string;
  onPressAction: () => void;
}

export type {
  onboardingSliderType,
  authButtonPropsType,
  textInputElementProps,
  authCheckElementProps,
  buttonPropsType,
  bottomButtonPropsType,
};
