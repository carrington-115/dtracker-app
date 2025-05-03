import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import appColors from "@/constants/colors";
import { MessagesComponentProps } from "@/constants/types";
import { Image } from "expo-image";
import UnreadMessageElement from "../atoms/UnreadMessageElement";
import { textFontStyles } from "@/constants/fonts";
export default function componentName({
  image,
  name,
  time,
  unread,
  onPress,
}: MessagesComponentProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed
            ? appColors.surfaceContainerLow
            : "transparent",
        },
      ]}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image source={image} style={styles.imageStyles} />
        <Text style={{ ...textFontStyles.bodyLargeRegular }}>{name}</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 5,
        }}
      >
        {unread > 0 && <UnreadMessageElement number={unread} />}
        <Text style={{ ...textFontStyles.bodySmallRegular }}>{time}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },

  imageStyles: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
});
