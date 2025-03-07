import appColors from "@/constants/colors";
import { mapViewInputProps } from "@/constants/types";
import React from "react";
import { View, StyleSheet } from "react-native";
import { OtpInput } from "react-native-otp-entry";

const MapViewPinInput = ({ error, setOtp }: mapViewInputProps) => {
  return (
    <View style={styles.pinCodeStyles}>
      <OtpInput
        numberOfDigits={4}
        focusColor={error ? appColors.errorColor : appColors.primaryColor}
        onTextChange={(code) => setOtp(code)}
        theme={{
          containerStyle: styles.otpInputContainer,
          pinCodeContainerStyle: {
            borderWidth: 0,
            borderRadius: 0,
            borderBottomWidth: 5,
            paddingTop: 5,
            borderColor: appColors.onSurfaceVariant,
            paddingHorizontal: 10,
          },
          focusedPinCodeContainerStyle: {
            backgroundColor: appColors.surfaceContainerLow,
          },
        }}
      />
    </View>
  );
};

export default MapViewPinInput;

const styles = StyleSheet.create({
  pinCodeStyles: {},
  otpInputContainer: {
    width: "100%",
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
