import {
  account,
  appCredentials,
  databases,
  id,
} from "@/appwrite/config.appwrite";
import { PinCodeScreen } from "@/components";
import { addUserDocId } from "@/redux/features/authSlice";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function componentName() {
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();
  const phoneNumber = useSelector((state: any) => state.auth.phoneAuth);
  const userId = useSelector((state: any) => state.auth.userId);
  const dispatch = useDispatch();

  console.log(userId);
  const handleSubmitForm = async (userId: string) => {
    /*
      - This is what happens in this function
      - When the form is submitted, the user session is created
      - the user profile is created in the db.
    */
    const user = await account.updatePhoneVerification(userId, otp);
    console.log(user);
  };

  const handleResend = async (phoneNumber: string) => {
    await account.createPhoneToken(id.unique(), phoneNumber);
  };
  return (
    <PinCodeScreen
      otp={otp}
      setOtp={setOtp}
      buttonAction={() => handleSubmitForm(userId)}
      resendCodeAction={() => handleResend(phoneNumber)}
    />
  );
}
