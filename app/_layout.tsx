import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import store from "@/redux/store";

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
    <Provider store={store}>
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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(register)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(login)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(user)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(agent)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(pickups)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(indirect)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="agent-verification"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
}
