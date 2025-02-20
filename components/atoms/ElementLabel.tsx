import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React from "react";
import { View, Text } from "react-native";

export default function componentName({ name }: { name: string }) {
  return (
    <View
      style={{
        backgroundColor: appColors.primaryContainerColor,
        paddingHorizontal: 12,
        paddingVertical: 2.5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          ...textFontStyles.bodySmallRegular,
          color: appColors.onPrimaryContainerColor,
        }}
      >
        {name}
      </Text>
    </View>
  );
}
