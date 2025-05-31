import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import PickupFlowElement from "../molecules/PickupFlowElement";
import PickupFlowDetails from "../molecules/PickupFlowDetails";
import { navigationElementProps } from "@/constants/types";

const { width } = Dimensions.get("window");

export default function componentName({
  mapDetails,
  flowStates,
  details,
}: navigationElementProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: appColors.surfaceContainer,
            gap: 10,
          }}
        >
          <Text
            style={{
              ...textFontStyles.titleLargeMedium,
              color: appColors.onSurface,
            }}
          >
            {mapDetails.message}
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <MaterialIcons
                name="timelapse"
                size={24}
                color={appColors.onSurface}
              />
              <Text
                style={{
                  ...textFontStyles.bodyMediumMedium,
                  color: appColors.onSurface,
                }}
              >
                {mapDetails.totalETA}
              </Text>
            </View>
            <Text
              style={{
                ...textFontStyles.bodyMediumMedium,
                color: appColors.onSurface,
              }}
            >
              {mapDetails.startTime} - {mapDetails.ETA}
            </Text>
          </View>
        </View>
        <PickupFlowElement {...flowStates} />
        <TouchableOpacity
          style={{
            width: "100%",
            flexDirection: "row",
            paddingVertical: 2.5,
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
          onPress={() => setShowDetails(!showDetails)}
        >
          <MaterialIcons
            name={showDetails ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color={appColors.onSurface}
          />
          <Text
            style={{
              ...textFontStyles.titleMediumMedium,
              color: appColors.onSurface,
            }}
          >
            {showDetails ? "Reduce" : "Show details"}
          </Text>
        </TouchableOpacity>
        {showDetails && (
          <>
            <PickupFlowDetails {...details} />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 35,
    zIndex: 100,
    elevation: 5,
  },
  innerContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    padding: 20,
    backgroundColor: appColors.surfaceContainer,
    borderRadius: 10,
  },
});
