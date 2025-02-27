import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { goalCardProps } from "@/constants/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActiveButton } from "..";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function componentName({
  month,
  year,
  monthlyEarning,
  currentGoalTotal,
  goalAmountCompleted,
  goalDeadline,
  type,
  link,
}: goalCardProps) {
  if (type === "active") {
    return (
      <>
        <View style={styles.cardStyles}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "rgba(68, 126, 126, 0.30)",
            }}
          >
            <View style={{ flexDirection: "column", gap: 6 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Ionicons
                  name="stats-chart"
                  size={24}
                  color={appColors.secondaryColor}
                />
                <Text
                  style={{
                    ...textFontStyles.titleMediumMedium,
                    color: appColors.onSecondaryContainerColor,
                  }}
                >
                  Earnings
                </Text>
              </View>
              <Text
                style={{
                  ...textFontStyles.titleLargeMedium,
                  color: appColors.onSecondaryContainerColor,
                }}
              >
                {month} {year}
              </Text>
            </View>
            <CurrencyElement amount={monthlyEarning!} />
          </View>
          <View
            style={{
              flexDirection: "column",
              gap: 5,
              width: "100%",
              marginVertical: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Image
                  source={require("@/assets/icons/goal-icon.svg")}
                  style={{ width: 24, height: 24 }}
                />
                <Text style={{ ...textFontStyles.titleSmallRegular }}>
                  Current goals
                </Text>
              </View>
              <CurrencyElement amount={currentGoalTotal!} />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <MaterialCommunityIcons
                  name="progress-upload"
                  size={24}
                  color={appColors.onSecondaryContainerColor}
                />
                <Text style={{ ...textFontStyles.titleSmallRegular }}>
                  Status
                </Text>
              </View>
              <CurrencyElement amount={goalAmountCompleted!} />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="calendar-clock-outline"
                size={24}
                color={appColors.onSecondaryContainerColor}
              />
              <Text
                style={{
                  ...textFontStyles.bodyMediumBold,
                  color: appColors.onSecondaryContainerColor,
                }}
              >
                {goalDeadline!}
              </Text>
            </View>
            <ActiveButton
              onPressAction={() => {}}
              name="View goal"
              icon={
                <>
                  <FontAwesome
                    name="bullseye"
                    size={24}
                    color={appColors.onSecondaryColor}
                  />
                </>
              }
              bgColor={appColors.secondaryColor}
              color={appColors.onSecondaryColor}
              focusedColor=""
            />
          </View>
        </View>
      </>
    );
  } else if (type === "inactive") {
    return (
      <>
        <View style={[styles.cardStyles, { gap: 12 }]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "rgba(68, 126, 126, 0.30)",
            }}
          >
            <View style={{ flexDirection: "column", gap: 6 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Ionicons
                  name="stats-chart"
                  size={24}
                  color={appColors.secondaryColor}
                />
                <Text
                  style={{
                    ...textFontStyles.titleMediumMedium,
                    color: appColors.onSecondaryContainerColor,
                  }}
                >
                  Earnings
                </Text>
              </View>
              <Text
                style={{
                  ...textFontStyles.titleLargeMedium,
                  color: appColors.onSecondaryContainerColor,
                }}
              >
                {month} {year}
              </Text>
            </View>
          </View>
          <Text
            style={{
              ...textFontStyles.bodyLargeRegular,
              color: appColors.onSecondaryContainerColor,
            }}
          >
            Start by setting a goal and build the foundation for endless
            earnings.
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <ActiveButton
              onPressAction={() => {}}
              name="Set your first goal"
              icon={
                <>
                  <FontAwesome
                    name="bullseye"
                    size={24}
                    color={appColors.onSecondaryColor}
                  />
                </>
              }
              bgColor={appColors.secondaryColor}
              color={appColors.onSecondaryColor}
              focusedColor=""
            />
          </View>
        </View>
      </>
    );
  }
}

const CurrencyElement = ({ amount }: { amount: number | string }) => {
  return (
    <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
      <Text
        style={{
          ...textFontStyles.titleMediumRegular,
          color: appColors.onSecondaryContainerColor,
        }}
      >
        XAF
      </Text>
      <Text
        style={{
          ...textFontStyles.headlineMediumMedium,
          color: appColors.onSecondaryContainerColor,
        }}
      >
        {amount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyles: {
    width: "100%",
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderRadius: 12,
    backgroundColor: appColors.secondaryContainerColor,
    flexDirection: "column",
  },
});
