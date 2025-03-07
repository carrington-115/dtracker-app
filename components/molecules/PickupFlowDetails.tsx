import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapPickupElement from "../atoms/MapPickupElement";
import { BottomButton } from "..";
import { pickupFlowDetailsProps } from "@/constants/types";

export default function componentName({
  userType,
  image,
  price,
  units,
  trashSize,
  username,
  buttonAction,
}: pickupFlowDetailsProps) {
  return (
    <View style={styles.container}>
      <MapPickupElement
        image={image}
        price={price}
        units={units}
        trashSize={trashSize}
        username={username}
      />
      <BottomButton
        name={userType === "user" ? "Verify" : "Complete"}
        onPressAction={buttonAction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },
});
