import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function componentName() {
  return <TabRoutes />;
}

const TabRoutes = () => {
  return (
    <Tabs
      screenOptions={{
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
        name="earnings"
        options={{
          title: "Earnings",
          tabBarLabel: ({ focused }) => (
            <>
              <Text
                style={
                  focused
                    ? { ...textFontStyles.bodySmallBold }
                    : { ...textFontStyles.bodySmallRegular }
                }
              >
                Earnings
              </Text>
            </>
          ),
          tabBarIcon: ({ color, focused }) => (
            <>
              {
                <Ionicons
                  name={focused ? "stats-chart-sharp" : "stats-chart-outline"}
                  size={24}
                  color={color}
                />
              }
            </>
          ),
        }}
      />
    </Tabs>
  );
};
