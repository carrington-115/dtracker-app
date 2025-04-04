import {
  ActiveButton,
  AmountElement,
  IconButton,
  ViewElement,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import mapStyle from "@/constants/map_styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function componentName() {
  // use tanstack query when loading the data
  // current testing with react state

  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useLocalSearchParams();

  // item details
  const [storeName, setStoreName] = useState<string>("Store name");
  const [category, setCategory] = useState<
    "plastics" | "metals" | "papers" | "glass" | "others"
  >("plastics");
  const [itemWeight, setItemWeight] = useState<null | number>(5);
  const [pricePerUnit, setPricePerUnit] = useState<number>(0);
  const [storeLocation, setStoreLocation] = useState<null | {
    latitude: number;
    longtitude: number;
  }>({
    latitude: 20,
    longtitude: 20,
  });

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading, id]);

  // add more useEffects during data fetching and for other corrections

  if (loading) {
    return (
      <SafeAreaView
        style={{
          ...styles.container,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={appColors.primaryColor} />
      </SafeAreaView>
    );
  }

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
          btnAction={() => router.back()}
          appStyles={{
            position: "absolute",
            top: 50,
            left: 10,
            zIndex: 100,
            borderWidth: 0.5,
            borderColor: appColors.outline,
          }}
        />
        {storeLocation ? (
          <MapView
            initialRegion={{
              latitude: storeLocation?.latitude || 0,
              longitude: storeLocation?.longtitude || 0,
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
            <Marker
              coordinate={{
                latitude: storeLocation?.latitude || 0,
                longitude: storeLocation?.longtitude || 0,
              }}
            />
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
      <View style={styles.contentViewStyles}>
        <ViewElement
          icon={
            <MaterialIcons
              name="storefront"
              size={24}
              color={appColors.onSurface}
            />
          }
          details={
            <Text style={{ ...textFontStyles.titleMediumRegular }}>
              {storeName}
            </Text>
          }
        />
        <ViewElement
          icon={
            <MaterialIcons
              name="recycling"
              size={24}
              color={appColors.onSurface}
            />
          }
          details={
            <Text style={{ ...textFontStyles.titleMediumRegular }}>
              {category}
            </Text>
          }
        />
        <ViewElement
          icon={
            <MaterialCommunityIcons
              name="weight"
              size={24}
              color={appColors.onSurface}
            />
          }
          details={
            <Text style={{ ...textFontStyles.titleMediumRegular }}>
              {itemWeight} kg
            </Text>
          }
        />
        <ViewElement
          icon={
            <MaterialIcons name="sell" size={24} color={appColors.onSurface} />
          }
          details={
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <AmountElement
                currency="XAF"
                currentStyle={{ ...textFontStyles.titleMediumMedium }}
                amount={pricePerUnit}
                amountStyle={{ ...textFontStyles.headlineMediumRegular }}
              />
              <Text style={{ ...textFontStyles.bodyMediumMedium }}>/kg</Text>
            </View>
          }
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: 50,
          }}
        >
          <ActiveButton
            icon={<MaterialIcons name="check" size={24} color={"white"} />}
            name="Show interest"
            color={"white"}
            bgColor={appColors.onSurfaceVariant}
            onPressAction={() => {}}
            focusedColor={appColors.onSurface}
          />
          <ActiveButton
            icon={
              <MaterialIcons
                name="close"
                size={24}
                color={appColors.onSurface}
              />
            }
            name="Cancel"
            color={appColors.onSurface}
            bgColor={appColors.surfaceContainerLow}
            onPressAction={() => {}}
            focusedColor={appColors.surfaceContainer}
          />
        </View>
      </View>
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
    height: (2 * height) / 3,
    position: "relative",
  },
  contentViewStyles: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    minHeight: height / 2,
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 16,
    elevation: 10,
    flexDirection: "column",
    alignItems: "center",
  },
});
