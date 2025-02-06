import React from "react";
import { Stack } from "expo-router";
import appColors from "@/constants/colors";

export default function componentName() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: appColors.surfaceBright,
          },
        }}
      >
        <Stack.Screen
          name="edit-username"
          options={{
            title: "Change username",
          }}
        />
        <Stack.Screen
          name="edit-email"
          options={{
            title: "Change email",
          }}
        />
        <Stack.Screen
          name="edit-phone"
          options={{ title: "Change phone number" }}
        />
      </Stack>
    </>
  );
}
