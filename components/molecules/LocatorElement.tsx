import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { locationPropsType } from "@/constants/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

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
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <MaterialCommunityIcons
              name="home-map-marker"
              size={24}
              color={appColors.onSurface}
            />
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              Device locaton
            </Text>
          </View>
          <Switch
            value={switchPosition}
            onValueChange={handleGetDeviceLocation}
            style={{
              padding: 5,
              borderWidth: 1,
              borderColor: "black",
            }}
            trackColor={{
              false: appColors.primaryContainerColor,
              true: appColors.primaryColor,
            }}
            thumbColor={
              switchPosition
                ? appColors.primaryContainerColor
                : appColors.primaryColor
            }
            ios_backgroundColor={appColors.primaryContainerColor}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  locatorStyles: {
    width: "90%",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: 10,
  },
});
