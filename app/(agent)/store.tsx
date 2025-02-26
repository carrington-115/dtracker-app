import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={appColors.surfaceContainerLow}
      />
      <Header />
      <Text>Greenstore page</Text>
    </SafeAreaView>
  );
}

const Header = () => {
  return (
    <>
      <Appbar.Header
        style={{
          backgroundColor: appColors.surfaceContainerLow,
          borderBottomWidth: 0.5,
          borderBottomColor: appColors.outline,
        }}
      >
        <Appbar.Content
          title="Greenstore"
          titleStyle={{ ...textFontStyles.titleLargeMedium }}
        />
        <Appbar.Action icon="store-plus-outline" onPress={() => {}} />
        <Appbar.Action icon="cog-outline" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: appColors.surfaceBright,
  },
});
