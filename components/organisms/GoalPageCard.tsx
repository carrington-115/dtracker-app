import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AmountLevelLoader from "../atoms/AmountLevelLoader";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { goalPageComponentProps } from "@/constants/types";

export default function componentName({
  goalAmount,
  goalCompletedPercentage,
  goalCompletedAmount,
  goalDeadline,
}: goalPageComponentProps) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...textFontStyles.bodyMediumRegular,
            color: appColors.onSecondaryContainerColor,
          }}
        >
          Current goal
        </Text>
        <AmountComponent amount={goalAmount} />
      </View>
      <>
        <AmountLevelLoader innerWidth={goalCompletedPercentage} />
      </>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AmountComponent amount={goalCompletedAmount} />
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <MaterialCommunityIcons
            name="calendar-clock-outline"
            size={24}
            color={appColors.onSecondaryContainerColor}
          />
          <Text
            style={{
              ...textFontStyles.bodyMediumRegular,
              color: appColors.onSecondaryContainerColor,
            }}
          >
            {goalDeadline}
          </Text>
        </View>
      </View>
    </View>
  );
}

const AmountComponent = ({ amount }: { amount: number }) => {
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
  container: {
    width: "100%",
    backgroundColor: appColors.secondaryContainerColor,
    paddingHorizontal: 12,
    paddingVertical: 25,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    borderRadius: 20,
  },
});
