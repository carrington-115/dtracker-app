import { PinCodeScreen } from "@/components";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function componentName() {
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();
  const phoneNumber = useSelector((state: any) => state.phone);

  const handleSubmitForm = () => {
    router.push("./user-category");
  };

  useEffect(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);

  return (
    <PinCodeScreen otp={otp} setOtp={setOtp} buttonAction={handleSubmitForm} />
  );
}
