import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Text, Switch } from "react-native";

export default function componentName({
  switchPosition,
  handleGetDeviceLocation,
  title,
}: {
  switchPosition: boolean;
  handleGetDeviceLocation: () => void;
  title: string;
}) {
  return (
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
        <Text style={{ ...textFontStyles.bodyLargeRegular }}>{title}</Text>
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
  );
}
