import { PickupButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { pickupButtonProps } from "@/constants/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  const pickupOptions: pickupButtonProps[] = [
    {
      icon: (
        <MaterialIcons
          name="access-time"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Immediate pickups",
      onPress: () => router.navigate("../(pickups)/immediate"),
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="calendar-range-outline"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Scheduled pickups",
      onPress: () => router.navigate("../(pickups)/reserve"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceContainerLow}
      />
      <Header />
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            width: "100%",
            paddingHorizontal: 16,
            marginTop: 20,
          }}
        >
          <Text style={{ ...textFontStyles.headlineMediumMedium }}>
            Pickup options
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {pickupOptions.map((option, index) => (
              <PickupButton key={index} {...option} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = () => {
  return (
    <>
      <Appbar.Header
        statusBarHeight={0}
        style={{
          backgroundColor: appColors.surfaceContainerLow,
          borderBottomWidth: 0.5,
          borderBottomColor: appColors.outline,
        }}
      >
        <Appbar.Content
          title="DTRACKER"
          titleStyle={{ ...textFontStyles.headlineSmallBold }}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="bell-outline" onPress={() => {}} />
        <Appbar.Action icon="cog-outline" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
