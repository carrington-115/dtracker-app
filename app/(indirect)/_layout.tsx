import { Stack } from "expo-router";
import React from "react";

export default function componentName() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="marketplace" options={{ headerShown: false }} />
    </Stack>
  );
}
