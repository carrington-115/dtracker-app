import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  return (
    <SafeAreaView>
      <Text>Hello world</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
});
