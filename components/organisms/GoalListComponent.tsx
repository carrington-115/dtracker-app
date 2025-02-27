import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { goalElementProps } from "@/constants/types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GoalElement from "../molecules/GoalElement";

export default function componentName({
  goalList,
  type,
}: {
  goalList: goalElementProps[];
  type: "goals" | "transactions";
}) {
  if (type === "goals") {
    return (
      <View style={styles.container}>
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <Text
            style={{
              ...textFontStyles.titleLargeMedium,
              color: appColors.onSurface,
            }}
          >
            Past goals
          </Text>
        </View>
        <View style={styles.listStyles}>
          {goalList.map((goal, index) => (
            <GoalElement {...goal} key={index} />
          ))}
        </View>
      </View>
    );
  } else if (type === "transactions") {
    return <></>;
  }

  return;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    gap: 20,
  },
  listStyles: {
    width: "100%",
    flexDirection: "column",
  },
});
