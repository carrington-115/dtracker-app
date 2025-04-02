import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { actionButtonProps } from "@/constants/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function componentName({
  title,
  context,
  action,
}: actionButtonProps) {
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: pressed
              ? "rgba(221, 236, 236, 0.8)"
              : "rgba(221, 236, 236, 0.3)",
          },
        ]}
        onPress={action}
      >
        <View
          style={{
            padding: 12,
            borderRadius: 50,
            backgroundColor: appColors.primaryContainerColor,
          }}
        >
          <MaterialIcons
            name="add"
            size={24}
            color={appColors.onPrimaryContainerColor}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...textFontStyles.titleLargeBold,
              color: appColors.onPrimaryContainerColor,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              ...textFontStyles.bodyLargeRegular,
              color: appColors.onPrimaryContainerColor,
              textAlign: "center",
            }}
          >
            {context}
          </Text>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 40,
    borderRadius: 40,
    gap: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
