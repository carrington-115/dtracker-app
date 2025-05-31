import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { AgentMapViewProps } from "@/constants/types";
import mapStyle from "@/constants/map_styles";
import CustomMarker from "../atoms/CustomMarker";

export default function AgentMapView({
  agentLocation,
  pickupLocation,
  mapRef,
  mapDirectionElement,
  handleMapReady,
}: AgentMapViewProps) {
  interface LocationProps {
    latitude: number;
    longitude: number;
  }

  const [origin, setOrigin] = useState<LocationProps | undefined>(undefined);
  const [destination, setDestination] = useState<LocationProps | undefined>(
    undefined
  );

  useEffect(() => {
    setTimeout(() => {
      setOrigin(agentLocation);
      setDestination(pickupLocation);
    }, 500);
  }, [agentLocation, pickupLocation]);

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
          latitude: (agentLocation.latitude + pickupLocation.latitude) / 2,
          longitude: (agentLocation.longitude + pickupLocation.longitude) / 2,
          latitudeDelta: 1.5,
          longitudeDelta: 1.5,
        }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        ref={mapRef}
        onMapReady={handleMapReady}
      >
        <CustomMarker
          coordinate={agentLocation}
          image={require("@/assets/icons/markers/agent-marker.png")}
        />
        <CustomMarker
          coordinate={pickupLocation}
          image={require("@/assets/icons/markers/pickup-marker.png")}
        />
        {origin !== undefined && destination !== undefined
          ? mapDirectionElement
          : null}
      </MapView>
    </View>
  );
}
