import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const NoElementOnPage = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...textFontStyles.headlineMediumBold,
          textAlign: "center",
          color: appColors.onSurfaceVariant,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          ...textFontStyles.bodyLargeRegular,
          textAlign: "center",
          color: appColors.onSurfaceVariant,
        }}
      >
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
});
