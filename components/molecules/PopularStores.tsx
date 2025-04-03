import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import customMapStyles from "@/constants/map_styles";
import { Image } from "expo-image";
import { textFontStyles } from "@/constants/fonts";
import appColors from "@/constants/colors";
import { popularStoresElementProps } from "@/constants/types";

export default function componentName({
  location,
  photoUrl,
  storeName,
  storeOwnerName,
}: popularStoresElementProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed
            ? appColors.surfaceContainerLow
            : "transparent",
        },
      ]}
    >
      <View style={styles.mapStyles}>
        <MapView
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
          customMapStyle={customMapStyles}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      </View>
      <View style={styles.mapContentStyles}>
        <Text
          style={{
            ...textFontStyles.titleLargeBold,
            color: appColors.onSurface,
          }}
        >
          {storeName}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={
              require("@/assets/images/user-image.png") || { uri: photoUrl }
            }
            style={{
              width: 48,
              height: 48,
            }}
          />
          <Text style={{ ...textFontStyles.bodyLargeRegular }}>
            {storeOwnerName}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  mapStyles: {
    width: "100%",
    height: 200,
    backgroundColor: "red",
  },
  mapContentStyles: {
    flexDirection: "column",
    gap: 10,
  },
});
