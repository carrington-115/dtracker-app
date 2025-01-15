import { StatusBar, Text, View } from "react-native";
import { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { textFontStyles } from "@/constants/fonts";

export default function Index() {
  console.log(process.env.PORT);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar />
      <Text style={[textFontStyles.displayLargeBold]}>Welcome to DTRACKER</Text>
    </SafeAreaView>
  );
}
