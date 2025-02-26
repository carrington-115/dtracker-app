import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function componentName() {
  return (
    <Tabs>
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
    </Tabs>
  );
}
