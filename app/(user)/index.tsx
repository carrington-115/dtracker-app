import { IconButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { IconButtonProps } from "@/constants/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function componentName() {
  const headerIconsContent: IconButtonProps[] = [
    {
      icon: (
        <>
          <MaterialIcons name="search" size={24} color={appColors.onSurface} />
        </>
      ),
      bgColor: "transparent",
      btnAction: () => {},
      pressedColor: "#D7ECE3",
    },
    {
      icon: (
        <>
          <MaterialCommunityIcons
            name="store-plus-outline"
            size={24}
            color={appColors.onSurface}
          />
        </>
      ),
      bgColor: "transparent",
      btnAction: () => {},
      pressedColor: "#D7ECE3",
    },
    {
      icon: (
        <>
          <Ionicons
            name="settings-outline"
            size={24}
            color={appColors.onSurface}
          />
        </>
      ),
      bgColor: "transparent",
      btnAction: () => {},
      pressedColor: "#D7ECE3",
    },
  ];

  return (
    <>
      <Tabs.Screen
        options={{
          headerTitle: () => (
            <>
              <Text
                style={[
                  {
                    ...textFontStyles.headlineSmallBold,
                    color: appColors.onPrimaryContainerColor,
                  },
                ]}
              >
                DTRACKER
              </Text>
            </>
          ),

          headerStyle: {
            paddingHorizontal: 16,
            borderBottomWidth: 0.5,
            borderColor: appColors.outlineVariant,
          },

          headerRight: () => (
            <>
              <View
                style={{
                  flexDirection: "row",
                  padding: 0,
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                {headerIconsContent.map((iconContent, index) => (
                  <IconButton key={index} {...iconContent} />
                ))}
              </View>
            </>
          ),
        }}
      />
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor={appColors.surfaceContainerLowest}
        />
        <View style={styles.homeTitleStyle}>
          <Text
            style={{
              ...textFontStyles.headlineSmallBold,
              color: appColors.onPrimaryContainerColor,
              textAlign: "center",
            }}
          >
            Trash Management Options
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.surfaceContainerLowest,
    flex: 1,
  },
  homeTitleStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
