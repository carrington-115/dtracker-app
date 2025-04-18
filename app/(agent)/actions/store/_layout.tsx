import { Stack } from "expo-router";
import React from "react";

export default function componentName() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[storeId]" />
      <Stack.Screen name="edit-store-item" />
    </Stack>
  );
}
