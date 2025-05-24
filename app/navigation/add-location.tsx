import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text, StatusBar } from "react-native";
import appColors from "@/constants/colors";
import MapView from "react-native-maps";
import mapStyle from "@/constants/map_styles";
import { BottomButton, CustomMarker, IconButton } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

interface LocationProps {
  latitude: number;
  longitude: number;
}

export default function componentName() {
  const [location, setLocation] = useState<LocationProps | null>(null);

  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View
        style={{
          position: "absolute",
          top: 10,
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
      >
        {location !== null &&
          location?.latitude !== 0 &&
          location?.longitude !== 0 && (
            <CustomMarker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              image={require("@/assets/icons/markers/pickup-marker.png")}
            />
          )}
      </MapView>
      <DetailsComponent />
    </SafeAreaView>
  );
}

const DetailsComponent = () => {
  return (
    <View style={styles.detailsContainer}>
      <View>
        <Text>Fill this soon</Text>
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
