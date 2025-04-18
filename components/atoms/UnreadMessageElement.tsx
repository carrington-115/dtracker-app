import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React from "react";
import { View, Text } from "react-native";

export default function componentName({ number }: { number: number }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appColors.secondaryColor,
        borderRadius: 20,
        padding: 5,
      }}
    >
      <Text
        style={{
          color: appColors.onSecondaryColor,
          ...textFontStyles.bodySmallBold,
        }}
      >
        {number}
      </Text>
    </View>
  );
}
