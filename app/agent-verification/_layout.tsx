import React from "react";
import { Stack } from "expo-router";

export default function componentName() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="identification" />
      <Stack.Screen name="momo-payment" />
      <Stack.Screen name="pincode-verification" />
      <Stack.Screen name="photo-verification" />
    </Stack>
  );
}
