import { Stack, Tabs, usePathname, useSegments } from "expo-router";

export default function componentName() {
  const segments = useSegments();
  const pathname = usePathname();

  console.log(segments, pathname);
  return (
    <>
      <Tabs.Screen
        options={{
          tabBarStyle: {
            height: segments.length > 2 && segments[2] === "set-goal" ? 0 : 60,
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
      </Stack>
    </>
  );
}
