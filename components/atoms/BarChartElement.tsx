import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { BarChartElementProps } from "@/constants/types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function componentName({ height, day }: BarChartElementProps) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: `${height}%`,
          width: 15,
          backgroundColor: appColors.primaryColor,
        }}
      />
      <Text
        style={{
          ...textFontStyles.titleLargeMedium,
          color: appColors.onSurface,
        }}
      >
        {day}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    alignItems: "center",
  },
});
