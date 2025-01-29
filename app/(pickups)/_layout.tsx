import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function componentName() {
  return (
    <>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="immediate"
              options={{
                title: "Immediate pickup",
              }}
            />
            <Stack.Screen name="reserve" />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
}
