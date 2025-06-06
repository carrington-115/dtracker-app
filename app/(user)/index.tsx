import {
  ActionButton,
  AddLocationElement,
  ExchangeElement,
  MapElementView,
  PickupButton,
  PopularStoreElement,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { locationPropsType, pickupButtonProps } from "@/constants/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { Appbar } from "react-native-paper";

const { width } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  const [locationDetails, setLocationDetails] =
    useState<locationPropsType | null>(null);
  const [deviceLocation, setDeviceLocation] = useState<boolean>(false);

  const handleGetDeviceLocation = async () => {
    setDeviceLocation((previous) => !previous);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocationDetails({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        accuracy: location.coords.accuracy,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const pickupOptions: pickupButtonProps[] = [
    {
      icon: (
        <MaterialIcons
          name="access-time"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Immediate pickup",
      onPress: () => router.navigate("../(pickups)/immediate"),
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="book-multiple-outline"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Reserve pickup",
      onPress: () => router.navigate("../(pickups)/reserve"),
    },
    {
      icon: (
        <FontAwesome
          name="recycle"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Request exchange",
      onPress: () => router.navigate("/exchange"),
    },
  ];

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor={appColors.surfaceBright}
        />
        <Appbar.Header
          style={{
            backgroundColor: appColors.surfaceBright,
          }}
          statusBarHeight={0}
        >
          <Appbar.Content
            title="DTRACKER"
            titleStyle={{ ...textFontStyles.headlineSmallBold }}
          />
          <Appbar.Action
            icon={"recycle"}
            onPress={() => router.navigate("/exchange")}
          />
          <Appbar.Action
            icon="cog-outline"
            onPress={() => router.push("/settings")}
          />
        </Appbar.Header>
        <ScrollView style={styles.scrollContainerStyles}>
          <View style={styles.homeTitleStyle}>
            <Text
              style={{
                ...textFontStyles.headlineSmallMedium,
                color: appColors.onSurface,
                textAlign: "center",
              }}
            >
              Trash Management Options
            </Text>
            <View style={styles.actionStyles}>
              {pickupOptions.map((option, index) => (
                <PickupButton key={index} {...option} />
              ))}
            </View>
          </View>
          <AddLocationElement />

          {/* <PopularStoreElement
            location={{
              latitude: 0,
              longitude: 0,
            }}
            storeName="Store Name"
            storeOwnerName="Store Owner Name"
            photoUrl=""
            action={() => {}}
          /> */}
          {/* <View
            style={{
              width: "100%",
              gap: 10,
              flexDirection: "column",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                ...textFontStyles.bodyLargeRegular,
                color: appColors.onSurface,
                marginTop: 10,
              }}
            >
              Recommended exchange points
            </Text>
            <MapElementView
              mapsDetails={[
                {
                  location: {
                    latitude: 0,
                    longitude: 0,
                  },
                  user: {
                    name: "User",
                    photoUrl: "",
                  },
                  delay: "2 hours",
                },
              ]}
            />
          </View> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.surfaceBright,
    flex: 1,
  },
  homeTitleStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  actionStyles: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 13.5,
  },
  scrollContainerStyles: {
    width: width,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
});
