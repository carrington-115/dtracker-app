import { ActionsElement, TabsButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { tabsButtonProps } from "@/constants/types";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { usePathname, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const tabButtonLinks: tabsButtonProps[] = [
  {
    link: "/actions",
    icon: <Entypo name="cycle" size={24} color="black" />,
    name: "Active",
  },
  {
    link: "/(user)/actions/pending",
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
        barStyle={"dark-content"}
        backgroundColor={"rgb(242, 242, 242)"}
      />
      <Header tabButtonLinks={tabButtonLinks} />

      <ScrollView>
        <ActionsElement
          userProfileImage={require("@/assets/images/user-image.png")}
          actionType="pickup"
          size={2}
          units="bags"
          price={500}
          userType="user"
          status="pending"
          pickupType="scheduled"
          date="01 March"
          time="10:00"
        />
        <ActionsElement
          userProfileImage={require("@/assets/images/user-image.png")}
          actionType="pickup"
          size={2}
          units="bags"
          price={500}
          userType="user"
          status="active"
          pickupType="scheduled"
          username="John Doe"
          date="01 March"
          time="10:00"
        />
        <ActionsElement
          itemName="Plastic Bottles"
          userProfileImage={require("@/assets/images/user-image.png")}
          status="available"
          paymentMethod="fixed"
          price={500}
          size={2}
          units="bags"
          actionType="marketplace"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = ({ tabButtonLinks }: { tabButtonLinks: tabsButtonProps[] }) => {
  const router = useRouter();

  return (
    <>
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
    </>
  );
};

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

export { styles, Header };
