import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
      </Stack>
    </>
  );
}
