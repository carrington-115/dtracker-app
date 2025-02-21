import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function componentName() {
  const { storeId } = useLocalSearchParams();
  return (
    <View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
