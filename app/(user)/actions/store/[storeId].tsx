import {
  ActiveButton,
  BottomSheetModal,
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
  const { storeId } = useLocalSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // modal details
  const [bottomSheetModalView, setBottomSheetModalView] =
    useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");

  // item details
  const itemName: string = "Plastic bottle";
  const category: string = "Plastic";
  const itemWeight: number = 5;
  const priceControl: string = "default";
  const priceAmount: number = 5000;
  const [notificationTitle, setNotificationTitle] =
    useState<string>("Just wait a moment");
  const [notificationBody, setNotificationBody] = useState<string>(
    "We’re finding the best available agent for you. This won’t take long! Sit back and relax while we establish a connection. 🚀"
  );

  const handleHeaderEditAction = () => {
    setModalTitle("Edit Pickup");
    setModalMessage("Are you sure you want to edit this pickup?");
    setBottomSheetModalView(true);
  };

  const handleHeaderDeleteAction = () => {
    setModalTitle("Delete Pickup");
    setModalMessage("Are you sure you want to delete this pickup?");
    setBottomSheetModalView(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) {
    return (
      <SafeAreaView style={[styles.container]}>
        <Header
          handleDeletePickupAction={() => {}}
          handleEditPickupAction={() => {}}
        />
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
      <Header
        handleDeletePickupAction={handleHeaderDeleteAction}
        handleEditPickupAction={handleHeaderEditAction}
      />
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
          <View style={{ width: "100%" }}>
            <Text style={{ ...textFontStyles.titleLargeBold }}>{itemName}</Text>
          </View>
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
                  {category}
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
                  {itemWeight}
                </Text>
              </View>
            }
          />
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
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Text style={{ ...textFontStyles.bodyMediumRegular }}>
                  {priceControl === "default" ? "Fixed price" : priceControl}
                </Text>
                {priceControl === "default" && (
                  <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                    {priceAmount} XAF
                  </Text>
                )}
              </View>
            }
          />
          <View style={{ width: "100%", marginVertical: 20 }}>
            <NotificationLabel
              content={{ title: notificationTitle, body: notificationBody }}
              icon={
                <MaterialIcons
                  name="verified"
                  size={24}
                  color={appColors.onPrimaryContainerColor}
                />
              }
              color={appColors.onPrimaryContainerColor}
              bgColor={"rgba(215, 236, 227, 0.50)"}
            />
          </View>
        </View>
      </ScrollView>
      <BottomSheetModal
        visible={bottomSheetModalView}
        setVisible={setBottomSheetModalView}
        initialHeight={0.2}
        minHieght={0.2}
        maxHeight={1}
        collapseHeight={0.5}
      >
        <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
          <View
            style={{
              width: 60,
              height: 5,
              backgroundColor: appColors.surfaceContainerHighest,
              borderRadius: 20,
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
          <Text style={{ ...textFontStyles.titleLargeMedium }}>
            {modalTitle}
          </Text>
          <Text style={{ ...textFontStyles.bodyLargeRegular }}>
            {modalMessage}
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <ActiveButton
              name="Continue"
              onPressAction={() => router.dismissTo("./edit-store-item")}
              bgColor={appColors.onSurface}
              color={appColors.surfaceBright}
              focusedColor={appColors.surfaceContainer}
            />
            <ActiveButton
              name="Cancel"
              onPressAction={() => setBottomSheetModalView(false)}
              bgColor={appColors.surfaceContainerLow}
              color={appColors.onSurface}
              focusedColor={appColors.surfaceContainer}
            />
          </View>
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
}

const Header = ({
  handleEditPickupAction,
  handleDeletePickupAction,
}: {
  handleEditPickupAction: () => void;
  handleDeletePickupAction: () => void;
}) => {
  const router = useRouter();
  return (
    <Appbar.Header statusBarHeight={0}>
      <Appbar.BackAction onPress={() => router.back()} />
      <Appbar.Content title="" />
      <Appbar.Action icon="pencil-outline" onPress={handleEditPickupAction} />
      <Appbar.Action icon="delete-outline" onPress={handleDeletePickupAction} />
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
