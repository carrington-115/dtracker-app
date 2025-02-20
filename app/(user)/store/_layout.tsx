import { IconButton } from "@/components";
import appColors from "@/constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Stack, Tabs, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function componentName() {
  const router = useRouter();
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
