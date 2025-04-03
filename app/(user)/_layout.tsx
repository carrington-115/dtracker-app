import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function componentName() {
  return (
    <>
      <View style={styles.container}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: appColors.onSurface,
            tabBarInactiveTintColor: appColors.onSurface,
            tabBarStyle: {
              backgroundColor: appColors.surfaceContainerLow,
              borderTopWidth: 1,
              borderTopColor: appColors.onSurfaceVariant,
              height: 62,
            },
            tabBarLabelStyle: {
              ...textFontStyles.bodySmallRegular,
            },
            headerStyle: {
              height: 0,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarLabel: ({ focused }) => (
                <>
                  <Text
                    style={
                      focused
                        ? { ...textFontStyles.bodySmallBold }
                        : { ...textFontStyles.bodySmallRegular }
                    }
                  >
                    Home
                  </Text>
                </>
              ),
              tabBarIcon: ({ color, focused }) => (
                <>
                  {focused ? (
                    <MaterialIcons
                      name={focused ? "home-filled" : "home"}
                      size={24}
                      color={color}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="home-variant-outline"
                      size={24}
                      color={color}
                    />
                  )}
                </>
              ),
            }}
          />
          <Tabs.Screen
            name="store"
            options={{
              title: "Store",
              tabBarLabel: ({ focused }) => (
                <>
                  <Text
                    style={
                      focused
                        ? { ...textFontStyles.bodySmallBold }
                        : { ...textFontStyles.bodySmallRegular }
                    }
                  >
                    Store
                  </Text>
                </>
              ),
              tabBarIcon: ({ color, focused }) => (
                <>
                  {focused ? (
                    <MaterialIcons name={"store"} size={24} color={color} />
                  ) : (
                    <MaterialCommunityIcons
                      name="store-outline"
                      size={24}
                      color={color}
                    />
                  )}
                </>
              ),
            }}
          />
          <Tabs.Screen
            name="actions"
            options={{
              title: "Actions",
              tabBarLabel: ({ focused }) => (
                <>
                  <Text
                    style={
                      focused
                        ? { ...textFontStyles.bodySmallBold }
                        : { ...textFontStyles.bodySmallRegular }
                    }
                  >
                    Actions
                  </Text>
                </>
              ),
              tabBarIcon: ({ color, focused }) => (
                <>
                  {focused ? (
                    <MaterialCommunityIcons
                      name="view-grid"
                      size={24}
                      color={color}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="view-grid-outline"
                      size={24}
                      color={color}
                    />
                  )}
                </>
              ),
            }}
          />
          <Tabs.Screen
            name="notifications"
            options={{
              title: "Notifications",
              tabBarLabel: ({ focused }) => (
                <>
                  <Text
                    style={
                      focused
                        ? { ...textFontStyles.bodySmallBold }
                        : { ...textFontStyles.bodySmallRegular }
                    }
                  >
                    Notifications
                  </Text>
                </>
              ),
              tabBarIcon: ({ color, focused }) => (
                <>
                  {focused ? (
                    <MaterialIcons
                      name="notifications"
                      size={24}
                      color={color}
                    />
                  ) : (
                    <MaterialIcons
                      name="notifications-none"
                      size={24}
                      color={color}
                    />
                  )}
                </>
              ),
            }}
          />
        </Tabs>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
});
