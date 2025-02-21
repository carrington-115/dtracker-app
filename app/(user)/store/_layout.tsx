import { IconButton } from "@/components";
import appColors from "@/constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Stack, Tabs, usePathname, useRouter, useSegments } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function componentName() {
  const router = useRouter();
  const segments = useSegments();
  const pathname = usePathname();
  console.log("Array of segments: ", segments, "Pathname: ", pathname);

  return (
    <>
      <Tabs.Screen
        options={{
          title: "Greenstore",
          headerShadowVisible: false,
          headerTransparent: true,
          headerStyle: {
            marginBottom: 0,
            paddingBottom: 0,
            borderBottomWidth: 0.5,
            height: 100,
          },
          tabBarStyle: {
            display:
              segments[segments.length - 1] === "[id]" &&
              pathname !== "/store/undefined"
                ? "none"
                : "flex",
            height:
              segments[segments.length - 1] === "[id]" &&
              pathname !== "/store/undefined"
                ? 0
                : 62,
          },
          headerShown:
            segments[segments.length - 1] === "[id]" &&
            pathname !== "/store/undefined"
              ? false
              : true,
          headerRight: () => (
            <>
              <View style={styles.headerIconStyles}>
                <IconButton
                  icon={
                    <MaterialCommunityIcons
                      name="store-plus-outline"
                      size={24}
                      color={appColors.onSurface}
                    />
                  }
                  btnAction={() =>
                    router.navigate("/(indirect)/marketplace/add-item")
                  }
                  bgColor="transparent"
                  pressedColor={appColors.surfaceContainerLow}
                />
                <IconButton
                  icon={
                    <MaterialIcons
                      name="settings"
                      size={24}
                      color={appColors.onSurface}
                    />
                  }
                  btnAction={() => router.navigate("/settings")}
                  bgColor={"transparent"}
                  pressedColor={appColors.surfaceContainerLow}
                />
              </View>
            </>
          ),
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
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  headerIconStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 16,
  },
});
