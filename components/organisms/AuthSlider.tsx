import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import PagerView from "react-native-pager-view";
import { onboardingSliderCarouselData } from "@/constants/data";
import { OnboardingSlider } from "..";

export default function componentName() {
  if (Platform.OS === "web") {
    return (
      <>
        <Text>Hello slider</Text>
      </>
    );
  }
  return (
    <>
      <PagerView style={styles.pagerViewStyles} testID="auth-slider">
        {onboardingSliderCarouselData.map((item, index) => (
          <View key={index}>
            <OnboardingSlider {...item} />
          </View>
        ))}
      </PagerView>
    </>
  );
}

const styles = StyleSheet.create({
  pagerViewStyles: {
    width: 320,
    flex: 1,
  },
});
