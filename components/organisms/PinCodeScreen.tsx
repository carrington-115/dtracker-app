import React, { useEffect, useState } from "react";
import { Text, StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { textFontStyles } from "@/constants/fonts";
import appColors from "@/constants/colors";
import { OtpInput } from "react-native-otp-entry";
import { ActiveButton, BottomButton } from "@/components";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function componentName({
  buttonAction,
  otp,
  setOtp,
  resendCodeAction,
}: {
  buttonAction: () => void;
  otp: string;
  setOtp: (otp: string) => void;
  resendCodeAction: () => void;
}) {
  const [error, setError] = useState<boolean>(false);

  const handleSubmitForm = () => {
    if (otp.length < 6 || otp === "") setError(true);
    else {
      buttonAction();
    }
  };

  useEffect(() => {
    if (otp.length === 6) setError(false);
  }, [otp]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.innerContainer}>
        <Text
          style={[
            textFontStyles.titleLargeBold,
            { color: appColors.onSurface },
          ]}
        >
          Verify Phone Number
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 20,
          }}
        >
          <OtpInput
            numberOfDigits={6}
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
          <>
            {error && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2.5,
                  marginTop: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="information-outline"
                  size={16}
                  color={appColors.errorColor}
                />
                <Text
                  style={[
                    textFontStyles.bodySmallMedium,
                    { color: appColors.errorColor },
                  ]}
                >
                  This field is required
                </Text>
              </View>
            )}
          </>
        </View>
        <ActiveButton
          name="Resend code"
          bgColor="transparent"
          focusedColor={appColors.primaryContainerColor}
          color={appColors.onPrimaryContainerColor}
          onPressAction={resendCodeAction}
        />
        <View style={{ width: "100%", marginTop: 270 }}>
          <BottomButton name="Verify" onPressAction={handleSubmitForm} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 190,
    backgroundColor: appColors.surfaceBright,
  },
  innerContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 30,
    alignItems: "center",
  },
  otpInputContainer: {
    width: "100%",
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  otpInputFieldStyle: {},
});
