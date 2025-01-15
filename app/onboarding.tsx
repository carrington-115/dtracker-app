import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { OnboardingSlider } from "@/components";
import PagerView from "react-native-pager-view";
import { onboardingSliderCarouselData } from "@/constants/data";

export default function componentName() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("@/assets/images/logo.svg")}
          style={styles.logoImage}
        />
        <PagerView style={styles.pagerViewStyles}>
          {onboardingSliderCarouselData.map((item, index) => (
            <View key={index}>
              <OnboardingSlider image={item.image} title={item.title} />
            </View>
          ))}
        </PagerView>
      </View>
      <View style={styles.bottomContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
  },
  logoImage: {
    width: 190,
    height: 43.13,
  },
  topContainer: {
    marginTop: 58,
    flex: 1,
    paddingHorizontal: 14,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  pagerViewStyles: {
    width: 320,
    flex: 1,
  },
  bottomContainer: {},
});
