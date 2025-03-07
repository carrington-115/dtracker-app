import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import React from "react";
import { View, Text } from "react-native";
import { AmountElement } from "..";

interface mapPickupElementProps {
  image: any;
  price: number;
  units: "bags" | "buckets";
  trashSize: number;
  username: string;
}

export default function componentName({
  image,
  price,
  units,
  trashSize,
  username,
}: mapPickupElementProps) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
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
        <View
          style={{
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Text
            style={{
              ...textFontStyles.titleMediumMedium,
              color: appColors.onSurface,
            }}
          >
            {username}
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="weight"
              size={24}
              color={appColors.onSurface}
            />
            <Text style={{ ...textFontStyles.bodyMediumMedium }}>
              {trashSize} {units}
            </Text>
          </View>
        </View>
      </View>
      <AmountElement
        currency="XAF"
        amount={price}
        currentStyle={textFontStyles.titleMediumMedium}
        amountStyle={textFontStyles.titleLargeBold}
      />
    </View>
  );
}
