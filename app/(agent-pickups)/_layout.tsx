import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function componentName() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="immediate" />
        <Stack.Screen name="scheduled" />
      </Stack>
    </>
  );
}
