import React from "react";
import { View, Modal, StyleSheet, Dimensions } from "react-native";
import { mapVerificationElementProps } from "@/constants/types";
import MapVerifyElement from "../molecules/MapVerifyElement";

const { width, height } = Dimensions.get("window");

export default function componentName({
  visible,
  userType,
  pinCode,
  qrCode,
  inputError,
  setPinCode,
  scanCodeAction,
}: mapVerificationElementProps) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      style={styles.modalStyles}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <MapVerifyElement
          code={pinCode!}
          qrCode={qrCode}
          user={userType}
          agent={{
            inputError: inputError,
            setPinCode: setPinCode,
            scanCodeAction: scanCodeAction,
            submitCode: () => console.log("Submit code"),
          }}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalStyles: {
    width: width,
    height: height,
  },
  pinCodeStyles: {},
  otpInputContainer: {
    width: "100%",
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
