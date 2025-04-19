import { ActionsElement } from "@/components";
import { NoElementOnPage } from "@/components/organisms/NoElementOnPage";
import appColors from "@/constants/colors";
import { ActionSpecialDataProps } from "@/constants/types";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  const [pickupsNumber, setPickupsNumber] = useState<ActionSpecialDataProps[]>(
    []
  );

  useEffect(() => {
    setPickupsNumber([
      {
        actionType: "pickup",
        size: 2,
        units: "buckets",
        pickupType: "immediate",
        price: 10,
        userType: "agent",
        status: "pending",
        userProfileImage: require("@/assets/images/user-image.png"),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        pickupId: 1,
        username: "John Doe",
        distance: "2.5 km",
      },
    ]);
  }, []);

  if (pickupsNumber.length === 0) {
    return (
      <SafeAreaView
        style={{
          width: width,
          height: height,
          paddingHorizontal: 50,
          paddingTop: (2 * height) / 7,
        }}
      >
        <NoElementOnPage
          title="Stay Tuned!"
          message="Stay ready! New pickup requests will appear here as soon as they are assigned to you."
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "column",
        }}
      >
        {pickupsNumber.map((pickup) => (
          <ActionsElement
            actionType={pickup.actionType}
            size={pickup.size}
            units={pickup.units}
            pickupType={pickup.pickupType}
            price={pickup.price}
            userType={pickup.userType}
            status={pickup.status}
            distance={pickup.distance}
            userProfileImage={pickup.userProfileImage}
            username={pickup.username}
            pressAction={() =>
              router.navigate({
                pathname: "/(agent-pickups)/[pickupId]",
                params: { pickupId: "1" },
              })
            }
            key={pickup.pickupId}
          />
        ))}
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
