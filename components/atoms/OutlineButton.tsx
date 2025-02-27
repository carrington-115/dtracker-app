import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function componentName({ link }: { link: any }) {
  return (
    <Link style={styles.container} href={link}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <MaterialIcons name="bar-chart" size={24} color="black" />
          <Text style={{ ...textFontStyles.titleMediumMedium }}>
            Monthly Earnings
          </Text>
        </View>
        <MaterialIcons
          name="arrow-forward"
          size={24}
          color={appColors.onSurface}
        />
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: appColors.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
  },
});
