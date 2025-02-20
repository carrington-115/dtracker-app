import appColors from "@/constants/colors";
import { Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <>
              <View style={{ backgroundColor: "red" }}>
                <Text>Hello</Text>
              </View>
            </>
          ),
        }}
      />
      <Text>Hello world</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor,
        repellat sit porro delectus vel odit sed consequatur soluta dolore iure,
        quod incidunt reiciendis expedita rem temporibus voluptatibus impedit
        fugiat.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: appColors.surfaceBright,
  },
});
