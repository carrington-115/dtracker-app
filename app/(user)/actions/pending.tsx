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
import { ActionsElement } from "@/components";

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
      </ScrollView>
    </SafeAreaView>
  );
}
