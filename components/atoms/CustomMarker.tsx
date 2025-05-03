import React from "react";
import { StyleSheet, Image } from "react-native";
import { Marker } from "react-native-maps";
import { CustomMarkerProps } from "@/constants/types";

export default function CustomMarker({ coordinate, image }: CustomMarkerProps) {
  return (
    <Marker coordinate={coordinate} style={{ width: 80, height: 80 }}>
      <Image source={image} style={styles.imageStyle} resizeMode="contain" />
    </Marker>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
  },
});
