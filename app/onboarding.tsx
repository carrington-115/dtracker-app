import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { OnboardingSlider } from "@/components";

export default function componentName() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("@/assets/images/logo.svg")}
          style={styles.logoImage}
        />
        <OnboardingSlider
          title="Easily schedule trash collection with a few tap"
          image={require("../assets/images/welcome-slider01.svg")}
        />
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
  bottomContainer: {},
});
