import appColors from "@/constants/colors";
import { pickupFlowElementProps, stateObserverProps } from "@/constants/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { View, StyleSheet } from "react-native";
import PickupStateObserver from "../atoms/PickupStateObserver";

export default function componentName({
  pickupStart,
  arrivedAtPickup,
  pickupVerify,
}: pickupFlowElementProps) {
  const observerElements: stateObserverProps[] = [
    {
      active: pickupStart,
      icon: (
        <MaterialIcons
          name="pedal-bike"
          size={24}
          color={appColors.onSurface}
        />
      ),
    },
    {
      active: arrivedAtPickup,
      icon: (
        <MaterialIcons
          name="location-on"
          size={24}
          color={appColors.onSurface}
        />
      ),
    },
    {
      active: pickupVerify,
      icon: (
        <MaterialIcons name="check" size={24} color={appColors.onSurface} />
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {observerElements.map((element, index) => (
          <React.Fragment key={index}>
            <PickupStateObserver {...element} />
            {index !== observerElements.length - 1 && (
              <View
                style={{
                  height: 2,
                  width: "26%",
                  backgroundColor: appColors.outlineVariant,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 40,
  },
});
