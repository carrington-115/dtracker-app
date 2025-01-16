import { RadioButton } from "react-native-paper";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { radioComponentPropsType } from "@/constants/types";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";

export default function componentName({
  value,
  checked,
  checkedAction,
  label,
}: radioComponentPropsType) {
  return (
    <View style={styles.container}>
      <RadioButton
        value={value}
        onPress={checkedAction}
        status={checked === value ? "checked" : "unchecked"}
        uncheckedColor={appColors.onSurfaceVariant}
        color={appColors.primaryColor}
      />
      <Text
        style={{
          ...textFontStyles.bodyLargeRegular,
          color: appColors.onSurface,
          width: "90%",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
