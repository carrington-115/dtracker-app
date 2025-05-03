import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { locationPropsType } from "@/constants/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import LocationSet from "../atoms/LocationSet";

export default function componentName({
  switchPosition,
  handleGetDeviceLocation,
  locationTitle,
}: {
  switchPosition: boolean;
  handleGetDeviceLocation: () => void;
  locationTitle?: string;
}) {
  return (
    <>
      <View style={styles.locatorStyles}>
        <Text style={{ ...textFontStyles.bodyLargeRegular }}>
          {locationTitle || "Pickup Location"}
        </Text>
        <LocationSet
          switchPosition={switchPosition}
          handleGetDeviceLocation={handleGetDeviceLocation}
          title={"Device location"}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  locatorStyles: {
    width: "90%",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 10,
  },
});
