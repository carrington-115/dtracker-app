import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import appColors from "@/constants/colors";
import MapView from "react-native-maps";
import mapStyle from "@/constants/map_styles";
import {
  BottomButton,
  CustomMarker,
  IconButton,
  LocatorSection,
} from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");

interface LocationProps {
  latitude: number;
  longitude: number;
}

export default function componentName() {
  const [location, setLocation] = useState<LocationProps | null>(null);
  const mapRef = useRef<MapView>(null);
  const [isMapReady, setIsMapReady] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (isMapReady && mapRef.current && location) {
      mapRef.current.animateToRegion(
        { ...location, latitudeDelta: 0.06522, longitudeDelta: 0.00921 },
        1000
      );
    }
  }, [location, isMapReady]);

  const handleMapReady = () => {
    setIsMapReady(true);
    if (mapRef.current && location) {
      const { latitude, longitude } = location;
      mapRef.current.animateToRegion(
        { latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
        1000
      );
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View
        style={{
          position: "absolute",
          top: 30,
          left: 10,
          zIndex: 1000,
        }}
      >
        <IconButton
          icon={
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={appColors.onSurface}
            />
          }
          bgColor={appColors.surfaceBright}
          btnAction={() => router.back()}
          pressedColor={appColors.surfaceContainerLow}
        />
      </View>
      <MapView
        style={{
          width: "100%",
          height: "100%",
          ...StyleSheet.absoluteFillObject,
        }}
        initialRegion={{
          latitude: 6.356779,
          longitude: 12.727659,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapStyle}
        onMapReady={handleMapReady}
        ref={mapRef}
      >
        {location && (
          <CustomMarker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            image={require("@/assets/icons/markers/pickup-marker.png")}
          />
        )}
      </MapView>
      <DetailsComponent setDeviceLocation={setLocation} />
    </SafeAreaView>
  );
}

const DetailsComponent = ({
  setDeviceLocation,
}: {
  setDeviceLocation: (location: any) => void;
}) => {
  const [locationSwitchState, setLocationSwitchState] =
    useState<boolean>(false);

  const handleGetDeviceLocation = async () => {
    setLocationSwitchState((previous) => !previous);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setDeviceLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };
  return (
    <View style={styles.detailsContainer}>
      <View
        style={{
          width: "100%",
          borderBottomWidth: 0.5,
          borderColor: appColors.outlineVariant,
        }}
      >
        <LocatorSection
          switchPosition={locationSwitchState}
          handleGetDeviceLocation={handleGetDeviceLocation}
          locationTitle={"Add new location"}
        />
      </View>
      <View></View>
      <BottomButton name="Save location" onPressAction={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    width: width,
    height: height,
    position: "relative",
  },
  detailsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: appColors.surfaceBright,
    width: "100%",
    paddingBottom: 50,
    paddingTop: 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "column",
    gap: 10,
  },
});
