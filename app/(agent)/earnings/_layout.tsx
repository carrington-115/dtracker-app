import appColors from "@/constants/colors";
import { Stack, Tabs, usePathname, useSegments } from "expo-router";

export default function componentName() {
  const segments = useSegments();
  const pathname = usePathname();

  return (
    <>
      <Tabs.Screen
        options={{
          tabBarStyle: {
            height:
              (segments.length > 2 &&
                (segments[2] === "set-goal" || segments[2] === "[goalId]") &&
                pathname !== "/earnings/undefined") ||
              pathname === "/earnings/monthly-earnings"
                ? 0
                : 60,
            backgroundColor: appColors.surfaceContainerLow,
            borderTopWidth: 1,
            borderTopColor: appColors.onSurfaceVariant,
          },
        }}
      />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{}} />
        <Stack.Screen name="set-goal" options={{}} />
        <Stack.Screen name="[goalId]" options={{}} />
        <Stack.Screen name="monthly-earnings" options={{}} />
      </Stack>
    </>
  );
}
