import appColors from "@/constants/colors";
import { BarChartElementProps } from "@/constants/types";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import BarChartElement from "../atoms/BarChartElement";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { textFontStyles } from "@/constants/fonts";

export default function componentName({
  bars,
  date,
  leftAction,
  rightAction,
}: {
  bars: BarChartElementProps[];
  date: {
    month: string;
    initialDate: number;
    finalDate: number;
  };
  leftAction: () => void;
  rightAction: () => void;
}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ChartActionBtn icon={"arrow-back-ios"} action={leftAction} />
        <>
          <Text
            style={{
              ...textFontStyles.titleMediumMedium,
              color: appColors.onSurface,
            }}
          >
            {date.month} {date.initialDate} - {date.finalDate}
          </Text>
        </>
        <ChartActionBtn icon={"arrow-forward-ios"} action={rightAction} />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-evenly",
          height: 241,
        }}
      >
        {bars.map((bar, index) => (
          <BarChartElement key={index} {...bar} />
        ))}
      </View>
    </View>
  );
}

const ChartActionBtn = ({
  icon,
  action,
}: {
  icon: any;
  action: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <MaterialIcons name={icon} size={24} color={appColors.onSurfaceVariant} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 24,
    flexDirection: "column",
    gap: 40,
    borderRadius: 20,
    backgroundColor: appColors.surfaceContainerLow,
  },
});
