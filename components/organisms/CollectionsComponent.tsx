import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { textFontStyles } from "@/constants/fonts";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AmountElement } from "..";
import appColors from "@/constants/colors";
import { CollectionsComponentProps } from "@/constants/types";

export default function CollectionsComponent({
  image,
  name,
  time,
  wasteType,
  size,
  payUnits,
  onPress,
}: CollectionsComponentProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.topElementStyles}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={image}
            style={{
              width: 48,
              height: 48,
              borderRadius: 100,
            }}
          />
          <Text style={{ ...textFontStyles.bodyLargeMedium }}>{name}</Text>
        </View>
        <Text style={{ ...textFontStyles.bodySmallMedium }}>{time}</Text>
      </View>
      <View style={styles.bottomElementStyles}>
        <View
          style={{
            flexDirection: "column",
            gap: 5,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <MaterialIcons name="recycling" size={24} color="black" />
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              {wasteType}
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <MaterialCommunityIcons name="weight" size={24} color="black" />
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              {size} kg
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
          <AmountElement
            amount={payUnits}
            currency="XAF"
            amountStyle={{ ...textFontStyles.bodyLargeRegular }}
            currentStyle={{ ...textFontStyles.bodySmallBold }}
          />
          <Text style={{ ...textFontStyles.bodySmallRegular }}>/kg</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
  },
  topElementStyles: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: appColors.outline,
    backgroundColor: appColors.surfaceContainerLow,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomElementStyles: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: appColors.surfaceContainer,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
