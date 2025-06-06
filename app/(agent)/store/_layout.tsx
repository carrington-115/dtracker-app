import appColors from "@/constants/colors";
import { Stack, Tabs, usePathname, useSegments } from "expo-router";
import React from "react";

export default function componentName() {
  const segments = useSegments();
  const pathname = usePathname();
  return (
    <>
      <Tabs.Screen
        options={{
          title: "Greenstore",
          headerShadowVisible: false,
          headerTransparent: true,
          tabBarStyle: {
            display:
              segments[segments.length - 1] === "[id]" &&
              pathname !== "/store/undefined"
                ? "none"
                : "flex",
            height:
              segments[segments.length - 1] === "[id]" &&
              pathname !== "/store/undefined"
                ? 0
                : 62,
            backgroundColor: appColors.surfaceContainerLow,
            borderTopWidth: 1,
            borderTopColor: appColors.onSurfaceVariant,
          },
          headerShown: false,
        }}
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </>
  );
}
