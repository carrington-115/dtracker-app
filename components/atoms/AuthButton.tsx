import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { authButtonPropsType } from "@/constants/types";
import React from "react";
import { Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function componentName({
  icon,
  name,
  onPressAction,
  type,
}: authButtonPropsType) {
  const router = useRouter();
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
  if (type === "text-auth-buttons") {
    return (
      <Pressable style={styles.textButtonStyles} onPress={onPressAction}>
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

  if (type === "back-icon-btn") {
    return (
      <>
        <Pressable
          style={({ pressed }) => [
            styles.backButtonStyle,
            pressed && {
              backgroundColor: appColors.primaryContainerColor,
            },
          ]}
          onPress={onPressAction}
        >
          <Ionicons
            name="arrow-back-sharp"
            size={24}
            color={appColors.onPrimaryContainerColor}
          />
        </Pressable>
      </>
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
  textButtonStyles: {
    paddingVertical: 8,
    paddingHorizontal: 40,
    alignItems: "center",
    gap: 12,
  },
  backButtonStyle: {
    padding: 12,
    borderRadius: "100%",
  },
});
