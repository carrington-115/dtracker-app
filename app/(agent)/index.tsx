import {
  ActiveButton,
  AddLocationElement,
  GoalCard,
  PickupButton,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { pickupButtonProps } from "@/constants/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  const [cardCalendar, setCardCalendar] = useState<{
    month: string;
    year: string;
    cardState: "inactive" | "active" | "goal";
  }>({
    month: "",
    year: "",
    cardState: "inactive",
  });

  const pickupOptions: pickupButtonProps[] = [
    {
      icon: (
        <MaterialIcons
          name="access-time"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Immediate pickups",
      onPress: () => router.navigate("/(agent-pickups)/immediate"),
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="calendar-range-outline"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Scheduled pickups",
      onPress: () => router.navigate("/(agent-pickups)/scheduled"),
    },
    {
      icon: (
        <FontAwesome
          name="recycle"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Request exchange",
      onPress: () => router.navigate("/exchange"),
    },
  ];

  useEffect(() => {
    let date = new Date();
    setCardCalendar((prev) => {
      return {
        ...prev,
        year: date.getFullYear().toString(),
        month: date.toLocaleDateString("default", { month: "short" }),
      };
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceBright}
      />
      <Header />
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            width: "100%",
            paddingHorizontal: 16,
            marginTop: 20,
          }}
        >
          <Text style={{ ...textFontStyles.headlineMediumMedium }}>
            Pickup options
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {pickupOptions.map((option, index) => (
              <PickupButton key={index} {...option} />
            ))}
          </View>

          <GoalCard
            month={cardCalendar.month}
            year={cardCalendar.year}
            type={cardCalendar.cardState}
            inactiveCardAction={() => router.navigate("/earnings/set-goal")}
          />
        </View>
        {cardCalendar.cardState !== "inactive" && (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <ActiveButton
              icon={
                <>
                  <MaterialIcons
                    name="add"
                    color={appColors.onSecondaryContainerColor}
                    size={24}
                  />
                </>
              }
              name="New goal"
              focusedColor=""
              onPressAction={() => router.push("./earnings/set-goal")}
              bgColor={appColors.secondaryContainerColor}
              color={appColors.onSecondaryContainerColor}
            />
            <ActiveButton
              icon={
                <>
                  <MaterialIcons
                    name="description"
                    color={appColors.secondaryColor}
                    size={24}
                  />
                </>
              }
              name="All goals"
              focusedColor={appColors.secondaryContainerColor}
              onPressAction={() => router.push("./earnings/monthly-earnings")}
              bgColor={"transparent"}
              color={appColors.secondaryColor}
              outlined
            />
          </View>
        )}
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <AddLocationElement
            action={() => router.navigate("/navigation/add-location")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = () => {
  const router = useRouter();
  return (
    <>
      <Appbar.Header
        statusBarHeight={0}
        style={{
          backgroundColor: appColors.surfaceBright,
        }}
      >
        <Appbar.Content
          title="DTRACKER"
          titleStyle={{ ...textFontStyles.headlineSmallBold }}
        />
        <Appbar.Action
          icon={"recycle"}
          onPress={() => router.navigate("/exchange")}
        />
        <Appbar.Action
          icon="bell-outline"
          onPress={() =>
            router.navigate("/(indirect)/marketplace/agent-notification")
          }
        />
        <Appbar.Action
          icon="cog-outline"
          onPress={() => router.navigate("/settings")}
        />
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
