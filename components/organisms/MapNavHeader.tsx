import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { IconButton } from "..";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const NavigationHeader = ({
  name,
  ETA,
  distance,
}: {
  name: string;
  ETA: any;
  distance: any;
}) => {
  const router = useRouter();

  return (
    <View style={styles.NavHeaderStyle}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <IconButton
            icon={
              <>
                <MaterialIcons
                  name="arrow-back"
                  size={24}
                  color={appColors.onSurface}
                />
              </>
            }
            pressedColor={appColors.surfaceContainerLow}
            bgColor="transparent"
            btnAction={() => router.push("/")}
          />
          <Text
            style={{
              ...textFontStyles.titleMediumRegular,
              color: appColors.onSurface,
            }}
          >
            Pickup for
          </Text>
          <View
            style={{
              paddingVertical: 2,
              paddingHorizontal: 5,
              borderRadius: 5,
              backgroundColor: appColors.tertiaryContainerColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...textFontStyles.titleLargeMedium,
                color: appColors.onTertiaryContainerColor,
              }}
            >
              {name}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <IconButton
            icon={
              <>
                <MaterialCommunityIcons
                  name="phone-outline"
                  size={24}
                  color={appColors.onTertiaryContainerColor}
                />
              </>
            }
            pressedColor={appColors.tertiaryContainerColor}
            bgColor="transparent"
            btnAction={() => {}}
          />
          <IconButton
            icon={
              <>
                <MaterialCommunityIcons
                  name="message-reply-text-outline"
                  size={24}
                  color={appColors.onSurface}
                />
              </>
            }
            pressedColor={appColors.tertiaryContainerColor}
            bgColor="transparent"
            btnAction={() => router.navigate("/chat")}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingVertical: 5,
          paddingHorizontal: 20,
          backgroundColor: appColors.onTertiaryContainerColor,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            ...textFontStyles.titleMediumRegular,
            color: appColors.surfaceBright,
          }}
        >
          {ETA}
        </Text>
        <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 20,
            backgroundColor: appColors.surfaceBright,
          }}
        />
        <Text
          style={{
            ...textFontStyles.titleMediumRegular,
            color: appColors.surfaceBright,
          }}
        >
          {distance}
        </Text>
      </View>
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  NavHeaderStyle: {
    width: width,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 10,
    backgroundColor: "rgba(248, 248, 248, 1)",
    gap: 5,
  },
});
