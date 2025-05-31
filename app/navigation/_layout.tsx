import { NavigationHeader } from "@/components";
import { Stack, usePathname } from "expo-router";
import React from "react";
import { View, Dimensions, StyleSheet, StatusBar } from "react-native";

const { width } = Dimensions.get("window");

export default function componentName() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <>
        <StatusBar barStyle="dark-content" />
        {pathname === "/" && (
          <NavigationHeader name="John Doe" ETA="10 mins" distance="2.5 km" />
        )}
      </>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="business_location"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="add-location"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="completed"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
});
