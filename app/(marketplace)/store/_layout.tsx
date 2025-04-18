import { Stack, Tabs, usePathname, useRouter, useSegments } from "expo-router";
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
              segments[segments.length - 1] === "[id]" ||
              segments[segments.length - 1] === "agent-exchange" ||
              segments[segments.length - 1] === "messages" ||
              (segments[segments.length - 1] === "collections" &&
                pathname !== "/store/undefined")
                ? "none"
                : "flex",
            height:
              segments[segments.length - 1] === "[id]" &&
              pathname !== "/store/undefined"
                ? 0
                : 62,
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
        <Stack.Screen
          name="agent-exchange"
          options={{
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="messages"
          options={{
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="collections"
          options={{
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </>
  );
}
