import { ActionsElement } from "@/components";
import appColors from "@/constants/colors";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "column",
        }}
      >
        <ActionsElement
          actionType="pickup"
          size={4}
          units="bags"
          pickupType="immediate"
          price={2000}
          userType="agent"
          status="available"
          distance="2.5km"
          userProfileImage={require("@/assets/images/user-image.png")}
        />
        <ActionsElement
          actionType="pickup"
          size={4}
          units="bags"
          pickupType="immediate"
          price={2000}
          userType="agent"
          status="available"
          distance="2.5km"
          userProfileImage={require("@/assets/images/user-image.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: appColors.surfaceBright,
    flex: 1,
  },
});
