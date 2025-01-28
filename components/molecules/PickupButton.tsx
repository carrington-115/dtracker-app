import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { textFontStyles } from "@/constants/fonts";
import appColors from "@/constants/colors";
import { pickupButtonProps } from "@/constants/types";

export default function componentName({
  icon,
  name,
  onPress,
}: pickupButtonProps) {
  const router = useRouter();

  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: pressed
              ? appColors.primaryContainerColor
              : "rgba(215, 236, 227, 0.50)",
          },
        ]}
      >
        <View>{icon}</View>
        <Text
          style={{
            ...textFontStyles.bodyLargeMedium,
            color: appColors.onPrimaryContainerColor,
            textAlign: "center",
          }}
        >
          {name}
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 0.25,
    borderRadius: 10,
    borderColor: appColors.primaryColor,
    paddingHorizontal: 30,
    paddingVertical: 12,
    width: 150,
  },
});
