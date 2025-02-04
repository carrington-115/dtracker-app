import { Stack } from "expo-router";
import React from "react";

export default function componentName() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="immediate"
          options={{
            title: "Immediate pickup",
          }}
        />
        <Stack.Screen name="reserve" />
        <Stack.Screen name="immediate-details" />
        <Stack.Screen name="reserve-details" />
      </Stack>
    </>
  );
}
