import { TabsButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { tabsButtonProps } from "@/constants/types";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack } from "expo-router";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Appbar } from "react-native-paper";

const { width } = Dimensions.get("window");

export default function componentName() {
  const tabs: tabsButtonProps[] = [
    {
      link: "/actions",
      icon: (
        <>
          <Entypo name="cycle" size={24} color="black" />
        </>
      ),
      name: "Active",
    },
    {
      link: "/actions/pending",
      icon: (
        <>
          <MaterialCommunityIcons
            name="progress-upload"
            size={24}
            color="black"
          />
        </>
      ),
      name: "Pending",
    },
  ];

  return (
    <View style={styles.container}>
      <>
        <Header />
        <ActionsTabs tabs={tabs} />
      </>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="pending" />
      </Stack>
    </View>
  );
}

const ActionsTabs = ({ tabs }: { tabs: tabsButtonProps[] }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 16,
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: appColors.outline,
      }}
    >
      {tabs.map((tab, index) => (
        <TabsButton {...tab} key={index} />
      ))}
    </View>
  );
};

const Header = () => {
  return (
    <>
      <Appbar.Header
        style={{
          backgroundColor: appColors.surfaceContainerLow,
        }}
      >
        <Appbar.Content
          title="Actions"
          titleStyle={{ ...textFontStyles.titleLargeMedium }}
        />
        <Appbar.Action icon="store-plus-outline" onPress={() => {}} />
        <Appbar.Action icon="cog-outline" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  container: { width: width, flex: 1 },
});
