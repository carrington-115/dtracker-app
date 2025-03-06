import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { ChatMessageElementProps } from "@/constants/types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function componentName({
  message,
  username,
  isCurrentUser,
  time,
}: ChatMessageElementProps) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: isCurrentUser ? "flex-end" : "flex-start",
      }}
    >
      <View style={[styles.container]}>
        <View
          style={[
            styles.messageContainerStyle,
            {
              borderTopLeftRadius: isCurrentUser ? 10 : 30,
              borderTopRightRadius: isCurrentUser ? 30 : 10,
              borderBottomLeftRadius: isCurrentUser ? 20 : 10,
              borderBottomRightRadius: isCurrentUser ? 10 : 20,
              backgroundColor: isCurrentUser
                ? appColors.secondaryContainerColor
                : appColors.surfaceContainerLow,
            },
          ]}
        >
          <Text style={styles.messageStyle}>{message}</Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...textFontStyles.bodySmallMedium,
              color: appColors.onSurface,
            }}
          >
            {time}
          </Text>
          <Text
            style={{
              ...textFontStyles.bodySmallMedium,
              color: appColors.onSurface,
            }}
          >
            {isCurrentUser ? "You" : username}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { minWidth: "auto", maxWidth: "70%" },
  messageContainerStyle: {
    padding: 15,
    width: "100%",
  },
  messageStyle: {
    ...textFontStyles.bodyLargeRegular,
    color: appColors.onSurface,
    textAlign: "auto",
  },
});
