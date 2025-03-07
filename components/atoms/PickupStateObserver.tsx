import appColors from "@/constants/colors";
import { stateObserverProps } from "@/constants/types";
import React from "react";
import { View } from "react-native";

const PickupStateObserver = ({ active, icon }: stateObserverProps) => {
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 50,
        backgroundColor: active
          ? appColors.surfaceContainerHighest
          : appColors.surfaceContainer,
      }}
    >
      <>{icon}</>
    </View>
  );
};

export default PickupStateObserver;
