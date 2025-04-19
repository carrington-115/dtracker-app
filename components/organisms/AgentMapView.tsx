import { Image } from "expo-image";
import React, { useRef } from "react";
import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { AgentMapViewProps } from "@/constants/types";
import mapStyle from "@/constants/map_styles";
import appColors from "@/constants/colors";

export default function AgentMapView({
  agentLocation,
  pickupLocation,
  mapRef,
}: AgentMapViewProps) {
  return (
    <View style={{ width: "100%", paddingHorizontal: 16, borderRadius: 20 }}>
      <MapView
        style={{ width: "100%", height: 300, borderRadius: 20 }}
        initialRegion={{
          latitude: agentLocation.latitude,
          longitude: agentLocation.longitude,
          latitudeDelta: 3,
          longitudeDelta: 3,
        }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        ref={mapRef}
      >
        <Marker
          image={require("@/assets/icons/markers/agent-marker.svg")}
          style={{ width: 40, height: 40 }}
          coordinate={agentLocation}
        />
        <Marker
          image={require("@/assets/icons/markers/pickup-marker.svg")}
          style={{ width: 40, height: 40 }}
          coordinate={pickupLocation}
        />
        <Polyline
          coordinates={[agentLocation, pickupLocation]}
          strokeColor={appColors.primaryColor}
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
}
