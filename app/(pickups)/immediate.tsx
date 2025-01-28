import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import appColors from "@/constants/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { textFontStyles } from "@/constants/fonts";

export default function componentName() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "transparent",
        }}
      >
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Immediate" />
      </Appbar.Header>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.ImageSection}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <MaterialIcons
              name="image"
              size={120}
              color={appColors.outlineVariant}
            />
            <Text style={{ ...textFontStyles.titleMediumRegular }}>
              Upload Trash Image
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.surfaceContainerLowest,
    flex: 1,
  },
  scrollContainer: {
    marginTop: 50,
  },
  ImageSection: {
    height: 250,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
});
