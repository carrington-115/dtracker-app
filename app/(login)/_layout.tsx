import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function componentName() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login-with-email" options={{}} />
    </Stack>
  );
}
