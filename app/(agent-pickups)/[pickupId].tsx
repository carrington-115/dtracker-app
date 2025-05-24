import { AgentMap, AmountElement, BottomButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { ActionSpecialDataProps } from "@/constants/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

/*
  - The Google maps api required here
  - The routes api
  - the geocoding api

*/

export default function componentName() {
  const { pickupId } = useLocalSearchParams();
  const mapRef = useRef<MapView>(null);

  const [currentPickupData, setCurrentPickupData] =
    useState<ActionSpecialDataProps | null>(null);
  const [estimatedDistance, setEstimatedDistance] = useState<number | null>(
    null
  );
  const [estimatedDuration, setEstimatedDuration] = useState<number | null>(
    null
  );

  const [buttonName, setButtonName] = useState<string>("Accept");

  const [pickupData, setPickupData] = useState<ActionSpecialDataProps[]>([
    {
      actionType: "pickup",
      size: 2,
      units: "buckets",
      pickupType: "immediate",
      price: 1000,
      userType: "agent",
      status: "pending",
      userProfileImage: require("@/assets/images/user-image.png"),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      pickupId: "1",
      username: "John Doe",
      location: {
        agentLocation: {
          latitude: 3.8712,
          longitude: 11.5137,
        },
        pickupLocation: {
          latitude: 3.9012,
          longitude: 11.5737,
        },
      },
    },
  ]);

  useEffect(() => {
    const handleWritePickupData = () => {
      const currentPickup = pickupData.find(
        (pickup: ActionSpecialDataProps) => pickup.pickupId === pickupId
      );
      setCurrentPickupData(currentPickup!);
    };

    handleWritePickupData();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates([
        pickupData[0]?.location?.agentLocation!,
        pickupData[0]?.location?.pickupLocation!,
      ]);
    }
  }, [pickupData, estimatedDistance, estimatedDuration]);

  // this function will calculate the time to collect the pickup
  const calculateTimeToCollect = () => {
    const pickupTime = new Date();
    const pickupDuration = estimatedDuration!;
    const pickupTimeToCollect = new Date(
      pickupTime.getTime() + pickupDuration * 60000
    );
    const finalTime = pickupTimeToCollect.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return finalTime;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", paddingHorizontal: 16 }}>
        <AgentMap
          agentLocation={pickupData[0]?.location?.agentLocation!}
          pickupLocation={pickupData[0]?.location?.pickupLocation!}
          mapRef={mapRef}
          mapDirectionElement={
            <MapViewDirections
              origin={pickupData[0]?.location?.agentLocation!}
              destination={pickupData[0]?.location?.pickupLocation!}
              apikey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY as string}
              strokeWidth={2}
              strokeColor={appColors.primaryColor}
              onError={(error) => {
                console.log(error);
              }}
              onReady={(result) => {
                setEstimatedDistance(Math.round(result.distance));
                setEstimatedDuration(Math.round(result.duration));
              }}
            />
          }
        />
      </View>
      <View style={styles.detailsModalStyles}>
        <View style={{ width: "100%" }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              paddingVertical: 5,
              gap: 5,
              borderBottomWidth: 0.5,
              borderBottomColor: appColors.outlineVariant,
            }}
          >
            <Text style={{ ...textFontStyles.titleLargeBold }}>
              {estimatedDistance ? estimatedDistance! : 0} km Away
            </Text>
            <Text style={{ ...textFontStyles.titleMediumRegular }}>
              You will collect arrive at{" "}
              {currentPickupData?.time ? calculateTimeToCollect() : "00:00"}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent:
                currentPickupData?.date && currentPickupData?.time
                  ? "space-between"
                  : "flex-start",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderBottomWidth: 0.5,
              borderBottomColor: appColors.outlineVariant,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                gap: 5,
                width: "auto",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <MaterialCommunityIcons
                  name="weight"
                  size={24}
                  color={appColors.onSurfaceVariant}
                />
                <Text style={{ ...textFontStyles.bodyLargeRegular }}>
                  {currentPickupData?.size} {currentPickupData?.units}
                </Text>
              </View>
              <AmountElement
                currency="XAF"
                amount={currentPickupData?.price!}
                currentStyle={{ ...textFontStyles.titleMediumRegular }}
                amountStyle={{ ...textFontStyles.headlineMediumMedium }}
              />
            </View>
            <>
              {currentPickupData?.date && currentPickupData?.time && (
                <View
                  style={{
                    flexDirection: "column",
                    gap: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <MaterialIcons
                      name="calendar-month"
                      size={24}
                      color={appColors.onSurfaceVariant}
                    />
                    <Text style={{ ...textFontStyles.bodyLargeRegular }}>
                      {currentPickupData?.date}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <MaterialIcons
                      name="schedule"
                      size={24}
                      color={appColors.onSurfaceVariant}
                    />
                    <Text style={{ ...textFontStyles.bodyLargeRegular }}>
                      {currentPickupData?.time}
                    </Text>
                  </View>
                </View>
              )}
            </>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 10,
            }}
          >
            <Image
              source={currentPickupData?.userProfileImage}
              style={{
                width: 48,
                height: 48,
                borderRadius: 50,
              }}
            />
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              {currentPickupData?.username}
            </Text>
          </View>
          <View style={{ width: "100%", marginTop: 30, paddingHorizontal: 16 }}>
            <BottomButton
              name={buttonName}
              onPressAction={() => setButtonName("Start Journey")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },

  detailsModalStyles: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    height: height / 2,
    bottom: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: appColors.surfaceContainerLow,
    minHeight: "50%",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
});
