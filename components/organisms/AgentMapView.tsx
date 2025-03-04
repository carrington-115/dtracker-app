import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

export default function componentName() {
  return (
    <View style={{ width: "100%", paddingHorizontal: 16 }}>
      <Image
        source={require("@/assets/images/test-agent-map.png")}
        style={{ width: "100%", height: 300, objectFit: "contain" }}
      />
    </View>
  );
}
