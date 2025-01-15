import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { AuthButton, OnboardingSlider } from "@/components";
import PagerView from "react-native-pager-view";
import { onboardingSliderCarouselData } from "@/constants/data";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import appColors from "@/constants/colors";
import { authButtonPropsType } from "@/constants/types";

const registerButtonData: authButtonPropsType[] = [
  {
    name: "Register with Google",
    icon: (
      <AntDesign
        name="google"
        size={24}
        color={appColors.onPrimaryContainerColor}
      />
    ),
    onPressAction: () => {},
    type: "outlined-auth-buttons",
  },
  {
    name: "Register with Phone",
    icon: (
      <FontAwesome
        name="phone"
        size={24}
        color={appColors.onPrimaryContainerColor}
      />
    ),
    onPressAction: () => {},
    type: "outlined-auth-buttons",
  },
  {
    name: "Register with Email",
    icon: (
      <MaterialCommunityIcons
        name="email"
        size={24}
        color={appColors.onPrimaryContainerColor}
      />
    ),
    onPressAction: () => {},
    type: "outlined-auth-buttons",
  },
];

export default function componentName() {
  return (
    <SafeAreaView style={styles.container} testID="onboarding-screen">
      <View style={styles.topContainer}>
        <Image
          source={require("@/assets/images/logo.svg")}
          style={styles.logoImage}
        />
        <PagerView style={styles.pagerViewStyles}>
          {onboardingSliderCarouselData.map((item, index) => (
            <View key={index}>
              <OnboardingSlider {...item} />
            </View>
          ))}
        </PagerView>
      </View>
      <View style={styles.bottomContainer}>
        {registerButtonData.map((item: authButtonPropsType, index: number) => (
          <AuthButton key={index} {...item} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  },
  logoImage: {
    width: 190,
    height: 43.13,
  },
  topContainer: {
    marginTop: 58,
    height: 450,
    paddingHorizontal: 14,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  pagerViewStyles: {
    width: 320,
    flex: 1,
  },
  bottomContainer: {
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },
});
