import React from "react";
import { Stack } from "expo-router";
export default function componentName() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
        }}
      />
      <Stack.Screen
        name="account"
        options={{
          title: "Settings",
        }}
      />
      <Stack.Screen
        name="(account-details)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
