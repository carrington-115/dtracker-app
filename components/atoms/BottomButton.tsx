import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

interface componentNameProps {
  name: string;
  onPressAction: () => void;
}

export default function componentName({
  name,
  onPressAction,
}: componentNameProps) {
  return (
    <>
      <Pressable
        onPress={onPressAction}
        style={({ pressed }) => [
          styles.container,
          { backgroundColor: pressed ? "#4A9979" : appColors.primaryColor },
        ]}
      >
        <Text
          style={[
            textFontStyles.titleMediumRegular,
            { color: appColors.onPrimaryColor },
          ]}
        >
          {name}
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 10,
  },
});
