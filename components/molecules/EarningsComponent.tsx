import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "..";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function componentName({
  month,
  year,
  amount,
}: {
  month: string;
  year: string;
  amount: number;
}) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        <Text
          style={{
            ...textFontStyles.bodySmallMedium,
            color: appColors.onSurfaceVariant,
          }}
        >
          {month}
        </Text>
        <View
          style={{
            width: 5,
            height: 5,
            backgroundColor: appColors.onSurfaceVariant,
            borderRadius: 20,
          }}
        />
        <Text
          style={{
            ...textFontStyles.bodySmallMedium,
            color: appColors.onSurfaceVariant,
          }}
        >
          {year}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Text style={{ ...textFontStyles.titleMediumRegular }}>XAF</Text>
          <Text style={{ ...textFontStyles.headlineMediumMedium }}>
            {amount}
          </Text>
        </View>
        <IconButton
          icon={
            <>
              <MaterialIcons
                name="arrow-forward"
                size={24}
                color={appColors.onPrimaryContainerColor}
              />
            </>
          }
          bgColor={"rgba(215, 236, 227, 0.50)"}
          pressedColor={"transparent"}
          btnAction={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    alignItems: "center",
  },
});
