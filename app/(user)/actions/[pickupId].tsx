import {
  NotificationLabel,
  StoreImageComponent,
  ViewElement,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StatusBar, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [loading, setLoading] = useState<boolean>(true);
  const [images, setImages] = useState<string[]>([]);
  const [imageViewerModal, setImageViewerModal] = useState<boolean>(false);
  const { actionId } = useLocalSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // item details
  const price: number = 5000;
  const trashDetails = {
    pickupType: "Immediate",
    trashType: "Plastic",
    trashWeight: 5,
  };
  const [notificationTitle, setNotificationTitle] =
    useState<string>("Just wait a moment");
  const [notificationBody, setNotificationBody] = useState<string>(
    "We’re finding the best available agent for you. This won’t take long! Sit back and relax while we establish a connection. 🚀"
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) {
    return (
      <SafeAreaView style={[styles.container]}>
        <Header />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator
            size="large"
            color={appColors.primaryColor}
            animating={true}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceBright}
        translucent={true}
      />
      <Header />
      <ScrollView style={styles.scrollViewcontainerStyles}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <StoreImageComponent
            action={() => setImageViewerModal(true)}
            type="image-view"
            images={images}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            paddingHorizontal: 16,
            gap: 10,
          }}
        >
          <ViewElement
            icon={
              <>
                <MaterialIcons
                  name="sell"
                  size={24}
                  color={appColors.onSurface}
                />
              </>
            }
            details={
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Text
                  style={{
                    ...textFontStyles.titleMediumRegular,
                    color: appColors.onSurface,
                  }}
                >
                  XAF
                </Text>
                <Text style={{ ...textFontStyles.headlineMediumMedium }}>
                  {price}
                </Text>
              </View>
            }
          />
          <ViewElement
            icon={
              <>
                <MaterialIcons
                  name="bike-scooter"
                  size={24}
                  color={appColors.onSurface}
                />
              </>
            }
            details={
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 5,
                }}
              >
                <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                  {trashDetails?.pickupType}
                </Text>
                <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                  <>{trashDetails.trashWeight}</> bags/pickup
                </Text>
              </View>
            }
          />
          <ViewElement
            icon={
              <>
                <MaterialIcons
                  name="info-outline"
                  size={24}
                  color={appColors.onSurface}
                />
              </>
            }
            details={
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Text
                  style={{
                    ...textFontStyles.bodyLargeMedium,
                    color: appColors.onSurface,
                  }}
                >
                  {trashDetails.trashType}
                </Text>
              </View>
            }
          />
          <ViewElement
            icon={
              <>
                <MaterialCommunityIcons
                  name="weight"
                  size={24}
                  color={appColors.onSurface}
                />
              </>
            }
            details={
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Text
                  style={{
                    ...textFontStyles.bodyLargeMedium,
                    color: appColors.onSurface,
                  }}
                >
                  <>{trashDetails.trashWeight}</> bags
                </Text>
              </View>
            }
          />
          <View style={{ width: "100%", marginVertical: 20 }}>
            <NotificationLabel
              content={{ title: notificationTitle, body: notificationBody }}
              icon={
                <MaterialCommunityIcons
                  name="information-outline"
                  size={24}
                  color={appColors.onSurface}
                />
              }
              color={appColors.onPrimaryContainerColor}
              bgColor={"rgba(215, 236, 227, 0.50)"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = () => {
  const router = useRouter();
  return (
    <Appbar.Header statusBarHeight={0}>
      <Appbar.BackAction onPress={() => router.back()} />
      <Appbar.Content title="" />
      <Appbar.Action icon="pencil-outline" onPress={() => {}} />
      <Appbar.Action icon="delete-outline" onPress={() => {}} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: appColors.surfaceBright,
  },
  scrollViewcontainerStyles: {
    width: width,
  },
});
