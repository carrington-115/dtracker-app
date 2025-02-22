import { PinCodeScreen } from "@/components";
import appColors from "@/constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [otp, setOtp] = React.useState<string>("");
  const router = useRouter();
  const handleSubmitOtp = () => {
    router.push("/agent-verification/photo-verification");
  };
  return (
    <>
      <PinCodeScreen
        otp={otp}
        setOtp={setOtp}
        buttonAction={handleSubmitOtp}
        resendCodeAction={() => {}}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
