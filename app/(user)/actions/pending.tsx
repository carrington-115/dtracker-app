import { tabsButtonProps } from "@/constants/types";
import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import appColors from "@/constants/colors";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { TabsButton } from "@/components";

const { width } = Dimensions.get("window");

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
      <Appbar.Header
        statusBarHeight={10}
        style={{ backgroundColor: "#F2F2F266" }}
      >
        <Appbar.Content title="Actions" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    width: width,
  },
  topBarStyles: {
    width: width,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});
