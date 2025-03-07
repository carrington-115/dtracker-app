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
  month?: string;
  year?: string;
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

interface locationProps {
  lat: number;
  lng: number;
}

interface pickupDataProps {
  id: string;
  location: locationProps;
  userLocation: locationProps;
  status: "available" | "completed" | "in-progress" | "start journey";
  size: number;
  units: string;
  price: number;
  distance?: string;
  date?: string;
  time?: string;
  userData: { image: any; name: string };
  pickupType: "immediate" | "scheduled";
}

interface BarChartElementProps {
  height: number;
  day: "S" | "M" | "T" | "W" | "T" | "F" | "SA";
}

interface ChatInputElementProps {
  text: string;
  setText: (text: string) => void;
  submitAction: () => void;
}

interface ChatMessageElementProps {
  message: string;
  username?: string;
  isCurrentUser: boolean;
  time: string;
}

interface pickupFlowElementProps {
  pickupStart: boolean;
  arrivedAtPickup: boolean;
  pickupVerify: boolean;
}

interface stateObserverProps {
  active: boolean;
  icon: React.ReactNode;
}

interface pickupFlowDetailsProps {
  userType: "user" | "agent";
  image: any;
  price: number;
  units: "bags" | "buckets";
  trashSize: number;
  username: string;
  buttonAction: () => void;
}

interface navigationElementProps {
  mapDetails: {
    message: string;
    startTime: string;
    ETA: string;
    totalETA: string;
  };
  flowStates: pickupFlowElementProps;
  details: pickupFlowDetailsProps;
}

interface mapVerificationElementProps {
  visible: boolean;
  userType: "user" | "agent";
  pinCode?: string;
  qrCode?: any;
  inputError: boolean;
  setPinCode: (pinCode: string) => void;
  scanCodeAction: () => void;
}

interface agentVerificationElementProps {
  inputError: boolean;
  setPinCode: (otp: string) => void;
  scanCodeAction: () => void;
  submitCode: () => void;
}

interface userVerificationElementProps {
  code: string;
  qrCode: any;
  user: "agent" | "user";
  agent: agentVerificationElementProps;
}

interface mapViewInputProps {
  error: boolean;
  setOtp: (otp: string) => void;
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
  navigationElementProps,
  goalCardProps,
  goalPageComponentProps,
  goalElementProps,
  locationProps,
  pickupDataProps,
  BarChartElementProps,
  ChatInputElementProps,
  ChatMessageElementProps,
  pickupFlowElementProps,
  stateObserverProps,
  pickupFlowDetailsProps,
  verificationElementProps,
  mapVerificationElementProps,
  agentVerificationElementProps,
  userVerificationElementProps,
  mapViewInputProps,
};
