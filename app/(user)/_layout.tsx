import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import appColors from "@/constants/colors";

export default function componentName() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: appColors.onSurface,
          tabBarInactiveTintColor: appColors.onSurface,
          tabBarStyle: {
            backgroundColor: "#F8F8F8",
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
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
            tabBarIcon: ({ color, focused }) => (
              <>
                {focused ? (
                  <MaterialIcons name="notifications" size={24} color={color} />
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
    </>
  );
}
