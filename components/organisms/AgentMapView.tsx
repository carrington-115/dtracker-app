import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { AgentMapViewProps } from "@/constants/types";
import mapStyle from "@/constants/map_styles";
import appColors from "@/constants/colors";
import CustomMarker from "../atoms/CustomMarker";

export default function AgentMapView({
  agentLocation,
  pickupLocation,
  mapRef,
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
      >
        <CustomMarker
          coordinate={agentLocation}
          image={require("@/assets/icons/markers/agent-marker.png")}
        />
        <CustomMarker
          coordinate={pickupLocation}
          image={require("@/assets/icons/markers/pickup-marker.png")}
        />
        {origin !== undefined && destination !== undefined ? (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY as string}
            strokeWidth={2}
            strokeColor={appColors.primaryColor}
            onError={(error) => {
              console.log(error);
            }}
          />
        ) : null}
      </MapView>
    </View>
  );
}
