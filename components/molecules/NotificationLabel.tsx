import { textFontStyles } from "@/constants/fonts";
import React from "react";
import { View, Text } from "react-native";

interface NotificationLabelProps {
  content: { title: string; body: string };
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

export default function componentName({
  content,
  icon,
  color,
  bgColor,
}: NotificationLabelProps) {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 18,
        paddingVertical: 12,
        flexDirection: "row",
        backgroundColor: bgColor,
        borderRadius: 10,
        alignItems: "center",
        boxSizing: "border-box",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 4,
          width: "90%",
        }}
      >
        <Text
          style={{
            color: color,
            fontWeight: "bold",
            ...textFontStyles.bodyMediumBold,
          }}
        >
          {content.title}
        </Text>
        <Text
          style={{
            color: color,
            ...textFontStyles.bodyMediumRegular,
          }}
        >
          {content.body}
        </Text>
      </View>
      <>{icon}</>
    </View>
  );
}
