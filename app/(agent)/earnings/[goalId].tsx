import { AmountElement, AmountLevelLoader } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
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

export default function componentName() {
  // goal id
  const { goalId } = useLocalSearchParams();

  // goal details
  const initialGoalAmount: number = 35000;
  const [completedPercentage, setCompletedPercentage] = useState<number>(0);
  const [goalDates, setGoalDates] = useState<{
    startDate: Date;
    endDate: Date;
  }>({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [goalStatus, setGoalStatus] = useState<"completed" | "In progress">(
    "In progress"
  );

  // data loading and fetching
  const [loading, setLoading] = useState<boolean>(true);

  // back
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={appColors.surfaceBright}
        />
        <SafeAreaView
          style={[
            styles.container,
            {
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <ActivityIndicator size={"large"} color={appColors.primaryColor} />
        </SafeAreaView>
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={appColors.surfaceBright}
        />
        <Appbar.Header
          style={{ backgroundColor: appColors.surfaceBright }}
          statusBarHeight={0}
        >
          <Appbar.BackAction onPress={() => router.back()} />
          <Appbar.Content title="Goal" />
        </Appbar.Header>
      </>
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            paddingHorizontal: 16,
            width: "100%",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              gap: 10,
              borderBottomWidth: 0.5,
              borderBottomColor: appColors.outlineVariant,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Text style={{ ...textFontStyles.titleMediumRegular }}>XAF</Text>
              <Text style={{ ...textFontStyles.headlineMediumMedium }}>
                {initialGoalAmount}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <MaterialIcons name="timelapse" size={24} color="black" />
              <Text>
                {goalDates.startDate.toLocaleDateString("default", {
                  month: "short",
                  day: "numeric",
                })}{" "}
                -{" "}
                {goalDates.endDate.toLocaleDateString("default", {
                  month: "short",
                  day: "numeric",
                })}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              gap: 2,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderBottomWidth: 0.5,
              borderBottomColor: appColors.outlineVariant,
              marginTop: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                size={24}
                color={appColors.onSurface}
              />
              <Text style={{ ...textFontStyles.bodyMediumRegular }}>
                {goalDates.startDate.toLocaleDateString("default", {
                  month: "short",
                  day: "numeric",
                })}{" "}
                -{" "}
                {goalDates.endDate.toLocaleDateString("default", {
                  month: "short",
                  day: "numeric",
                })}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <MaterialIcons name="hourglass-top" size={24} color="black" />
              <Text
                style={{
                  ...textFontStyles.bodyMediumRegular,
                  color: appColors.onSurface,
                }}
              >
                {goalStatus}
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              gap: 10,
              marginTop: 10,
              borderBottomWidth: 0.5,
              borderBottomColor: appColors.outlineVariant,
            }}
          >
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              Goal progress
            </Text>
            <AmountLevelLoader innerWidth={10} />
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AmountElement
                amount={0}
                currency="XAF"
                amountStyle={{ ...textFontStyles.titleLargeMedium }}
                currentStyle={{ ...textFontStyles.bodySmallRegular }}
              />
              <AmountElement
                amount={initialGoalAmount}
                currency="XAF"
                amountStyle={{ ...textFontStyles.titleLargeMedium }}
                currentStyle={{ ...textFontStyles.bodySmallRegular }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
