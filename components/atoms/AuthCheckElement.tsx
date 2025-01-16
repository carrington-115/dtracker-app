import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { authCheckElementProps } from "@/constants/types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import Button from "./Button";

export default function componentName({
  check,
  checkAction,
  label,
}: authCheckElementProps) {
  return (
    <View style={styles.container}>
      <Checkbox.Item
        label={label}
        status={check ? "checked" : "unchecked"}
        onPress={checkAction}
        labelStyle={{ display: "none" }}
        style={{ width: "5%", borderRadius: "100%" }}
        uncheckedColor={appColors.onSurface}
        color={appColors.primaryColor}
        rippleColor={appColors.primaryContainerColor}
      />
      <Text
        style={[
          textFontStyles.bodyLargeRegular,
          { color: appColors.onPrimaryContainerColor, width: "45%" },
        ]}
      >
        {label}
      </Text>
      <Button
        name="Learn more"
        bgColor="#D7ECE380"
        color={appColors.onPrimaryContainerColor}
        focusedColor={appColors.primaryContainerColor}
        onPressAction={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 12,
    gap: 5,
    borderRadius: 10,
    backgroundColor: "rgba(215, 236, 227, 0.30)",
  },
});
