import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
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
      <Pressable onPress={onPress}>
        <View>{icon}</View>
        <Text
          style={{
            ...textFontStyles.bodyLargeMedium,
            color: appColors.onPrimaryContainerColor,
          }}
        >
          {name}
        </Text>
      </Pressable>
    </>
  );
}
