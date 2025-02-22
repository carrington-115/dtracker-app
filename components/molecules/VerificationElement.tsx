import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { verificationElementProps } from "@/constants/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function componentName({
  link,
  title,
  body,
  completed,
  step,
}: verificationElementProps) {
  return (
    <Link
      href={link}
      style={{
        width: "100%",
        paddingHorizontal: 17,
        paddingVertical: 14,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: completed
          ? appColors.primaryColor
          : appColors.outlineVariant,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            alignItems: "center",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <View
            style={{
              paddingHorizontal: 9,
              paddingVertical: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: completed
                ? appColors.primaryColor
                : appColors.onSurface,
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                ...textFontStyles.bodySmallRegular,
                color: appColors.surfaceBright,
              }}
            >
              {step}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              gap: 5,
              width: "90%",
            }}
          >
            <Text style={{ ...textFontStyles.bodyLargeBold }}>{title}</Text>
            <Text style={{ ...textFontStyles.bodyMediumRegular }}>{body}</Text>
          </View>
        </View>
        <>
          <MaterialIcons
            name={completed ? "check-circle" : "check-circle-outline"}
            size={24}
            color={completed ? appColors.primaryColor : appColors.onSurface}
          />
        </>
      </View>
    </Link>
  );
}
