import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapStyle from "@/constants/map_styles";
import { textFontStyles } from "@/constants/fonts";
import appColors from "@/constants/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AmountElement } from "..";
import { exchangeElementProps } from "@/constants/types";

export default function componentName({
  title,
  wasteType,
  size,
  storeLocation,
  owner,
  price,
}: exchangeElementProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed
            ? appColors.surfaceContainer
            : owner
            ? appColors.surfaceContainerLow
            : "transparent",
          borderBottomWidth: pressed || owner ? 0 : 0.5,
          borderBottomColor: appColors.outlineVariant,
        },
      ]}
    >
      <View style={styles.leftContainerStyles}>
        <View
          style={{
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Text
            style={{
              ...textFontStyles.titleLargeMedium,
              color: appColors.onSurface,
            }}
          >
            {title}
          </Text>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <MaterialIcons
              name="recycling"
              size={24}
              color={appColors.onSurface}
            />
            <Text>{wasteType}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <MaterialCommunityIcons
              name="weight"
              size={24}
              color={appColors.onSurface}
            />
            <Text>{size} kg</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <AmountElement
            currency="XAF"
            amount={price}
            currentStyle={{ ...textFontStyles.bodySmallBold }}
            amountStyle={{ ...textFontStyles.bodyLargeRegular }}
          />
          <Text style={{ ...textFontStyles.bodyLargeRegular }}>/kg</Text>
        </View>
      </View>
      <View style={styles.rightContainerStyles}>
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: storeLocation.latitude,
            longitude: storeLocation.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
          liteMode={false}
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
        >
          <Marker
            coordinate={{
              latitude: storeLocation.latitude,
              longitude: storeLocation.longitude,
            }}
          />
        </MapView>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  leftContainerStyles: {
    flexDirection: "column",
    gap: 40,
  },
  rightContainerStyles: {
    width: "40%",
    height: 160,
  },
});
