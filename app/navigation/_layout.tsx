import { IconButton, NavigationHeader } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Stack } from "expo-router";
import React from "react";
import { View, Text, Dimensions, StyleSheet, StatusBar } from "react-native";

const { width } = Dimensions.get("window");

export default function componentName() {
  return (
    <View style={styles.container}>
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={"rgba(248, 248, 248, 1)"}
        />
        <NavigationHeader name="John Doe" ETA="10 mins" distance="2.5 km" />
      </>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
});
