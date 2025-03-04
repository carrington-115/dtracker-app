import appColors from "@/constants/colors";
import { BarChartElementProps } from "@/constants/types";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function componentName({
  bars,
}: {
  bars: BarChartElementProps[];
}) {
  return (
    <View style={styles.container}>
      <View></View>
      <View
        style={{
          width: "100%",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: "column",
    gap: 40,
    borderRadius: 20,
    backgroundColor: appColors.surfaceContainerLow,
  },
});
