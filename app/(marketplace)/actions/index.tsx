import { ActionsElement, ActiveButton, TabsButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { actionsElementProps, tabsButtonProps } from "@/constants/types";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
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
import { NoElementOnPage } from "@/components/organisms/NoElementOnPage";

const { width, height } = Dimensions.get("window");

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

interface ActionData {
  userProfileImage: any;
  actionType: "pickup" | "marketplace";
  size: number;
  units: string;
  price: number;
  userType: "user" | "agent";
  status: "pending" | "active" | "available";
  pickupType: "scheduled" | "immediate";
  date: string;
  time: string;
  pickupId: number;
}

export default function componentName() {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const [actions, setActions] = useState<ActionData[]>([]);

  useEffect(() => {
    setActions([]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) {
    return (
      <SafeAreaView style={[styles.container]}>
        <Header tabButtonLinks={tabButtonLinks} actions={actions} />
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

  if (actions.length === 0) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          width: width,
          height: height,
          backgroundColor: appColors.surfaceBright,
        }}
      >
        <Header tabButtonLinks={tabButtonLinks} actions={actions} />
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor={appColors.surfaceContainerLow}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            paddingHorizontal: 50,
            marginTop: height / 3,
            gap: 10,
          }}
        >
          <NoElementOnPage
            title="No Actions Yet!"
            message="You haven't created any actions yet. Start by creating a pickup or exchange request."
          />
          <ActiveButton
            name="New action"
            color={appColors.onPrimaryColor}
            bgColor={appColors.primaryColor}
            onPressAction={() => router.navigate("/(marketplace)")}
            focusedColor={appColors.onPrimaryContainerColor}
            icon={
              <MaterialCommunityIcons name="plus" size={24} color="white" />
            }
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={appColors.surfaceContainerLowest}
      />
      <Header tabButtonLinks={tabButtonLinks} actions={actions} />

      <ScrollView style={styles.scrollContainerStyles}>
        <View
          style={{
            marginTop: 20,
          }}
        >
          {actions.map((action, index) => (
            <ActionsElement
              key={index}
              userProfileImage={action.userProfileImage}
              actionType={action.actionType}
              size={action.size}
              units={action.units}
              price={action.price}
              userType={action.userType}
              status={action.status}
              pickupType={action.pickupType}
              date={action.date}
              time={action.time}
              pressAction={() =>
                router.navigate({
                  pathname: "/(user)/actions/pickup/[pickupId]",
                  params: { pickupId: action.pickupId },
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = ({
  tabButtonLinks,
  actions,
}: {
  tabButtonLinks: tabsButtonProps[];
  actions: actionsElementProps[];
}) => {
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
        {actions.length > 0 &&
          tabButtonLinks.map((item, index) => (
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
  homeTitleStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainerStyles: {
    width: "100%",
  },
});

export { styles, Header };
