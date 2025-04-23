import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { AgentMapViewProps } from "@/constants/types";
import mapStyle from "@/constants/map_styles";
import appColors from "@/constants/colors";
import CustomMarker from "../atoms/CustomMarker";

export default function AgentMapView({
  agentLocation,
  pickupLocation,
  mapRef,
}: AgentMapViewProps) {
  return (
    <View
      style={{
        width: "100%",
        height: 300,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: agentLocation.latitude,
          longitude: agentLocation.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        ref={mapRef}
      >
        <Marker coordinate={agentLocation} />
        <Marker coordinate={pickupLocation} />
      </MapView>
    </View>
  );
}
