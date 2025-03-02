import appColors from "@/constants/colors";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
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
  distance?: number;
  date?: string;
  time?: string;
  userProfileImage: any;
  pickupType: "immediate" | "scheduled";
}

const { width } = Dimensions.get("window");

export default function componentName() {
  const { pickupId } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Text>{pickupId}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
