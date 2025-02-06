import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { editElementTypes } from "@/constants/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function componentName({
  title,
  value,
  action,
}: editElementTypes) {
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          {
            ...styles.container,
            backgroundColor: pressed
              ? appColors.surfaceContainerLow
              : "transparent",
          },
        ]}
        onPress={action}
      >
        <View
          style={{
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Text style={{ ...textFontStyles.titleMediumRegular }}>{title}</Text>
          <Text style={{ ...textFontStyles.titleLargeMedium }}>{value}</Text>
        </View>
        <View>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={appColors.onSurface}
          />
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: appColors.surfaceContainerHighest,
  },
});
