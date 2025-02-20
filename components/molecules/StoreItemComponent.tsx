import { Image } from "expo-image";
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { IconButton, ElementLabel } from "..";
import appColors from "@/constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { storeItemProps } from "@/constants/types";
import { textFontStyles } from "@/constants/fonts";

export default function componentName({
  pressAction,
  image,
  name,
  labels,
  price,
  addButtonAction,
}: storeItemProps) {
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: pressed
              ? appColors.surfaceContainerLow
              : "transparent",
          },
        ]}
        onPress={pressAction}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: appColors.primaryContainerColor,
            borderRadius: 20,
            position: "relative",
            paddingVertical: 16,
          }}
        >
          <Image source={image} style={{ width: 100, height: 100 }} />
          <View style={{ position: "absolute", bottom: 0, right: 0 }}>
            <IconButton
              icon={
                <MaterialCommunityIcons
                  name="plus"
                  size={24}
                  color={appColors.onPrimaryColor}
                />
              }
              bgColor={appColors.primaryColor}
              btnAction={addButtonAction}
            />
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <ElementLabel name={labels.type} />
            <ElementLabel name={labels.size} />
          </View>
          <View style={{ flexDirection: "column", width: "100%" }}>
            <Text
              style={{
                ...textFontStyles.titleMediumMedium,
                alignSelf: "flex-start",
              }}
            >
              {name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "flex-end",
                width: "auto",
              }}
            >
              <Text style={{ ...textFontStyles.bodySmallBold }}>XAF</Text>
              <Text
                style={{
                  ...textFontStyles.titleLargeBold,
                }}
              >
                {price}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "45%",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
  },
});
