import React from "react";
import { ImageSourcePropType } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

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
  bgColor?: string;
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
  submitCodeAction: () => void;
  closeModalAction: () => void;
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
  closeModalAction: () => void;
  agent: agentVerificationElementProps;
}

interface mapViewInputProps {
  error: boolean;
  setOtp: (otp: string) => void;
}

interface actionsElementProps {
  userProfileImage?: ImageSourcePropType;
  actionType: "pickup" | "marketplace";
  itemName?: string;
  size: number;
  units: string;
  distance?: string;
  price?: number;
  userType?: "user" | "agent";
  status: "active" | "pending" | "available";
  date?: string;
  username?: string;
  time?: string;
  pickupType?: "immediate" | "scheduled";
  paymentMethod?: "fixed" | "negotiate" | "free";
  pressAction?: () => void;
}

interface actionButtonProps {
  title: string;
  context: string;
  action: () => void;
}

interface mapActivityElementProps {
  location: {
    latitude: number;
    longitude: number;
  };
  user: { photoUrl: string; name: string };
  delay: string;
}

interface popularStoresElementProps {
  location: {
    latitude: number;
    longitude: number;
  };
  photoUrl: string;
  storeName: string;
  storeOwnerName: string;
  action: () => void;
}

interface exchangeElementProps {
  id?: string | number;
  title: string;
  wasteType: "plastics" | "metals" | "papers" | "glass" | "others";
  size: number;
  owner: boolean;
  price: number;
  storeLocation: {
    latitude: number;
    longitude: number;
  };
  action?: () => void;
}

interface pinCodeVerificationBoxProps {
  buttonAction: () => void;
  cameraAction: () => void;
  setOtp: (otp: string) => void;
  otp: string;
}

interface QrCameraProps {
  onScannedAction: () => void;
  onBackButtonAction: () => void;
  setShowCamera: (show: boolean) => void;
}

interface MessagesComponentProps {
  image: ImageSourcePropType;
  name: string;
  time: string;
  unread: number;
  onPress: () => void;
}

interface CollectionsComponentProps {
  image: ImageSourcePropType;
  name: string;
  time: string;
  wasteType: string;
  size: number;
  payUnits: number;
  onPress: () => void;
}

interface AddExchangeElementProps {
  action: () => void;
  trashType: string;
  setTrashType: (value: string) => void;
  trashSize: number;
  setTrashSize: (value: number) => void;
  price: number;
  setPrice: (value: number) => void;
  location: {
    latitude: number;
    longtitude: number;
  } | null;
  locationSwitchState: boolean;
  deviceLocationState: boolean;
  isBusinessLocationAvailable: boolean;
  handleGetDeviceLocation: () => void;
}

interface ActionSpecialDataProps {
  userProfileImage: any;
  actionType: "pickup" | "marketplace";
  size: number;
  units: string;
  price: number;
  userType: "user" | "agent";
  status: "pending" | "active" | "available";
  pickupType: "scheduled" | "immediate";
  date: string;
  time: string;
  pickupId: string | number;
  distance?: string;
  username?: string;
  location?: {
    agentLocation: {
      latitude: number;
      longitude: number;
    };
    pickupLocation: {
      latitude: number;
      longitude: number;
    };
  };
}

interface AgentMapViewProps {
  agentLocation: {
    latitude: number;
    longitude: number;
  };
  pickupLocation: {
    latitude: number;
    longitude: number;
  };
  mapRef: React.RefObject<MapView>;
  mapDirectionElement?: any;
}

interface CustomMarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  image: ImageSourcePropType;
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
  actionsElementProps,
  actionButtonProps,
  mapActivityElementProps,
  popularStoresElementProps,
  exchangeElementProps,
  pinCodeVerificationBoxProps,
  QrCameraProps,
  MessagesComponentProps,
  CollectionsComponentProps,
  AddExchangeElementProps,
  ActionSpecialDataProps,
  AgentMapViewProps,
  CustomMarkerProps,
};
