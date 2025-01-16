import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { onboardingSliderCarouselData } from "@/constants/data";
import { useRouter } from "expo-router";
import { authButtonPropsType } from "@/constants/types";
import { OnboardingSlider } from "..";

export default function componentName() {
  return (
    <>
      <PagerView style={styles.pagerViewStyles}>
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
