import { AgentMap } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface locationProps {
  lat: number;
  lng: number;
}

interface pickupDataProps {
  id: string;
  location: locationProps;
  userLocation: locationProps;
  status: "available" | "completed" | "in-progress" | "start journey";
  size: number;
  units: string;
  price: number;
  distance?: string;
  date?: string;
  time?: string;
  userProfileImage: any;
  pickupType: "immediate" | "scheduled";
}

const { width } = Dimensions.get("window");

export default function componentName() {
  const { pickupId } = useLocalSearchParams();
  const [currentPickupData, setCurrentPickupData] =
    useState<pickupDataProps | null>(null);

  const pickupData: pickupDataProps[] = [
    {
      id: "1",
      location: { lat: 6.5244, lng: 3.3792 },
      userLocation: { lat: 6.5244, lng: 3.3792 },
      status: "available",
      size: 4,
      units: "bags",
      price: 2000,
      distance: "2.5 km",
      userProfileImage: require("@/assets/images/user-image.png"),
      pickupType: "immediate",
    },
    {
      id: "2",
      location: { lat: 6.5244, lng: 3.3792 },
      userLocation: { lat: 6.5244, lng: 3.3792 },
      status: "available",
      size: 4,
      units: "bags",
      price: 2000,
      date: "2021-09-20",
      time: "10:00",
      userProfileImage: require("@/assets/images/user-image.png"),
      pickupType: "scheduled",
    },
  ];

  useEffect(() => {
    const currentPickup = pickupData.find((pickup) => pickup.id === pickupId);
    setCurrentPickupData(currentPickup!);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AgentMap />
      <View style={styles.detailsModalStyles}>
        <ScrollView style={{ width: "100%" }}>
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
              {currentPickupData?.distance} Away
            </Text>
            <Text style={{ ...textFontStyles.titleMediumRegular }}>
              Rond-point Express, Biyem-Assi
            </Text>
          </View>
        </ScrollView>
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
