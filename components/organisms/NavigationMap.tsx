import mapStyle from "@/constants/map_styles";
import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CustomMarker from "../atoms/CustomMarker";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import appColors from "@/constants/colors";

const { width } = Dimensions.get("window");

interface navigationElementProps {
  centerLatitude: number;
  centerLongitude: number;
  agentLocation: {
    latitude: number;
    longitude: number;
  };
  pickupLocation: {
    latitude: number;
    longitude: number;
  };
  mapRef: React.RefObject<MapView>;
  MapDirectionsElement?: any;
  mapReadyAction?: () => void;
}

export default function componentName({
  centerLatitude,
  centerLongitude,
  agentLocation,
  pickupLocation,
  mapRef,
  MapDirectionsElement,
  mapReadyAction,
}: navigationElementProps) {
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ ...StyleSheet.absoluteFillObject, ...styles.map }}
        initialRegion={{
          latitude: centerLatitude,
          longitude: centerLongitude,
          latitudeDelta: 1.5,
          longitudeDelta: 1.5,
        }}
        customMapStyle={mapStyle}
        ref={mapRef}
        onMapReady={mapReadyAction}
      >
        <CustomMarker
          coordinate={agentLocation!}
          image={require("@/assets/icons/markers/agent-marker.png")}
        />
        <CustomMarker
          coordinate={pickupLocation}
          image={require("@/assets/icons/markers/pickup-marker.png")}
        />

        <>{MapDirectionsElement}</>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: "57%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
