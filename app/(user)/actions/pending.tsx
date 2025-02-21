import { tabsButtonProps } from "@/constants/types";
import React from "react";
import { View, Text, Dimensions, ScrollView, StatusBar } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import appColors from "@/constants/colors";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { TabsButton } from "@/components";
import { styles } from ".";
import { textFontStyles } from "@/constants/fonts";

export default function componentName() {
  const router = useRouter();

  const tabButtonLinks: tabsButtonProps[] = [
    {
      link: "/actions",
      icon: <Entypo name="cycle" size={24} color="black" />,
      name: "Active",
    },
    {
      link: "/actions/pending",
      icon: (
        <MaterialCommunityIcons
          name="progress-upload"
          size={24}
          color="black"
        />
      ),
      name: "Pending",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"rgb(242, 242, 242)"}
      />
      <Appbar.Header
        statusBarHeight={0}
        style={{ backgroundColor: "rgb(242, 242, 242)" }}
      >
        <Appbar.Content
          title="Actions"
          titleStyle={{ ...textFontStyles.titleLargeMedium }}
        />
        <Appbar.Action
          icon={"store-plus-outline"}
          onPress={() => router.navigate("/(indirect)/marketplace/add-item")}
        />
        <Appbar.Action
          icon={"cog-outline"}
          onPress={() => router.navigate("/settings")}
        />
      </Appbar.Header>
      <View style={styles.topBarStyles}>
        {tabButtonLinks.map((item, index) => (
          <TabsButton {...item} key={index} />
        ))}
      </View>
      <ScrollView>
        <Text>Hello pending</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
