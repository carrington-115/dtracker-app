import appColors from "@/constants/colors";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, Dimensions, StatusBar } from "react-native";
import { Appbar } from "react-native-paper";

const { width } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={appColors.surfaceContainerLow}
      />
      <Appbar.Header
        style={{ width: width, backgroundColor: appColors.surfaceContainerLow }}
        statusBarHeight={0}
      >
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Chat" />
      </Appbar.Header>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
}
