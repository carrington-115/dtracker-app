import { PinCodeScreen } from "@/components";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "@/firebase/config.firebase";
import { signInWithPhoneNumber } from "firebase/auth";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function componentName() {
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();
  const phoneNumber = useSelector((state: any) => state.phone);

  const handleSubmitForm = async () => {
    router.push("./user-category");
  };

  useEffect(() => {
    const signInAction = async () =>
      await signInWithPhoneNumber(auth, phoneNumber);
    signInAction();
  }, [phoneNumber]);

  return (
    <PinCodeScreen
      otp={otp}
      setOtp={setOtp}
      buttonAction={handleSubmitForm}
      resendCodeAction={() => {}}
    />
  );
}
