import { Stack, Tabs } from "expo-router";
import React from "react";

export default function componentName() {
  return (
    <>
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="pending" />
        <Stack.Screen name="[storeId]" />
        <Stack.Screen name="[pickupId]" />
      </Stack>
    </>
  );
}
