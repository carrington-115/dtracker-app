import {
  ActiveButton,
  AmountElement,
  IconButton,
  PinCodeVerificationBox,
  ViewElement,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import mapStyle from "@/constants/map_styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  Pressable,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  const store = useSelector((state: any) => state.store);
  const [show, setShow] = useState<boolean>(false);

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
        {store.location ? (
          <MapView
            initialRegion={{
              latitude: store.location?.latitude || 0,
              longitude: store.location?.longtitude || 0,
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
                latitude: store.location?.latitude || 0,
                longitude: store.location?.longtitude || 0,
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
            <Text style={{ ...textFontStyles.titleMediumRegular }}>{}</Text>
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
              {store.trashType}
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
              {store.itemSize} kg
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
                amount={store.pricePerUnit}
                amountStyle={{ ...textFontStyles.headlineMediumRegular }}
              />
              <Text style={{ ...textFontStyles.bodyMediumMedium }}>/kg</Text>
            </View>
          }
        />

        <View
          style={{
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            gap: 20,
            paddingTop: 20,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              gap: 12,
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              backgroundColor: appColors.primaryColor,
              borderRadius: 40,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
            onPress={() => setShow(true)}
          >
            <MaterialIcons
              name="recycling"
              size={24}
              color={appColors.onPrimaryColor}
            />
            <Text
              style={{
                ...textFontStyles.bodyLargeRegular,
                color: appColors.onPrimaryColor,
              }}
            >
              Verify exchange
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <ActiveButton
              icon={
                <MaterialCommunityIcons
                  name="chat-plus-outline"
                  size={24}
                  color={appColors.onSurface}
                />
              }
              name="Messages"
              color={appColors.onSurface}
              bgColor={"rgba(179, 179, 179, 1)"}
              onPressAction={() => {}}
              focusedColor={appColors.onSurface}
            />
            <ActiveButton
              icon={
                <MaterialIcons
                  name="playlist-add"
                  size={24}
                  color={appColors.onSurface}
                />
              }
              name="Collections"
              color={appColors.onSurface}
              bgColor={"rgba(179, 179, 179, 1)"}
              onPressAction={() => {}}
              focusedColor={appColors.surfaceContainer}
            />
          </View>
        </View>
      </View>
      {show && <VerificationPinCodeForm show={show} setShow={setShow} />}
    </View>
  );
}

const VerificationPinCodeForm = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
}) => {
  const [otp, setOtp] = useState<string>("");

  const handleSubmitPinCode = async () => {
    setShow(false);
  };
  return (
    <Pressable
      style={[
        styles.verificationPinCodeFormStyles,
        { display: show ? "flex" : "none" },
      ]}
      onPress={() => setShow(false)}
    >
      <PinCodeVerificationBox
        buttonAction={handleSubmitPinCode}
        otp={otp}
        setOtp={setOtp}
        cameraAction={() => {}}
      />
    </Pressable>
  );
};

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

  verificationPinCodeFormStyles: {
    height: height,
    width: width,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingHorizontal: 16,
  },
});
