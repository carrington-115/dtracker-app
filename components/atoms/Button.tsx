import { textFontStyles } from "@/constants/fonts";
import { buttonPropsType } from "@/constants/types";
import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

export default function componentName({
  name,
  color,
  bgColor,
  onPressAction,
  type,
  focusedColor,
  icon,
  outlined,
}: buttonPropsType) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btnStyle,
        {
          backgroundColor: pressed ? focusedColor : bgColor,
          borderWidth: outlined ? 1 : 0,
          borderColor: outlined ? color : "transparent",
        },
      ]}
      onPress={onPressAction}
    >
      {icon && <>{icon}</>}
      <Text style={[textFontStyles.bodyLargeRegular, { color: color }]}>
        {name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
});
