import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { authButtonPropsType } from "@/constants/types";
import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

export default function componentName({
  icon,
  name,
  onPressAction,
  type,
}: authButtonPropsType) {
  if (type === "outlined-auth-buttons") {
    return (
      <Pressable style={styles.outlinedButtonStyles} onPress={onPressAction}>
        {icon && icon}
        {name && (
          <Text
            style={[
              textFontStyles.bodyLargeRegular,
              { color: appColors.onPrimaryContainerColor },
            ]}
          >
            {name}
          </Text>
        )}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  outlinedButtonStyles: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 40,
    alignItems: "center",
    gap: 12,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: appColors.onPrimaryContainerColor,
  },
});
