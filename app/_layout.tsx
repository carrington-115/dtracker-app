import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, null]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
}
