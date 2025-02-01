import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import appColors from "@/constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function componentName() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceBright}
        translucent
      />
      <ScrollView>
        <Text>Hello</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
