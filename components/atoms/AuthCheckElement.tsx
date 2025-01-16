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
  error,
}: authCheckElementProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: error ? "#FFF1EF66" : "rgba(215, 236, 227, 0.30)",
        },
      ]}
    >
      <Checkbox.Item
        label={label}
        status={check ? "checked" : "unchecked"}
        onPress={checkAction}
        labelStyle={{ display: "none" }}
        style={{ width: "5%", borderRadius: "100%" }}
        uncheckedColor={error ? appColors.errorColor : appColors.onSurface}
        color={appColors.primaryColor}
        rippleColor={appColors.primaryContainerColor}
      />
      <Text
        style={[
          textFontStyles.bodyLargeRegular,
          {
            color: error
              ? appColors.onErrorContainerColor
              : appColors.onPrimaryContainerColor,
            width: "45%",
          },
        ]}
      >
        {label}
      </Text>
      <Button
        name="Learn more"
        bgColor={error ? appColors.errorContainerColor : "#D7ECE380"}
        color={
          error
            ? appColors.onErrorContainerColor
            : appColors.onPrimaryContainerColor
        }
        focusedColor={error ? "" : appColors.primaryContainerColor}
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
  },
});
