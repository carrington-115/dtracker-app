import { PinCodeScreen } from "@/components";
import { useRouter } from "expo-router";
import React, { useState } from "react";

export default function componentName() {
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();

  const handleSubmitForm = () => {
    router.push("./user-category");
  };
  return (
    <PinCodeScreen otp={otp} setOtp={setOtp} buttonAction={handleSubmitForm} />
  );
}
