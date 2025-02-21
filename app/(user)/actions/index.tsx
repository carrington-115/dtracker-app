import { TabsButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { tabsButtonProps } from "@/constants/types";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

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
      link: "/(user)/actions/pending",
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
        barStyle={"dark-content"}
        backgroundColor={"rgb(242, 242, 242)"}
      />
      <Appbar.Header
        statusBarHeight={0}
        style={{
          backgroundColor: "rgb(242, 242, 242)",
        }}
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
        <Text>Hello actions</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: appColors.surfaceBright,
  },
  topBarStyles: {
    width: width,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(242, 242, 242)",
    borderBottomWidth: 0.2,
    borderColor: appColors.outlineVariant,
  },
});

export { styles };
