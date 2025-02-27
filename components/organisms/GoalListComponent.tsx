import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function componentName() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", paddingHorizontal: 20 }}>
        <Text
          style={{
            ...textFontStyles.titleLargeMedium,
            color: appColors.onSurface,
          }}
        >
          Past goals
        </Text>
      </View>
      <View style={styles.listStyles}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    gap: 20,
  },
  listStyles: {
    width: "100%",
    flexDirection: "column",
  },
});
