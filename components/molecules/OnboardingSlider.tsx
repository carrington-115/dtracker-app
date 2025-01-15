import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { onboardingSliderType } from "@/constants/types";
import { Image } from "expo-image";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function componentName({ image, title }: onboardingSliderType) {
  return (
    <View style={styles.container} testID="onboarding-slider">
      <Image style={styles.imageStyle} source={image} />
      <Text
        style={[
          textFontStyles.titleLargeRegular,
          {
            textAlign: "center",
            color: appColors.onPrimaryContainerColor,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 25,
    paddingHorizontal: 40,
    gap: 20,
    borderRadius: 70,
    backgroundColor: appColors.primaryContainerColor,
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
});
