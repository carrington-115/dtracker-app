import { StoreItemComponent } from "@/components";
import appColors from "@/constants/colors";
import { storeItemProps } from "@/constants/types";
import { Stack } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const itemTestProps: storeItemProps = {
  name: "Metal can bottle",
  image: require("@/assets/images/can-bottle.png"),
  labels: {
    type: "Can",
    size: "500ml",
  },
  price: 2000,
  pressAction: () => {},
  addButtonAction: () => {},
};

export default function componentName() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" translucent />
      <ScrollView style={styles.scrollViewStyles}>
        <StoreItemComponent {...itemTestProps} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    width: width,
    paddingTop: 75,
  },
  scrollViewStyles: {
    width: width,
    paddingHorizontal: 16,
  },
});
