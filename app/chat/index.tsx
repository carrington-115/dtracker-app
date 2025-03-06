import { ChatInput } from "@/components";
import appColors from "@/constants/colors";
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [text, setText] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <ChatInput text={text} setText={setText} submitAction={() => {}} />

      <ScrollView style={styles.scrollViewStyles}>
        <Text>Hello world</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    position: "relative",
  },
  scrollViewStyles: {
    flex: 1,
  },
});
