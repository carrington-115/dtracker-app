import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import appColors from "@/constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";
import {
  BottomButton,
  IconButton,
  ImageViewer,
  ModalImageviewer,
  ViewElement,
} from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

export default function componentName() {
  const trashImages = useSelector((state: any) => state.immediate.trashImages);
  const trashDetails = useSelector((state: any) => state.trashDetail);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [openImageViewer, setOpenImageViewer] = useState<boolean>(false);

  const handleOpenImageViewer = () => {
    setOpenImageViewer(true);
  };

  /*
    program parameters
    - price
    - pickup type and amount
    - trash category
    - weight
    - pickup location
  */

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={appColors.surfaceBright}
          translucent
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: appColors.surfaceBright,
          }}
        >
          <ActivityIndicator color={appColors.primaryColor} size={48} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceBright}
        translucent
      />
      <>
        <Appbar.Header
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            backgroundColor: "transparent",
            zIndex: 20,
          }}
        >
          <Appbar.BackAction onPress={() => router.back()} />
          <Appbar.Content title="Immediate pickup" />
          <Appbar.Action
            icon="pencil"
            onPress={() => {
              router.back();
            }}
          />
        </Appbar.Header>
        <ScrollView
          style={{
            marginTop: 50,
          }}
        >
          <View style={styles.ImageSection}>
            <ImageViewer images={trashImages} />
            <IconButton
              icon={
                <MaterialCommunityIcons
                  name={"arrow-expand"}
                  size={16}
                  color={appColors.surfaceBright}
                />
              }
              bgColor={appColors.onSurface}
              btnAction={handleOpenImageViewer}
              appStyles={{
                elevation: 5,
                position: "absolute",
                bottom: 21,
                left: 16,
              }}
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
                    1000
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
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 45,
              paddingVertical: 20,
              marginTop: 10,
              gap: 30,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  ...textFontStyles.bodySmallRegular,
                }}
              >
                Total
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Text
                  style={{
                    ...textFontStyles.bodySmallRegular,
                    color: appColors.onSurface,
                  }}
                >
                  XAF
                </Text>
                <Text style={{ ...textFontStyles.bodyLargeBold }}>1000</Text>
              </View>
            </View>
            <BottomButton name="Complete now" onPressAction={() => {}} />
          </View>
        </ScrollView>
        <ModalImageviewer
          images={trashImages}
          visible={openImageViewer}
          closeModal={() => setOpenImageViewer(false)}
        />
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
  ImageSection: {
    height: 250,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
});
