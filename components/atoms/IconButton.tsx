import { IconButtonProps } from "@/constants/types";
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function componentName({
  icon,
  bgColor,
  pressedColor,
  btnAction,
}: IconButtonProps) {
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: pressed ? pressedColor : bgColor,
          },
        ]}
        onPress={btnAction}
      >
        <View>{icon}</View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 100,
  },
});
