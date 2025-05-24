import React from "react";
import { View } from "react-native";
import { ActionButton } from "..";

export default function componentName({ action }: { action?: () => void }) {
  return (
    <View
      style={{
        marginVertical: 20,
      }}
    >
      <ActionButton
        title="Add your location"
        context="Turn on your device location and get access to all exchange points closest to you"
        action={action! || (() => {})}
      />
    </View>
  );
}
