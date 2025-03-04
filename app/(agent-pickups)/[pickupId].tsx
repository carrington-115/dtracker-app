import { AgentMap, AmountElement, BottomButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { pickupDataProps } from "@/constants/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
      userData: {
        image: require("@/assets/images/user-image.png"),
        name: "John Doe",
      },
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
      userData: {
        image: require("@/assets/images/user-image.png"),
        name: "Jane Doe",
      },
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
              source={currentPickupData?.userData.image}
              style={{
                width: 48,
                height: 48,
                borderRadius: 50,
              }}
            />
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              {currentPickupData?.userData.name}
            </Text>
          </View>
          <View style={{ width: "100%", marginTop: 30, paddingHorizontal: 16 }}>
            <BottomButton name="Accept" onPressAction={() => {}} />
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
