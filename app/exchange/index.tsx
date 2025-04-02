import appColors from "@/constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={appColors.surfaceBright}
        />
        <Appbar.Header>
          <Appbar.BackAction onPress={() => router.back()} />
        </Appbar.Header>
      </>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: appColors.surfaceBright,
  },
});
