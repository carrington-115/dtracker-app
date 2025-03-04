import { ActionsElement } from "@/components";
import appColors from "@/constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
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
          username="Nde Peter"
          pressAction={() =>
            router.navigate({
              pathname: "/(agent-pickups)/[pickupId]",
              params: { pickupId: "1" },
            })
          }
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
          username="Nde Nkwenti"
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
