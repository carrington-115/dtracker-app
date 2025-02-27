import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { goalElementProps } from "@/constants/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import React from "react";
import { View, Text, Pressable } from "react-native";

export default function componentName({
  goalStart,
  goalEnd,
  goalAmount,
  trashType,
  trashSize,
  trashUnit,
  pickup,
  onPressAction,
}: goalElementProps) {
  return (
    <Pressable
      onPress={onPressAction}
      style={({ pressed }) => [
        {
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: pressed
            ? appColors.tertiaryContainerColor
            : "transparent",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View
          style={{
            padding: 10,
            borderRadius: 100,
            backgroundColor: appColors.tertiaryContainerColor,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/icons/goal-icon.svg")}
            style={{ width: 36, height: 36 }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Text style={{ ...textFontStyles.titleSmallRegular }}>XAF</Text>
            <Text style={{ ...textFontStyles.titleLargeBold }}>
              {goalAmount}
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            {pickup ? (
              <>
                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <MaterialCommunityIcons
                    name="weight"
                    size={24}
                    color={appColors.onSurfaceVariant}
                  />
                  <Text
                    style={{
                      ...textFontStyles.bodyMediumRegular,
                      color: appColors.onSurface,
                    }}
                  >
                    {trashSize}
                    {trashUnit}
                  </Text>
                </View>
                <View
                  style={{
                    borderRadius: 5,
                    paddingHorizontal: 5,
                    paddingVertical: 2.5,
                    backgroundColor: appColors.surfaceDimColor,
                  }}
                >
                  <Text
                    style={{
                      ...textFontStyles.bodyMediumRegular,
                      color: appColors.onSurface,
                    }}
                  >
                    {trashType}
                  </Text>
                </View>
              </>
            ) : (
              <>
                <Text style={{ ...textFontStyles.bodyMediumRegular }}>
                  {goalStart}
                </Text>
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: appColors.onSurfaceVariant,
                    borderRadius: 20,
                  }}
                />
                <Text style={{ ...textFontStyles.bodyMediumRegular }}>
                  {goalEnd}
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
      <View>
        <MaterialIcons
          name={pickup ? "arrow-forward" : "check"}
          size={24}
          color={pickup ? appColors.onSurfaceVariant : appColors.tertiaryColor}
        />
      </View>
    </Pressable>
  );
}
