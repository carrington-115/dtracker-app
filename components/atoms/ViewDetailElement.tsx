import appColors from "@/constants/colors";
import React from "react";
import { View, StyleSheet } from "react-native";

interface viewDetailsPropsTypes {
  icon: React.ReactNode;
  details: React.ReactNode;
}

export default function componentName({
  icon,
  details,
}: viewDetailsPropsTypes) {
  return (
    <View style={styles.container}>
      <View>{icon}</View>
      <View>{details}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: appColors.outline,
    alignItems: "center",
  },
});
