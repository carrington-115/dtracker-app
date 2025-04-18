import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import appColors from "@/constants/colors";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { CollectionsComponent } from "@/components";

const { width } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header statusBarHeight={0}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Collections" />
      </Appbar.Header>
      <ScrollView
        style={{
          paddingHorizontal: 18,
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <CollectionsComponent
            image={require("@/assets/images/user-image.png")}
            name="John Doe"
            time="12:00 PM"
            wasteType="Plastic"
            size={10}
            payUnits={100}
            onPress={() => {}}
          />
          <CollectionsComponent
            image={require("@/assets/images/user-image.png")}
            name="John Doe"
            time="12:00 PM"
            wasteType="Plastic"
            size={10}
            payUnits={100}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
