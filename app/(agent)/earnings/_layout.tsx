import { Stack, Tabs, useSegments } from "expo-router";

export default function componentName() {
  const segments = useSegments();

  return (
    <>
      <Tabs.Screen
        options={{
          tabBarStyle: {
            height:
              segments.length > 2 &&
              (segments[2] === "set-goal" || segments[2] === "[goalId]")
                ? 0
                : 60,
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
      </Stack>
    </>
  );
}
