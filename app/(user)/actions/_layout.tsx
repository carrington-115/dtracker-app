import { Stack, Tabs, usePathname, useSegments } from "expo-router";
import React from "react";

export default function componentName() {
  const segments = useSegments();
  const pathname = usePathname();

  console.log("segments", segments);
  console.log("pathname", pathname);

  return (
    <>
      <Tabs.Screen
        options={{
          title: "Greenstore",
          headerShadowVisible: false,
          headerTransparent: true,

          tabBarStyle: {
            display:
              ((segments[segments.length - 1] === "[pickupId]" ||
                segments[segments.length - 1] === "[storeId]") &&
                pathname !== "/actions/undefined") ||
              pathname === "/actions/pickup/edit-pickup-item" ||
              pathname === "/actions/store/edit-store-item"
                ? "none"
                : "flex",
            height:
              (segments[segments.length - 1] === "[pickupId]" ||
                segments[segments.length - 1] === "[storeId]") &&
              pathname !== "/actions/undefined"
                ? 0
                : 62,
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="pending" />
        <Stack.Screen name="store" />
        <Stack.Screen name="pickup" />
      </Stack>
    </>
  );
}
