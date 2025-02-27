import appColors from "@/constants/colors";
import React from "react";
import { View } from "react-native";

export default function componentName({ innerWidth }: { innerWidth: number }) {
  return (
    <View
      style={{
        height: 10,
        width: "100%",
        backgroundColor: appColors.surfaceContainerLow,
        flexDirection: "row",
        justifyContent: "flex-start",
        borderRadius: 20,
      }}
    >
      <View
        style={{
          height: "100%",
          width: `${innerWidth}%`,
          backgroundColor: appColors.secondaryColor,
          borderRadius: 20,
        }}
      />
    </View>
  );
}
