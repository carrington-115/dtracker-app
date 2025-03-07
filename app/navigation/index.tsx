import { PickupNavigationElement } from "@/components";
import appColors from "@/constants/colors";
import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello navigation</Text>
      <PickupNavigationElement
        mapDetails={{
          message: "Agent is on the way",
          startTime: "12:00 PM",
          ETA: "12:30 PM",
          totalETA: "30 mins",
        }}
        flowStates={{
          pickupStart: true,
          arrivedAtPickup: false,
          pickupVerify: false,
        }}
        details={{
          image: require("@/assets/images/user-image.png"),
          username: "John Doe",
          price: 500,
          trashSize: 2,
          units: "bags",
          userType: "user",
          buttonAction: () => console.log("Button pressed"),
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    position: "relative",
  },
});
