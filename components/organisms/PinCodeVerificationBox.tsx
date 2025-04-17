import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import IconButton from "../atoms/IconButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { OtpInput } from "react-native-otp-entry";
import { pinCodeVerificationBoxProps } from "@/constants/types";

export default function componentName({
  buttonAction,
  cameraAction,
  setOtp,
  otp,
}: pinCodeVerificationBoxProps) {
  const [error, setError] = useState<boolean>(false);

  const handleSubmitForm = () => {
    if (otp.length < 4) setError(true);
    else {
      buttonAction();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={textFontStyles.headlineLargeMedium}>Verification Pin</Text>
        <IconButton
          icon={
            <MaterialIcons
              name="photo-camera"
              size={24}
              color={appColors.onPrimaryContainerColor}
            />
          }
          bgColor="rgba(215, 236, 227, 0.5)"
          pressedColor={appColors.primaryContainerColor}
          btnAction={cameraAction}
        />
      </View>
      <View style={styles.otpContainerStyles}>
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
      <View style={{ width: "100%" }}>
        <Pressable style={styles.submitBtnStyle} onPress={handleSubmitForm}>
          <MaterialIcons
            name="check"
            size={24}
            color={appColors.onPrimaryColor}
          />
          <Text
            style={[
              textFontStyles.titleLargeRegular,
              {
                color: appColors.onPrimaryColor,
              },
            ]}
          >
            Verify
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 30,
    gap: 20,
    borderRadius: 20,
    backgroundColor: appColors.surfaceContainerLow,
  },
  headerStyle: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  submitBtnStyle: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    backgroundColor: appColors.primaryColor,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  otpContainerStyles: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
  },
  otpInputContainer: {
    width: "100%",
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
