import { Stack } from "expo-router";

export default function componentName() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="set-goal" options={{}} />
    </Stack>
  );
}
