import {
  AuthCheckElement,
  BottomButton,
  LocatorSection,
  TextInputElement,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { locationPropsType } from "@/constants/types";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [businessName, setBusinessName] = useState<string>("");
  const [locationDetails, setLocationDetails] =
    useState<locationPropsType | null>(null);
  const [deviceLocation, setDeviceLocation] = useState<boolean>(false);
  const [termsCheck, setTermsCheck] = useState<boolean>(false);
  const [errorCheck, setErrorCheck] = useState({
    businessNameError: false,
    businessDescriptionError: false,
    termsError: false,
  });
  const router = useRouter();

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

  const handleSubmitForm = async () => {
    try {
      // run this
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={appColors.surfaceBright}
        />
        <Appbar.Header statusBarHeight={0}>
          <Appbar.BackAction onPress={() => router.back()} />
          <Appbar.Content
            title="Business Profile"
            titleStyle={{
              ...textFontStyles.titleLargeMedium,
              color: appColors.onSurface,
            }}
          />
        </Appbar.Header>
      </>
      <ScrollView style={styles.scrollContainer}>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            gap: 20,
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <TextInputElement
            placeholder="Business Name"
            value={businessName}
            onChangeValue={setBusinessName}
            type="single-line"
            keyboardType="default"
            required
          />
          <TextInputElement
            placeholder="Business description"
            value={businessName}
            onChangeValue={setBusinessName}
            type="multiline"
            keyboardType="default"
            numberOfLines={5}
            multiline
            required
          />
          <LocatorSection
            switchPosition={deviceLocation}
            handleGetDeviceLocation={handleGetDeviceLocation}
          />
          <View
            style={{
              width: "100%",
              paddingTop: 20,
              borderTopWidth: 1,
              borderTopColor: appColors.surfaceContainerLow,
              marginBottom: 100,
            }}
          >
            <AuthCheckElement
              label="Agree to our terms and conditions"
              check={termsCheck}
              checkAction={() => setTermsCheck(!termsCheck)}
              error={errorCheck.termsError}
            />
          </View>
        </View>
        <BottomButton
          name="Create business profile"
          onPressAction={handleSubmitForm}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
  scrollContainer: {
    width: width,
    paddingHorizontal: 16,
  },
});
