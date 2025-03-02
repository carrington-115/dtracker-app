import { TabsButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { tabsButtonProps } from "@/constants/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Stack, usePathname, useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, StatusBar } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [titleName, setTitleName] = useState<string>("");

  const router = useRouter();
  const segments = useSegments();
  const pathname = usePathname();

  useEffect(() => {
    if (segments[1] === "immediate") {
      setTitleName("Immediate");
    } else if (segments[1] === "scheduled") {
      setTitleName("Scheduled");
    }
  }, [segments]);

  const headerContent: tabsButtonProps[] = [
    {
      link: "/immediate",
      icon: (
        <>
          <MaterialIcons
            name="timelapse"
            size={24}
            color={appColors.onPrimaryContainerColor}
          />
        </>
      ),
      name: "Immediate",
    },
    {
      link: "/scheduled",
      icon: (
        <>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={24}
            color={appColors.onPrimaryContainerColor}
          />
        </>
      ),
      name: "Scheduled",
    },
  ];

  const navigateBack = () => {
    if (pathname === "/immediate" || pathname === "/scheduled") {
      router.navigate("/(agent)");
    } else {
      router.back();
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={
          pathname === "/immediate" || pathname === "/scheduled"
            ? appColors.surfaceContainerLow
            : "transparent"
        }
      />
      <Appbar.Header
        statusBarHeight={0}
        style={{
          backgroundColor:
            pathname === "/immediate" || pathname === "/scheduled"
              ? appColors.surfaceContainerLow
              : "transparent",
        }}
      >
        <Appbar.BackAction onPress={navigateBack} />
        {(pathname === "/immediate" || pathname === "/scheduled") && (
          <Appbar.Content
            title={titleName}
            titleStyle={{ ...textFontStyles.titleLargeMedium }}
          />
        )}
      </Appbar.Header>
      {(pathname == "/immediate" || pathname === "/scheduled") && (
        <TabsHeader headerContent={headerContent} />
      )}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="immediate"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="scheduled"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="[pickupId]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}

const TabsHeader = ({
  headerContent,
}: {
  headerContent: tabsButtonProps[];
}) => {
  return (
    <>
      <View style={styles.innerTabHeaderStyles}>
        {headerContent.map((content, index) => (
          <TabsButton {...content} key={index} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
  innerTabHeaderStyles: {
    flexDirection: "row",
    backgroundColor: appColors.surfaceContainerLow,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: appColors.outlineVariant,
  },
});
