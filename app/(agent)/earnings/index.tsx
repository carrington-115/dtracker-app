import {
  ActiveButton,
  EarningsComponent,
  GoalCard,
  GoalListComponent,
  GoalPageCard,
  OutlineButton,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [cardCalendar, setCardCalendar] = useState<{
    month: string;
    year: string;
  }>({
    month: "",
    year: "",
  });

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
        barStyle={"dark-content"}
        backgroundColor={appColors.surfaceContainerLow}
      />
      <Header />
      <ScrollView style={{}}>
        <View style={{ width: "100%", paddingHorizontal: 16 }}>
          <InitialPageContent cardCalendar={cardCalendar} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const EarningsPageContent = ({
  month,
  year,
  currentGoalAmount,
}: {
  month: string;
  year: string;
  currentGoalAmount: number;
}) => {
  return (
    <>
      <View style={{ flexDirection: "column", gap: 5 }}>
        <EarningsComponent
          month={month}
          year={year}
          amount={currentGoalAmount}
        />
      </View>
    </>
  );
};

const InitialPageContent = ({
  cardCalendar,
}: {
  cardCalendar: { month: string; year: string };
}) => {
  const router = useRouter();

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            marginTop: 40,
          }}
        >
          <Text style={{ ...textFontStyles.titleLargeMedium }}>
            Start Earning
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ActiveButton
              name="Pickup options"
              icon={
                <>
                  <MaterialIcons
                    name="description"
                    size={24}
                    color={appColors.onPrimaryContainerColor}
                  />
                </>
              }
              onPressAction={() =>
                router.navigate("/(agent-pickups)/immediate")
              }
              bgColor="transparent"
              color={appColors.onPrimaryContainerColor}
              outlined
              focusedColor={appColors.primaryContainerColor}
            />
            <ActiveButton
              name="Marketplace"
              icon={
                <>
                  <MaterialCommunityIcons
                    name="recycle"
                    size={24}
                    color={appColors.onPrimaryContainerColor}
                  />
                </>
              }
              onPressAction={() => router.push("/(agent)/store")}
              bgColor={appColors.primaryContainerColor}
              color={appColors.onPrimaryContainerColor}
              focusedColor={appColors.primaryContainerColor}
            />
          </View>
        </View>
      </View>
      <View style={{ width: "100%", marginTop: 30 }}>
        <GoalCard
          type="inactive"
          month={cardCalendar.month}
          year={cardCalendar.year}
          inactiveCardAction={() => router.push("/(agent)/earnings/set-goal")}
        />
      </View>
    </>
  );
};

const FinalPageContent = () => {
  return (
    <>
      <View style={{ paddingHorizontal: 16, width: "100%" }}>
        <View
          style={{
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EarningsPageContent
            month="June"
            year="2021"
            currentGoalAmount={30000}
          />
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <GoalPageCard
            goalAmount={30000}
            goalCompletedPercentage={50}
            goalCompletedAmount={15000}
            goalDeadline={"12/03/2025"}
          />
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <OutlineButton link={"/(agent)/earnings/monthly-earnings"} />
        </View>
      </View>
      <View style={{ width: "100%", marginTop: 28 }}>
        <GoalListComponent
          type="goals"
          goalList={[
            {
              goalAmount: 30000,
              goalEnd: "12/03",
              goalStart: "12/02",
              pickup: false,
              onPressAction: () => {},
            },
            {
              goalAmount: 2000,
              pickup: true,
              trashSize: 5,
              trashUnit: "Bags",
              trashType: "Plastics",
              onPressAction: () => {},
            },
          ]}
        />
      </View>
    </>
  );
};

const Header = () => {
  const router = useRouter();
  return (
    <>
      <Appbar.Header
        style={{
          backgroundColor: appColors.surfaceContainerLow,
          borderBottomWidth: 0.5,
          borderBottomColor: appColors.outline,
        }}
        statusBarHeight={0}
      >
        <Appbar.Content
          title="Earnings"
          titleStyle={{ ...textFontStyles.titleLargeMedium }}
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
