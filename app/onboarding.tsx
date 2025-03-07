import React from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { AuthButton, AuthSlider } from "@/components";
import { authButtonPropsType } from "@/constants/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import appColors from "@/constants/colors";
import { useRouter } from "expo-router";

export default function componentName() {
  const router = useRouter();

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
      onPressAction: () => router.push("/(register)"),
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
      onPressAction: () => router.push("/(register)/register-with-phone"),
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
      onPressAction: () => router.push("/(register)/register-with-email"),
      type: "outlined-auth-buttons",
    },
    {
      name: "Sign in instead?",
      onPressAction: () => router.navigate("./login"),
      type: "text-auth-buttons",
    },
  ];
  return (
    <SafeAreaView style={styles.container} testID="onboarding-screen">
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceBright}
        translucent={true}
      />
      <View style={styles.topContainer}>
        <Image
          source={require("@/assets/images/logo.svg")}
          style={styles.logoImage}
        />
        <AuthSlider />
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
    backgroundColor: appColors.surfaceBright,
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
    marginBottom: 30,
  },

  bottomContainer: {
    flexDirection: "column",
    gap: 15,
    alignItems: "center",
  },
});
