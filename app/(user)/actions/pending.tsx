import { tabsButtonProps } from "@/constants/types";
import React, { useEffect, useState } from "react";
import { Text, ScrollView, StatusBar, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Header, styles } from ".";
import { textFontStyles } from "@/constants/fonts";
import { ActivityIndicator } from "react-native-paper";
import appColors from "@/constants/colors";

const tabButtonLinks: tabsButtonProps[] = [
  {
    link: "/actions",
    icon: <Entypo name="cycle" size={24} color="black" />,
    name: "Active",
  },
  {
    link: "/actions/pending",
    icon: (
      <MaterialCommunityIcons name="progress-upload" size={24} color="black" />
    ),
    name: "Pending",
  },
];

export default function componentName() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) {
    return (
      <SafeAreaView style={[styles.container]}>
        <Header tabButtonLinks={tabButtonLinks} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator
            size="large"
            color={appColors.primaryColor}
            animating={true}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"rgb(242, 242, 242)"}
      />
      <Header tabButtonLinks={tabButtonLinks} />
      <ScrollView>
        <Text>Hello pending</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
