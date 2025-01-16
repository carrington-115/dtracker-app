import React from "react";
import { Stack } from "expo-router";

export default function componentName() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="register-with-phone" />
        <Stack.Screen name="register-with-email" />
        <Stack.Screen name="verify-phone" />
        <Stack.Screen name="user-category" />
      </Stack>
    </>
  );
}
