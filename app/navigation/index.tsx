import {
  MapVerifyElement,
  PickupNavigationElement,
  NavigationHeader,
  NavigationMap,
} from "@/components";
import appColors from "@/constants/colors";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Dimensions, StatusBar } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import MapViewDirections from "react-native-maps-directions";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

interface HeaderProps {
  name: string;
  ETA: string; // this time is estimated in minutes ...
  distance: string;
}

export default function componentName() {
  const [pinCode, setPinCode] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [pickupData, setPickupData] = useState<HeaderProps | null>();
  const mapRef = useRef<MapView>(null);
  const [location, setLocation] = useState<any>({
    pickupLocation: {
      latitude: null,
      longitude: null,
    },
    agentLocation: {
      latitude: null,
      longitude: null,
    },
  });

  const [ETAParams, setETAParams] = useState<{
    distance: number;
    duration: number;
  }>({
    duration: 0,
    distance: 0,
  });

  const router = useRouter();

  const timeConverter = (time: number): string => {
    if (time > 59) {
      const hours = Math.round(time / 60);
      const minutesLeft = time - hours * 60;
      return `${hours} h ${minutesLeft} m`;
    } else {
      return `${time} m`;
    }
  };

  useEffect(() => {
    setPickupData((prev) => {
      return {
        ...prev,
        name: "Zoya",
        ETA: timeConverter(ETAParams.duration),
        distance: `${ETAParams.distance} km`,
      };
    });
    setLocation((prev: any) => {
      return {
        ...prev,
        pickupLocation: {
          latitude: 26.767831,
          longitude: 80.999101,
        },
        agentLocation: {
          latitude: 26.95911,
          longitude: 81.007341,
        },
      };
    });
  }, [ETAParams]);

  const handleMapReady = () => {
    if (mapRef.current && location) {
      mapRef.current.fitToCoordinates(
        [location.agentLocation, location.pickupLocation],
        {
          edgePadding: { top: 50, right: 50, bottom: 20, left: 50 },
          animated: true,
        }
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"rgba(248, 248, 248, 1)"}
      />
      <NavigationHeader
        name={pickupData?.name!}
        ETA={pickupData?.ETA}
        distance={pickupData?.distance!}
      />
      <PickupNavigationElement
        mapDetails={{
          message: "Agent is on the way",
          startTime: "12:00 PM",
          ETA: "12:30 PM",
          totalETA: "30 mins",
        }}
        flowStates={{
          pickupStart: true,
          arrivedAtPickup: false,
          pickupVerify: false,
        }}
        details={{
          image: require("@/assets/images/user-image.png"),
          username: "John Doe",
          price: 500,
          trashSize: 2,
          units: "bags",
          userType: "user",
          buttonAction: () => setVisible(true),
        }}
      />
      <MapVerifyElement
        visible={visible}
        pinCode={pinCode!}
        userType="agent"
        submitCodeAction={() => router.navigate("/navigation/completed")}
        scanCodeAction={() => console.log("Scan code")}
        inputError={false}
        setPinCode={setPinCode}
        closeModalAction={() => setVisible(false)}
      />
      <NavigationMap
        centerLatitude={26.967831}
        centerLongitude={80.999101}
        mapRef={mapRef}
        agentLocation={location.agentLocation}
        pickupLocation={location.pickupLocation}
        mapReadyAction={handleMapReady}
        MapDirectionsElement={
          location.agentLocation.latitude !== null &&
          location.pickupLocation.latitude !== null && (
            <MapViewDirections
              origin={location.agentLocation}
              destination={location.pickupLocation}
              apikey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY as string}
              strokeWidth={2}
              strokeColor={appColors.primaryColor}
              onError={(error) => {
                console.log(error);
              }}
              onReady={(result) => {
                const params = {
                  duration: Math.round(result.duration),
                  distance: Math.round(result.distance),
                };
                setETAParams((prev) => {
                  return { ...prev, ...params };
                });
              }}
            />
          )
        }
      />

      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, .9)",
          "rgba(255, 255, 255, .1)",
        ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{
          width: "100%",
          height: 150,
          position: "absolute",
          zIndex: 50,
          bottom: 170,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    position: "relative",
  },
});
