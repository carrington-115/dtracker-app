import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { mapActivityElementProps } from "@/constants/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import mapCustomStyles from "../../constants/map_styles";

export default function componentName({
  location,
  user,
  delay,
}: mapActivityElementProps) {
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
      <View style={{ width: 180, height: 160 }}>
        <MapView
          provider="google"
          style={styles.mapStyles}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
          customMapStyle={mapCustomStyles}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      </View>
      <View style={styles.userDetailStyles}>
        <Image
          style={{
            width: 48,
            height: 48,
            borderRadius: 100,
          }}
          source={
            require("@/assets/images/user-image.png") || { uri: user.photoUrl }
          }
        />
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              ...textFontStyles.titleMediumBold,
              color: appColors.onSurface,
            }}
          >
            {user.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <MaterialIcons
              name="timelapse"
              size={24}
              color={appColors.onSurface}
            />
            <Text
              style={{
                ...textFontStyles.bodyMediumRegular,
                color: appColors.onSurface,
              }}
            >
              {delay}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    gap: 20,
    borderRadius: 10,
  },
  mapStyles: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  userDetailStyles: {
    flexDirection: "row",
    gap: 10,
  },
});
