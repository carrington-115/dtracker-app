import { Stack } from "expo-router";
import React from "react";

export default function componentName() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="add-item" options={{}} />
      <Stack.Screen name="view-item" options={{}} />
      <Stack.Screen name="agent-notification" options={{}} />
    </Stack>
  );
}
