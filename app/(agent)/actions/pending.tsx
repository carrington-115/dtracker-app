import { ActionsElement } from "@/components";
import appColors from "@/constants/colors";
import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <ActionsElement
          userProfileImage={require("@/assets/images/user-image.png")}
          actionType="pickup"
          size={2}
          units="bags"
          price={500}
          userType="agent"
          status="pending"
          pickupType="scheduled"
          date="01 March"
          time="10:00"
          username="Clara Bih"
        />
        <ActionsElement
          userProfileImage={require("@/assets/images/user-image.png")}
          actionType="pickup"
          size={2}
          units="bags"
          price={500}
          userType="agent"
          status="pending"
          pickupType="immediate"
          username="Nde Peter"
          distance="2.5 km"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
