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
  errorMessage?: string;
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
  outlined?: boolean;
}

interface bottomButtonPropsType {
  name: string;
  onPressAction: () => void;
}

interface radioComponentPropsType {
  value: string;
  checked: string;
  checkedAction: () => void;
  label: string;
}

interface IconButtonProps {
  icon: React.ReactNode;
  btnAction: () => void;
  bgColor: string;
  pressedColor?: string;
  appStyles?: any;
}

interface pickupButtonProps {
  icon: React.ReactNode;
  name: string;
  onPress: () => void;
}

interface dropDownElementProps {
  dropDownItems: { label: string; value: string }[];
  dropDownValue: string;
  onValueChange: (itemValue: string) => void;
}

interface bottomSheetPropsType {
  visible: boolean;
  setVisible: (value: boolean) => void;
  children: React.ReactNode;
  initialHeight: number;
  minHieght: number;
  maxHeight: number;
  collapseHeight: number;
}

interface locationPropsType {
  latitude: number;
  longitude: number;
  accuracy: number | null;
}

interface editElementTypes {
  title: string;
  value: string;
  action: () => void;
}

interface storeImageComponentProps {
  action: () => void;
  type: "image" | "default" | "image-view";
  images?: string[];
}

interface storeItemProps {
  pressAction?: () => void;
  image: any;
  name: string;
  labels: { type: string; size: string };
  price: number;
  addButtonAction: () => void;
  id?: string;
  link?: any;
}

interface tabsButtonProps {
  link: any;
  icon: React.ReactNode;
  name: string;
}

interface verificationElementProps {
  link: any;
  title: string;
  body: string;
  completed: boolean;
  step: number;
}

interface goalCardProps {
  month: string;
  year: string;
  monthlyEarning?: number;
  currentGoalTotal?: number;
  goalAmountCompleted?: number;
  goalDeadline?: string;
  type: "active" | "inactive" | "goal";
  inactiveCardAction: () => void;
}

interface goalPageComponentProps {
  goalAmount: number;
  goalCompletedPercentage: number;
  goalCompletedAmount: number;
  goalDeadline: string;
}

interface goalElementProps {
  goalStart?: string;
  goalEnd?: string;
  goalAmount: number;
  trashType?: "Plastics" | "Metals" | "Paper" | "Glass" | "Mixed" | "Organic";
  trashSize?: number;
  trashUnit?: "Kg" | "Bags" | "Buckets";
  pickup: boolean;
  onPressAction: () => void;
}

export type {
  onboardingSliderType,
  authButtonPropsType,
  textInputElementProps,
  authCheckElementProps,
  buttonPropsType,
  bottomButtonPropsType,
  radioComponentPropsType,
  IconButtonProps,
  pickupButtonProps,
  dropDownElementProps,
  bottomSheetPropsType,
  locationPropsType,
  editElementTypes,
  storeImageComponentProps,
  storeItemProps,
  tabsButtonProps,
  verificationElementProps,
  goalCardProps,
  goalPageComponentProps,
  goalElementProps,
};
