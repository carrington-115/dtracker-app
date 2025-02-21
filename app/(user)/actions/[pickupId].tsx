import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const { actionId } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Action" />
        <Appbar.Action icon="edit" onPress={() => {}} />
        <Appbar.Action icon="delete" onPress={() => {}} />
      </Appbar.Header>
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
});
