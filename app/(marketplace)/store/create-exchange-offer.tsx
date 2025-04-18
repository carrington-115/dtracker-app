import { IconButton, AddExchangeElement } from "@/components";
import appColors from "@/constants/colors";
import mapStyle from "@/constants/map_styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  const [trashType, setTrashType] = useState<string>("");
  const [trashSize, setTrashSize] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [location, setLocation] = useState<{
    latitude: number;
    longtitude: number;
    accuracy: number | null;
  }>({
    latitude: 0,
    longtitude: 0,
    accuracy: null,
  });
  const [locationSwitchState, setLocationSwitchState] =
    useState<boolean>(false);
  const [deviceLocationState, setDeviceLocationState] =
    useState<boolean>(false);
  const [isBusinessLocationAvailable, setIsBusinessLocationAvailable] =
    useState<boolean>(false);

  const handleGetDeviceLocation = async () => {
    setDeviceLocationState((previous) => !previous);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      deviceLocationState &&
        setLocation({
          latitude: location.coords.latitude,
          longtitude: location.coords.longitude,
          accuracy: location.coords.accuracy,
        });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (location) {
      setLocation({
        latitude: location.latitude,
        longtitude: location.longtitude,
        accuracy: location.accuracy,
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <View style={styles.mapViewStyles}>
        <IconButton
          icon={
            <MaterialIcons
              name="arrow-back"
              color={appColors.onSurface}
              size={24}
            />
          }
          bgColor={"white"}
          pressedColor={appColors.surfaceContainer}
          btnAction={() => router.push("/store")}
          appStyles={{
            position: "absolute",
            top: 50,
            left: 10,
            zIndex: 100,
            borderWidth: 0.5,
            borderColor: appColors.outline,
          }}
        />
        {location ? (
          <MapView
            initialRegion={{
              latitude: location?.latitude || 0,
              longitude: location?.longtitude || 0,
              latitudeDelta: 3,
              longitudeDelta: 1.5,
            }}
            customMapStyle={mapStyle}
            provider={PROVIDER_GOOGLE}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {location.latitude !== 0 && location.longtitude !== 0 && (
              <Marker
                coordinate={{
                  latitude: location?.latitude,
                  longitude: location?.longtitude,
                }}
              />
            )}
          </MapView>
        ) : (
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={"large"} color={appColors.primaryColor} />
          </View>
        )}
      </View>
      <AddExchangeElement
        action={() => {}}
        trashType={trashType}
        setTrashType={setTrashType}
        trashSize={trashSize}
        setTrashSize={setTrashSize}
        price={price}
        setPrice={setPrice}
        location={location}
        locationSwitchState={locationSwitchState}
        deviceLocationState={deviceLocationState}
        isBusinessLocationAvailable={isBusinessLocationAvailable}
        handleGetDeviceLocation={handleGetDeviceLocation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    width: width,
    position: "relative",
  },
  mapViewStyles: {
    width: "100%",
    height: (3 * height) / 7,
    position: "relative",
  },
});
